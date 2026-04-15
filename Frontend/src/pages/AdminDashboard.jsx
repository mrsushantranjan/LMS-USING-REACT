import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { adminAPI } from "../api/api";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Activity
} from "lucide-react";
import useAuth from "../hooks/useAuth";

/* ───────────── DASHBOARD STATS ───────────── */
const DashboardStats = ({ stats }) => {
  return (
    <>
      <div className="admin-grid">
        <div className="stat-card">
          <Users size={22} />
          <h3>{stats.totalUsers}</h3>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <BookOpen size={22} />
          <h3>{stats.totalCourses}</h3>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <TrendingUp size={22} />
          <h3>{stats.totalEnrollments}</h3>
          <p>Enrollments</p>
        </div>
      </div>
    </>
  );
};

/* ───────────── USERS ───────────── */
const UsersManager = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    adminAPI.getUsers().then(setUsers);
  }, []);

  const handleRoleChange = async (id, role) => {
    await adminAPI.updateUserRole(id, role);
    setUsers(users.map(u => u._id === id ? { ...u, role } : u));
  };

  return (
    <div className="admin-panel">
      <h3>User Management</h3>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ───────────── COURSES ───────────── */
const CoursesManager = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    adminAPI.getCourses().then(setCourses);
  }, []);

  const togglePublish = async (id) => {
    await adminAPI.toggleCoursePublish(id);
    setCourses(await adminAPI.getCourses());
  };

  return (
    <div className="admin-panel">
      <h3>Course Management</h3>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Course</th><th>Instructor</th><th>Status</th><th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.instructor?.name}</td>
              <td>{course.isPublished ? "Published" : "Draft"}</td>
              <td>
                <button onClick={() => togglePublish(course._id)}>
                  {course.isPublished ? "Unpublish" : "Publish"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ───────────── MAIN DASHBOARD ───────────── */
const AdminDashboard = () => {
  const { user } = useAuth();
  const location = useLocation();
  const tab = location.pathname.split("/").pop();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalEnrollments: 0
  });

  useEffect(() => {
    adminAPI.getDashboardStats().then(res => {
      if (res.success) setStats(res.stats);
    });
  }, []);

  return (
    <div className="admin-layout">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=DM+Sans:wght@300;400;500&display=swap');

        body {
          font-family: 'DM Sans', sans-serif;
          background: #f8fafc;
        }

        .admin-layout {
          display: flex;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .admin-sidebar {
          width: 260px;
          background: linear-gradient(180deg, #0a5c73, #0e7490, #0369a1);
          color: white;
          padding: 20px;
        }

        .nav-link {
          display: block;
          padding: 10px;
          margin: 6px 0;
          border-radius: 8px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
        }

        .nav-link.active,
        .nav-link:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
        }

        /* MAIN */
        .admin-main {
          flex: 1;
          padding: 30px;
        }

        .page-title {
          font-family: 'Cormorant Garamond';
          font-size: 2rem;
          margin-bottom: 20px;
        }

        /* CARDS */
        .admin-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
          gap: 20px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* PANEL */
        .admin-panel {
          background: white;
          border-radius: 16px;
          padding: 20px;
          margin-top: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* TABLE */
        .admin-table {
          width: 100%;
          border-collapse: collapse;
        }

        .admin-table th,
        .admin-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .admin-table tr:hover {
          background: #f9fafb;
        }

      `}</style>

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2>LMS Admin</h2>

        <Link to="/admin" className={`nav-link ${tab === "admin" ? "active" : ""}`}>
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link to="/admin/users" className={`nav-link ${tab === "users" ? "active" : ""}`}>
          <Users size={18} /> Users
        </Link>

        <Link to="/admin/courses" className={`nav-link ${tab === "courses" ? "active" : ""}`}>
          <BookOpen size={18} /> Courses
        </Link>

        <Link to="/" className="nav-link">
          <Activity size={18} /> Website
        </Link>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <h1 className="page-title">
          {tab === "users" ? "Users" : tab === "courses" ? "Courses" : "Dashboard"}
        </h1>

        <p>Welcome, {user?.name}</p>

        <Routes>
          <Route path="/" element={<DashboardStats stats={stats} />} />
          <Route path="/users" element={<UsersManager />} />
          <Route path="/courses" element={<CoursesManager />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;