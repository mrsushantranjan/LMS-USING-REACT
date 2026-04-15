import { useState, useEffect, useCallback } from "react";
import { coursesAPI } from "../services/api";

// ─── USE COURSES HOOK ─────────────────────────────────────────────────────────
const useCourses = (filters = {}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [total,   setTotal]   = useState(0);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await coursesAPI.getAll(filters);
      setCourses(res.courses || []);
      setTotal(res.total   || 0);
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch courses:", err.message);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(filters)]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return { courses, loading, error, total, refetch: fetchCourses };
};

export default useCourses;