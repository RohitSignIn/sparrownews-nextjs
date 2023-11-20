import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
