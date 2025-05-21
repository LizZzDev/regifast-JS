import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/', 
  withCredentials: true, 
});

api.interceptors.response.use(
  response => response,
  error => {
    const status = error?.response?.status;

    if (status === 403) {
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export default api;