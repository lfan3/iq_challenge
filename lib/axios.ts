import axios from 'axios';

// Base URL of your API
const baseURL = process.env.PUBLIC_API_URL || '/api';

// Create a custom Axios instance
const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
// axiosClient.interceptors.request.use(
//     (config) => {
//       // Add authentication token to headers if available
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
// );

// Response interceptor
axiosClient.interceptors.response.use(
    (response) => {
      if(response.status > 199 && response.status < 300){
        response.data.success = true
      }
        return response;
    },
    (error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error Response:',error.response);
        return error.response
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No Response:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error Setting Up Request:', error.message);
      }
      return Promise.reject(error);
    }
  );
  
export default axiosClient;
