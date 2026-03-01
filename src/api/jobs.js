import { apiClient } from "./client";

// Get all jobs with optional filters
export const getJobs = async (params = {}) => {
  try {
    const response = await apiClient.get("/jobs", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// Get a single job by ID
export const getJobById = async (jobId) => {
  try {
    const response = await apiClient.get(`/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};
