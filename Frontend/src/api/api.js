import axios from "axios";

// Dynamically use local backend in development, otherwise default to production
const API_BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:8000" 
  : "https://lms-backend-7btf.onrender.com";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to attach the token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("lms_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authAPI = {
  login: async (credentials) => {
    const response = await apiClient.post("/api/auth/login", credentials);
    return response.data;
  },
  register: async (userData) => {
    const response = await apiClient.post("/api/auth/register", userData);
    return response.data;
  },
  getMe: async () => {
    const response = await apiClient.get("/api/auth/me");
    return response.data;
  },
};

export const coursesAPI = {
  getAll: async (params = {}) => {
    const response = await apiClient.get("/api/courses", { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await apiClient.get(`/api/courses/${id}`);
    return response.data;
  },

  enroll: async (courseId) => {
    const response = await apiClient.post(`/api/courses/${courseId}/enroll`);
    return response.data;
  },

  checkEnrollment: async (courseId) => {
    const response = await apiClient.get(`/api/courses/${courseId}/enrollment-status`);
    return response.data;
  },
};

export const adminAPI = {
  getDashboardStats: async () => {
    const response = await apiClient.get("/api/admin/dashboard");
    return response.data;
  },
  getUsers: async () => {
    const response = await apiClient.get("/api/admin/users");
    return response.data;
  },
  updateUserRole: async (id, role) => {
    const response = await apiClient.put(`/api/admin/users/${id}/role`, { role });
    return response.data;
  },
  deleteUser: async (id) => {
    const response = await apiClient.delete(`/api/admin/users/${id}`);
    return response.data;
  },
  getCourses: async () => {
    const response = await apiClient.get("/api/admin/courses");
    return response.data;
  },
  toggleCoursePublish: async (id) => {
    const response = await apiClient.put(`/api/admin/courses/${id}/publish`);
    return response.data;
  },
};