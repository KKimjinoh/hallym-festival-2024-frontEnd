import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const createInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 60000,
});

const axiosInstance = rateLimit(createInstance, {
  maxRequests: 10,
  perMilliseconds: 1000,
});

export default axiosInstance;
