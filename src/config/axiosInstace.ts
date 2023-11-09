import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.DOMAIN,
  timeout: 5000,
  withCredentials: true,
});

export default axiosInstance;
