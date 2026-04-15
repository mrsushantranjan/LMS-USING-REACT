import { useState, useEffect, useCallback } from "react";
import { progressAPI, certificateAPI } from "../services/api";
import useAuth from "./useAuth";

// ─── USE PROGRESS HOOK ────────────────────────────────────────────────────────
const useProgress = (courseId) => {
  const { isSignedIn } = useAuth();
  const [progress,     setProgress]     = useState(null);
  const [loading,      setLoading]      = useState(true);
  const [error,        setError]        = useState(null);
  const [certificate,  setCertificate]  = useState(null);

  // Fetch current progress
  useEffect(() => {
    if (!isSignedIn || !courseId) {
      setLoading(false);
      return;
    }

    const fetch = async () => {
      try {
        const res = await progressAPI.getProgress(courseId);
        setProgress(res.progress);
      } catch (err) {
        // Not enrolled yet — not an error
        if (!err.message.includes("not enrolled") && !err.message.includes("not found")) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [courseId, isSignedIn]);

  // Mark chapter complete
  const markComplete = useCallback(async (chapterId) => {
    try {
      const res = await progressAPI.markComplete(courseId, chapterId);
      setProgress(res.progress);

      // If course is now 100% complete — auto generate certificate
      if (res.isCompleted) {
        try {
          const certRes = await certificateAPI.generate(courseId);
          setCertificate(certRes.certificate);
          console.log("🎉 Certificate generated!");
        } catch (certErr) {
          console.log("Certificate:", certErr.message);
        }
      }

      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [courseId]);

  // Mark chapter incomplete
  const markIncomplete = useCallback(async (chapterId) => {
    try {
      const res = await progressAPI.markIncomplete(courseId, chapterId);
      setProgress(res.progress);
      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [courseId]);

  // Toggle chapter completion
  const toggleChapter = useCallback(async (chapterId) => {
    const isCompleted = progress?.completedChapters?.includes(chapterId);
    if (isCompleted) {
      return markIncomplete(chapterId);
    } else {
      return markComplete(chapterId);
    }
  }, [progress, markComplete, markIncomplete]);

  return {
    progress,
    loading,
    error,
    certificate,
    progressPercent:    progress?.progressPercent    || 0,
    completedChapters:  progress?.completedChapters  || [],
    isCompleted:        progress?.isCompleted        || false,
    markComplete,
    markIncomplete,
    toggleChapter,
  };
};

export default useProgress;