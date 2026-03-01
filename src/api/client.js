import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://brigify-backend-1.onrender.com/bridgify/api/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

// Optional: attach token later
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});