import axiosConfig from "./axios-config";

export const logoutApi = (accessToken, body) =>
  axiosConfig.post("/users/logout/", body, {
    headers: {
      Authorization: accessToken,
    },
  });

export const verifyLoginApi = (body) =>
  axiosConfig.post("/users/verify-login/", body);

export const refreshTokenApi = (body) =>
  axiosConfig.post("/users/refresh-token/", body);

export const walletBalanceApi = () => axiosConfig.get("/users/wallet/balance/");
