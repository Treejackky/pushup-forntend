import axios from 'axios';
import { BASE_URL, FRONTEND_URL } from '../_config/_url';

const BASE = BASE_URL();
const FRONTEND = FRONTEND_URL();

const service = axios.create({
  baseURL: BASE,
});

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(config.method.toUpperCase())) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default {
  service,
  apiUrl: BASE,
  frontendUrl: FRONTEND,

  // getHome: (data) => service.get('/home', { params: data }),
  // createHome: (data) => service.post('/home/createHome', data),
  // updateHome: (id, data) => service.put(`/home/updateHome/${id}`, data),
  // deleteHome: (id) => service.delete(`/home/deleteHome/${id}`),
};
