import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

export const storeTokens = (accessToken, refreshToken) => {
  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};

export const clearTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getNewRefreshToken = async () => {
  const refreshToken = getRefreshToken();

  try {
    const response = await api.post("/api/token/refresh/", {
      refresh: refreshToken,
    });

    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;

    storeTokens(newAccessToken, newRefreshToken);

    return newRefreshToken;
  } catch (error) {
    console.log("Error refreshing token:", error);
  }
};

api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();

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


    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newRefreshToken = await getNewRefreshToken();

      if (newRefreshToken) {
        storeTokens(getAccessToken(), newRefreshToken);
        originalRequest.headers["Authorization"] = `Bearer ${getAccessToken()}`;
        return api(originalRequest);
      } else {
        clearTokens();
        console.log("Error refreshing token. Tokens cleared.");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
