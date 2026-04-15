import axios from "axios";

const API_BASE_URL = "https://lms-backend-7btf.onrender.com";

export const authAPI = {
  syncUser: async (token, userData) => {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/sync`,
      userData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  },
};

export const coursesAPI = {
  getAll: async (params = {}) => {
    const response = await axios.get(`${API_BASE_URL}/api/courses`, { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/api/courses/${id}`);
    return response.data;
  },

  enroll: async (courseId, clerkId) => {
    const response = await axios.post(
      `${API_BASE_URL}/api/courses/${courseId}/enroll`,
      { clerkId }
    );
    return response.data;
  },

  checkEnrollment: async (courseId, clerkId) => {
    const response = await axios.get(
      `${API_BASE_URL}/api/courses/${courseId}/enrollment-status`,
      {
        params: { clerkId },
      }
    );
    return response.data;
  },
};