import axios from "axios";
import { toast } from "react-toastify";
import { useRealAuth } from "@/store/useAuthStore";

const axiosConfig = axios.create({
  // baseURL: "http://45.94.213.240/",
baseURL:`${location.origin}`
});

axiosConfig.interceptors.request.use((config) => {
  const token_pair = useRealAuth.getState().token_pair;
  if (token_pair?.access) config.headers.Authorization = token_pair?.access;
  return config;
});

axiosConfig.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (!error.response) {
      toast.error("Connection is lost, please try again");
    }
    //
    else if (error.config.url === "/users/refresh-token/") {
    }
    //
    else if (error.response?.status === 403) {
      try {
        const refresh = useRealAuth.getState().refresh;
        await refresh();
        return axiosConfig(error.config);
      } catch (error) {
        const logout = useRealAuth.getState().logout;
        logout(false);
      }
    }
    //
    else if (error.response?.data?.message) {
      toast.error(error.response?.data?.message);
    }

    return Promise.reject(error);
  }
);

export default axiosConfig;
