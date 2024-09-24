import axios from "axios";
import authService from "./authServices";

const BASE_URL = import.meta.env.VITE_PROD_API_URL 

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization : "Bearer " + authService.getCurrentUser()}
})
    axiosInstance.interceptors.request.use((config) => {
        return config;
    });

    axiosInstance.interceptors.response.use((response) => {
        return response;
    })
export default axiosInstance;