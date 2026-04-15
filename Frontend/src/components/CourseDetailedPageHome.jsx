import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  Search, SlidersHorizontal,
  User, Star, BookOpen, Tag, Loader, X,
} from "lucide-react";
import { coursesAPI } from "../api/api";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
const CATEGORIES    = ["All", "Development", "Design", "Data", "Marketing"];
const LEVELS        = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const VISIBLE_COUNT = 8;

const isCourseFree = (c) =>
  c.isFree || !c.price ||
  (c.price.original == null && c.price.sale == null) ||
  c.price.original === 0;

const getPriceDisplay = (c) => {
  if (isCourseFree(c)) return { type: "free" };
  const { original, sale } = c.price ?? {};
  if (sale != null)     return { type: "sale", current: `₹${sale}`,     original: original > sale ? `₹${original}` : null };
  if (original != null) return { type: "paid", current: `₹${original}`, original: null };
  return { type: "free" };
};

const CATEGORY_COLORS = {
  Development: { bg: "#1e3a5f", accent: "#38bdf8", dot: "#0ea5e9" },
  Design:      { bg: "#3b1f5e", accent: "#c084fc", dot: "#a855f7" },
  Data:        { bg: "#1a3d2e", accent: "#34d399", dot: "#10b981" },
  Marketing:   { bg: "#3d1f1f", accent: "#fb923c", dot: "#f97316" },
  default:     { bg: "#1e293b", accent: "#94a3b8", dot: "#64748b" },
};

const getCatColor = (cat) => CATEGORY_COLORS[cat] || CATEGORY_COLORS.default;

export default function CourseDetailedPageHome() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [courses,          setCourses]          = useState([]);
  const [loading,          setLoading]          = useState(true);
  const [error,            setError]            = useState(null);
  const [searchTerm,       setSearchTerm]       = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel,    setSelectedLevel]    = useState("All Levels");
  const [sortBy,           setSortBy]           = useState("popularity");
  const [showFilters,      setShowFilters]      = useState(false);
  const [visibleCount,     setVisibleCount]     = useState(VISIBLE_COUNT);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (selectedCategory !== "All") params.append("category", selectedCategory);
      if (selectedLevel !== "All Levels") params.append("level", selectedLevel);
      if (sortBy) params.append("sort", sortBy);
      const response = await coursesAPI.getAll(Object.fromEntries(params));
      setCourses(Array.isArray(response) ? response : response.courses || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Failed to load courses. Please try again.");
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, selectedCategory, selectedLevel, sortBy]);

  useEffect(() => { fetchCourses(); }, [fetchCourses]);

  const handleEnrollClick = (courseId, isFree) => {
    if (!user) { navigate("/sign-in"); return; }
    if (isFree) {
      navigate(`/courses/${courseId}`);
    } else {
      navigate(`/payment/${courseId}`);
    }
  };

  const handleLoadMore = () => setVisibleCount(prev => prev + VISIBLE_COUNT);

  const handleReset = () => {
    setSearchTerm(""); setSelectedCategory("All");
    setSelectedLevel("All Levels"); setSortBy("popularity");
    setVisibleCount(VISIBLE_COUNT);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch   = course.title?.toLowerCase().includes(searchTerm.toLowerCase()) || course.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesLevel    = selectedLevel === "All Levels" || course.level?.toLowerCase() === selectedLevel.toLowerCase();
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":  return (getPriceDisplay(a).current?.replace("₹","") || 0) - (getPriceDisplay(b).current?.replace("₹","") || 0);
      case "price-high": return (getPriceDisplay(b).current?.replace("₹","") || 0) - (getPriceDisplay(a).current?.replace("₹","") || 0);
      case "rating":     return (b.rating || 0) - (a.rating || 0);
      case "newest":     return new Date(b.createdAt) - new Date(a.createdAt);
      default:           return (b.enrollmentCount || 0) - (a.enrollmentCount || 0);
    }
  });

  const visibleCourses = sortedCourses.slice(0, visibleCount);
  const hasMore        = visibleCount < sortedCourses.length;
  const activeFilters  = (selectedCategory !== "All" ? 1 : 0) + (selectedLevel !== "All Levels" ? 1 : 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:        #080e1a;
          --surface:   #0d1525;
          --surface2:  #111d30;
          --border:    rgba(148,163,184,0.08);
          --border2:   rgba(148,163,184,0.14);
          --text:      #e2e8f0;
          --muted:     #64748b;
          --accent:    #38bdf8;
          --accent2:   #818cf8;
          --green:     #34d399;
          --ff-head:   'Syne', sans-serif;
          --ff-body:   'DM Sans', sans-serif;
          --radius:    16px;
          --card-r:    20px;
        }

        .cdp-root {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          color: var(--text);
          position: relative;
          overflow-x: hidden;
        }

        /* ── NOISE OVERLAY ── */
        .cdp-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ── HERO ── */
        .cdp-hero {
          position: relative;
          padding: 72px 24px 48px;
          text-align: center;
          overflow: hidden;
        }

        .cdp-hero-glow {
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cdp-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border: 1px solid rgba(56,189,248,0.25);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
          background: rgba(56,189,248,0.06);
        }

        .cdp-hero-title {
          font-family: var(--ff-head);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #f1f5f9;
          margin-bottom: 14px;
        }

        .cdp-hero-title span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cdp-hero-sub {
          font-size: 0.95rem;
          color: var(--muted);
          font-weight: 300;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── STICKY TOOLBAR ── */
        .cdp-toolbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(8,14,26,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 14px 24px;
        }

        .cdp-toolbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cdp-search-wrap {
          flex: 1;
          position: relative;
        }

        .cdp-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted);
        }

        .cdp-search {
          width: 100%;
          padding: 11px 14px 11px 42px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 12px;
          font-family: var(--ff-body);
          font-size: 0.875rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .cdp-search::placeholder { color: var(--muted); }

        .cdp-search:focus {
          border-color: rgba(56,189,248,0.4);
          box-shadow: 0 0 0 3px rgba(56,189,248,0.08);
        }

        .cdp-filter-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 12px;
          color: var(--text);
          font-family: var(--ff-body);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .cdp-filter-btn:hover { border-color: rgba(56,189,248,0.3); background: var(--surface); }
        .cdp-filter-btn.active { border-color: rgba(56,189,248,0.5); color: var(--accent); }

        .cdp-filter-badge {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--accent);
          color: #080e1a;
          font-size: 0.65rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── FILTER PANEL ── */
        .cdp-filters {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }

        .cdp-filters.open {
          max-height: 200px;
        }

        .cdp-filters-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px;
          align-items: end;
        }

        .cdp-filter-group label {
          display: block;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 8px;
        }

        .cdp-select {
          width: 100%;
          padding: 9px 32px 9px 12px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.82rem;
          color: var(--text);
          outline: none;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          transition: border-color 0.2s;
        }

        .cdp-select:focus { border-color: rgba(56,189,248,0.4); }
        .cdp-select option { background: #0d1525; }

        .cdp-reset-btn {
          width: 100%;
          padding: 10px 16px;
          background: transparent;
          border: 1.5px solid var(--border2);
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.82rem;
          color: var(--muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .cdp-reset-btn:hover { border-color: rgba(239,68,68,0.4); color: #f87171; }

        /* ── CATEGORY PILLS ── */
        .cdp-pills {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 0;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cdp-pill {
          padding: 6px 16px;
          border-radius: 100px;
          border: 1.5px solid var(--border2);
          background: transparent;
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }

        .cdp-pill:hover { border-color: var(--border2); color: var(--text); background: var(--surface2); }

        .cdp-pill.active {
          background: linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15));
          border-color: rgba(56,189,248,0.4);
          color: var(--accent);
        }

        /* ── MAIN ── */
        .cdp-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 24px 64px;
          position: relative;
          z-index: 1;
        }

        .cdp-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cdp-meta-count {
          font-family: var(--ff-head);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .cdp-meta-count strong { color: var(--text); }

        /* ── GRID ── */
        .cdp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
          gap: 20px;
        }

        /* ── CARD ── */
        .cdp-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--card-r);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
        }

        .cdp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.15);
          border-color: rgba(56,189,248,0.2);
        }

        /* Card thumbnail */
        .cdp-card-thumb {
          position: relative;
          height: 160px;
          overflow: hidden;
        }

        .cdp-card-thumb-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cdp-card:hover .cdp-card-thumb-bg { transform: scale(1.06); }

        .cdp-card-thumb-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }

        .cdp-free-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 10px;
          background: rgba(52,211,153,0.15);
          border: 1px solid rgba(52,211,153,0.4);
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--green);
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        /* Card body */
        .cdp-card-body { padding: 18px; }

        .cdp-card-cat {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cdp-card-cat-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
        }

        .cdp-card-title {
          font-family: var(--ff-head);
          font-size: 0.95rem;
          font-weight: 700;
          color: #f1f5f9;
          line-height: 1.4;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s;
        }

        .cdp-card:hover .cdp-card-title { color: var(--accent); }

        .cdp-card-stars {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-bottom: 10px;
        }

        .cdp-card-star { width: 12px; height: 12px; }
        .cdp-card-star.filled { color: #fbbf24; fill: #fbbf24; }
        .cdp-card-star.empty  { color: #1e293b;  fill: #1e293b; }

        .cdp-card-enroll-count {
          font-size: 0.72rem;
          color: var(--muted);
          margin-left: 4px;
        }

        .cdp-card-instructor {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--muted);
          margin-bottom: 14px;
        }

        /* Card footer */
        .cdp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-top: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
        }

        .cdp-price-free {
          font-family: var(--ff-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--green);
        }

        .cdp-price-paid {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .cdp-price-current {
          font-family: var(--ff-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
        }

        .cdp-price-original {
          font-size: 0.78rem;
          color: var(--muted);
          text-decoration: line-through;
        }

        .cdp-enroll-btn {
          padding: 8px 18px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          border: none;
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 14px rgba(14,165,233,0.25);
        }

        .cdp-enroll-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14,165,233,0.4);
        }

        /* ── STATES ── */
        .cdp-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 16px;
        }

        .cdp-loading-text {
          font-size: 0.85rem;
          color: var(--muted);
          font-weight: 300;
          letter-spacing: 0.04em;
        }

        .cdp-error {
          margin-bottom: 28px;
          padding: 16px 20px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 14px;
          color: #fca5a5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 0.85rem;
        }

        .cdp-retry-btn {
          padding: 7px 16px;
          background: rgba(239,68,68,0.15);
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: 8px;
          color: #fca5a5;
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .cdp-retry-btn:hover { background: rgba(239,68,68,0.25); }

        .cdp-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 14px;
          text-align: center;
        }

        .cdp-empty-icon {
          width: 64px; height: 64px;
          border-radius: 20px;
          background: var(--surface2);
          border: 1px solid var(--border2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .cdp-empty-title {
          font-family: var(--ff-head);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text);
        }

        .cdp-empty-sub {
          font-size: 0.85rem;
          color: var(--muted);
          font-weight: 300;
        }

        /* ── LOAD MORE ── */
        .cdp-load-wrap {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .cdp-load-btn {
          padding: 13px 36px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text);
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }

        .cdp-load-btn:hover {
          border-color: rgba(56,189,248,0.4);
          color: var(--accent);
          background: rgba(56,189,248,0.06);
        }

        /* ── SKELETON ── */
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }

        .cdp-skeleton {
          background: linear-gradient(90deg, var(--surface2) 25%, rgba(255,255,255,0.04) 50%, var(--surface2) 75%);
          background-size: 600px 100%;
          animation: shimmer 1.6s infinite;
          border-radius: 8px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .cdp-hero { padding: 48px 16px 32px; }
          .cdp-toolbar { padding: 12px 16px; }
          .cdp-main { padding: 20px 16px 48px; }
          .cdp-pills { padding: 16px 16px 0; }
          .cdp-grid { grid-template-columns: 1fr; }
        }

        /* ── CARD ANIM ── */
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cdp-card { animation: cardIn 0.4s ease both; }
        .cdp-card:nth-child(1) { animation-delay: 0.04s; }
        .cdp-card:nth-child(2) { animation-delay: 0.08s; }
        .cdp-card:nth-child(3) { animation-delay: 0.12s; }
        .cdp-card:nth-child(4) { animation-delay: 0.16s; }
        .cdp-card:nth-child(5) { animation-delay: 0.20s; }
        .cdp-card:nth-child(6) { animation-delay: 0.24s; }
        .cdp-card:nth-child(7) { animation-delay: 0.28s; }
        .cdp-card:nth-child(8) { animation-delay: 0.32s; }
      `}</style>

      <div className="cdp-root">
        {/* ── HERO ── */}
        <div className="cdp-hero">
          <div className="cdp-hero-glow" />
          <div className="cdp-hero-label">
            <BookOpen size={11} />
            Course Catalog
          </div>
          <h1 className="cdp-hero-title">
            Expand Your <span>Knowledge</span>
          </h1>
          <p className="cdp-hero-sub">
            Explore our curated library of courses — from beginner fundamentals to advanced specializations.
          </p>
        </div>

        {/* ── TOOLBAR ── */}
        <div className="cdp-toolbar">
          <div className="cdp-toolbar-inner">
            <div className="cdp-search-wrap">
              <Search size={16} className="cdp-search-icon" />
              <input
                type="text"
                placeholder="Search courses, topics, instructors…"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(VISIBLE_COUNT); }}
                className="cdp-search"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`cdp-filter-btn ${showFilters || activeFilters > 0 ? "active" : ""}`}
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFilters > 0 && <span className="cdp-filter-badge">{activeFilters}</span>}
            </button>
          </div>
        </div>

        {/* ── FILTER PANEL ── */}
        <div className={`cdp-filters ${showFilters ? "open" : ""}`}>
          <div className="cdp-filters-inner">
            <div className="cdp-filter-group">
              <label>Level</label>
              <select
                className="cdp-select"
                value={selectedLevel}
                onChange={(e) => { setSelectedLevel(e.target.value); setVisibleCount(VISIBLE_COUNT); }}
              >
                {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            <div className="cdp-filter-group">
              <label>Sort By</label>
              <select
                className="cdp-select"
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); setVisibleCount(VISIBLE_COUNT); }}
              >
                <option value="popularity">Popularity</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
              </select>
            </div>

            <div className="cdp-filter-group">
              <label>&nbsp;</label>
              <button onClick={handleReset} className="cdp-reset-btn">
                <X size={13} /> Reset all
              </button>
            </div>
          </div>
        </div>

        {/* ── CATEGORY PILLS ── */}
        <div className="cdp-pills">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`cdp-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => { setSelectedCategory(cat); setVisibleCount(VISIBLE_COUNT); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── MAIN ── */}
        <div className="cdp-main">

          {/* Error */}
          {error && (
            <div className="cdp-error">
              <span>{error}</span>
              <button onClick={fetchCourses} className="cdp-retry-btn">Retry</button>
            </div>
          )}

          {/* Meta row */}
          {!loading && (
            <div className="cdp-meta">
              <p className="cdp-meta-count">
                Showing <strong>{visibleCourses.length}</strong> of <strong>{sortedCourses.length}</strong> courses
              </p>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="cdp-loading">
              <Loader size={28} color="#38bdf8" style={{ animation: "spin 0.8s linear infinite" }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <span className="cdp-loading-text">Loading courses…</span>
            </div>
          )}

          {/* Grid */}
          {!loading && visibleCourses.length > 0 && (
            <>
              <div className="cdp-grid">
                {visibleCourses.map(course => {
                  const catColors   = getCatColor(course.category);
                  const priceDisplay = getPriceDisplay(course);
                  return (
                    <div key={course._id} className="cdp-card">
                      {/* Thumbnail */}
                      <div className="cdp-card-thumb" style={{ background: `linear-gradient(135deg, ${catColors.bg}, #0d1525)` }}>
                        {course.thumbnail
                          ? <img src={course.thumbnail} alt={course.title} className="cdp-card-thumb-bg" />
                          : (
                            <div className="cdp-card-thumb-placeholder" style={{ background: `linear-gradient(135deg, ${catColors.bg}, #080e1a)` }}>
                              <BookOpen size={36} color={catColors.accent} style={{ opacity: 0.4 }} />
                            </div>
                          )
                        }
                        {isCourseFree(course) && <div className="cdp-free-badge">Free</div>}
                      </div>

                      {/* Body */}
                      <div className="cdp-card-body">
                        {course.category && (
                          <div className="cdp-card-cat" style={{ color: catColors.accent }}>
                            <span className="cdp-card-cat-dot" style={{ background: catColors.dot }} />
                            {course.category}
                          </div>
                        )}

                        <h3 className="cdp-card-title">{course.title}</h3>

                        {course.rating && (
                          <div className="cdp-card-stars">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`cdp-card-star ${i < Math.floor(course.rating) ? "filled" : "empty"}`}
                              />
                            ))}
                            <span className="cdp-card-enroll-count">({course.enrollmentCount || 0})</span>
                          </div>
                        )}

                        {course.instructor && (
                          <div className="cdp-card-instructor">
                            <User size={12} />
                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {course.instructor}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="cdp-card-footer">
                        {priceDisplay.type === "free" ? (
                          <span className="cdp-price-free">Free</span>
                        ) : (
                          <div className="cdp-price-paid">
                            <span className="cdp-price-current">{priceDisplay.current}</span>
                            {priceDisplay.original && (
                              <span className="cdp-price-original">{priceDisplay.original}</span>
                            )}
                          </div>
                        )}
                        <button className="cdp-enroll-btn" onClick={() => handleEnrollClick(course._id, isCourseFree(course))}>
  {isCourseFree(course) ? "Enroll Free" : "Buy Now"}
</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {hasMore && (
                <div className="cdp-load-wrap">
                  <button className="cdp-load-btn" onClick={handleLoadMore}>
                    Load more courses
                  </button>
                </div>
              )}
            </>
          )}

          {/* Empty */}
          {!loading && visibleCourses.length === 0 && (
            <div className="cdp-empty">
              <div className="cdp-empty-icon">
                <BookOpen size={28} color="#334155" />
              </div>
              <p className="cdp-empty-title">No courses found</p>
              <p className="cdp-empty-sub">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}