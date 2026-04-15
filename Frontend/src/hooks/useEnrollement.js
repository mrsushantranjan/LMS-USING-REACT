import { useState, useEffect, useCallback } from "react";
import { enrollmentAPI, paymentAPI } from "../services/api";
import { useUser } from "@clerk/clerk-react";

// ─── USE ENROLLMENT HOOK ──────────────────────────────────────────────────────
const useEnrollment = (courseId) => {
  const { isSignedIn } = useUser();
  const [isEnrolled,  setIsEnrolled]  = useState(false);
  const [enrollment,  setEnrollment]  = useState(null);
  const [loading,     setLoading]     = useState(true);
  const [enrolling,   setEnrolling]   = useState(false);
  const [error,       setError]       = useState(null);

  // Check if already enrolled
  useEffect(() => {
    if (!isSignedIn || !courseId) {
      setLoading(false);
      return;
    }

    const check = async () => {
      try {
        const res = await enrollmentAPI.checkEnrollment(courseId);
        setIsEnrolled(res.isEnrolled);
        setEnrollment(res.enrollment);
      } catch (err) {
        console.error("Enrollment check failed:", err.message);
      } finally {
        setLoading(false);
      }
    };

    check();
  }, [courseId, isSignedIn]);

  // Enroll in free course
  const enrollFree = useCallback(async () => {
    try {
      setEnrolling(true);
      setError(null);
      const res = await enrollmentAPI.enrollFree(courseId);
      setIsEnrolled(true);
      setEnrollment(res.enrollment);
      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setEnrolling(false);
    }
  }, [courseId]);

  // Enroll in paid course (mock payment)
  const enrollPaid = useCallback(async () => {
    try {
      setEnrolling(true);
      setError(null);

      // Step 1 — Create mock order
      const orderRes = await paymentAPI.createOrder(courseId);

      // Step 2 — Verify mock payment (always succeeds)
      const verifyRes = await paymentAPI.verifyPayment({
        orderId:  orderRes.orderId,
        courseId: courseId,
        amount:   orderRes.amount,
      });

      setIsEnrolled(true);
      setEnrollment(verifyRes.enrollment);
      return verifyRes;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setEnrolling(false);
    }
  }, [courseId]);

  return { isEnrolled, enrollment, loading, enrolling, error, enrollFree, enrollPaid };
};

export default useEnrollment;