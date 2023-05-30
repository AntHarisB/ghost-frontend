import axios from "axios";


const axiosApiInstance = axios.create({baseURL: "http://127.0.0.1:8000/"});
// Request interceptor for API calls
// axiosApiInstance.interceptors.request.use(
//   async (config) => {
//     // Get the access token from your Django backend or any other authentication mechanism
//     const accessToken = await fetchAccessToken(); // Replace with your logic to fetch the access token

//     config.headers = {
//       ...config.headers,
//       'Authorization': 'Bearer ${accessToken}',
//       'Accept': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     };

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
// });
axiosApiInstance.interceptors.request.use(
    async (config) => {
      try {
        // Make a request to your Django backend to obtain the access token
        const response = await axios.post('http://127.0.0.1:8000/api/token/', {
          // Provide any necessary data for authentication, such as username and password
          username: 'faris',
          password: 'nesto123',
        });
  
        // Assuming the access token is returned in the response data
        const accessToken = response.data.access_token;
  
        // Update the request headers with the access token
        config.headers = {
          ...config.headers,
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        };
  
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error) => {
      return Promise.reject(error);
  });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Logic to refresh the access token from your Django backend or any other authentication mechanism
      await refreshAccessToken(); // Replace with your logic to refresh the access token

      // Update the Authorization header with the new access token
      const newAccessToken = await fetchAccessToken(); // Replace with your logic to fetch the updated access token
      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

      return axiosApiInstance(originalRequest);
    }

    return Promise.reject(error);
});

// Function to fetch the access token from your Django backend or any other authentication mechanism
async function fetchAccessToken() {
  try {
    // Make a request to your Django backend or any other authentication endpoint to fetch the access token
    const response = await axios.get('http://127.0.0.1:8000/api/token/');

    // Extract the access token from the response data
    const accessToken = response.data.access_token;

    // Return the access token
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error; // Optional: Handle the error as per your requirements
  }
}

// Function to refresh the access token in your Django backend or any other authentication mechanism
async function refreshAccessToken() {
  try {
    // Make a request to your Django backend or any other endpoint to refresh the access token
    const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
      refresh_token: localStorage.getItem('refresh_token'),
    });

    // Extract the refreshed access token from the response data
    const refreshedAccessToken = response.data.access_token;

    // Return the refreshed access token
    return refreshedAccessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error; // Optional: Handle the error as per your requirements
  }
}


export default axiosApiInstance;