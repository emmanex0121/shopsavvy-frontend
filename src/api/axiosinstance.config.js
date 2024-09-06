// ./src/api/axiosinstance.config.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://shopsavvy-backend-e68z.onrender.com/api",
  // baseURL: "http://localhost:8000/api",
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    if (error.response && error.response.status === 401) {
      // If the error status is 401, clear the session storage and log the user out
      console.log(error);
      sessionStorage.clear(); // Clear session storage
      window.location.href = "/"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);
