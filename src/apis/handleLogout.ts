import { logoutApi } from "@/apis/users";
import {
  tokenLocalStorageKey,
  refreshTokenLocalStorageKey,
  userLocalStorageKey,
} from "@/hooks/useCustomConnect";
import { disconnect } from "@wagmi/core";

const handleLogout = async (callApi = true) => {
  const token = localStorage.getItem(tokenLocalStorageKey);
  const refreshToken = localStorage.getItem(refreshTokenLocalStorageKey);

  localStorage.removeItem(tokenLocalStorageKey);
  localStorage.removeItem(refreshTokenLocalStorageKey);
  localStorage.removeItem(userLocalStorageKey);

  window.dispatchEvent(new Event("storage"));

  if (callApi && refreshToken) {
    try {
      await logoutApi(token, { refresh: refreshToken });
    } catch (error) {}
  }

  await disconnect();
};

export default handleLogout;
