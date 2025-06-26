import axios from 'axios';
import { API_BASE_URL } from '../constantes/router';

const api = axios.create({
  baseURL: API_BASE_URL, 
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