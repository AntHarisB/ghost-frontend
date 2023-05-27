import axios from "axios";

const api = axios.create();

// Function to retrieve the access token from localStorage
export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

// Function to retrieve the refresh token from localStorage
export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

// Function to store the access token and refresh token in localStorage
export const storeTokens = (accessToken, refreshToken) => {
  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};

// Function to remove the access token and refresh token from localStorage
export const clearTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

// Function to obtain a new refresh token
export const getNewRefreshToken = async () => {
  const refreshToken = getRefreshToken();

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {
      refresh: refreshToken,
    });

    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;

    storeTokens(newAccessToken, newRefreshToken);

    return newRefreshToken;
  } catch (error) {
    console.log("Error refreshing token:", error);
    // Handle the error appropriately
  }
};

// Interceptor for token refresh
api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();

    // Set the Authorization header with the access token
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the response indicates an expired token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newRefreshToken = await getNewRefreshToken();

      // Retry the original request with the new tokens
      if (newRefreshToken) {
        storeTokens(getAccessToken(), newRefreshToken);
        originalRequest.headers["Authorization"] = `Bearer ${getAccessToken()}`;
        return api(originalRequest);
      } else {
        // Clear tokens and handle the error accordingly
        clearTokens();
        console.log("Error refreshing token. Tokens cleared.");
        // Handle the error appropriately
      }
    }

    return Promise.reject(error);
  }
);

export default api;
