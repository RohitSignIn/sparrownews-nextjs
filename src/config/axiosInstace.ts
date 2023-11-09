import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.DOMAIN,
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
