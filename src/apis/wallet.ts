import axiosConfig from "./axios-config";

export const createTransactionApi = (body) =>
  axiosConfig.post(`/wallet/Create_transaction/`, body);

export const cashoutListApi = () => axiosConfig.get(`/wallet/cashout-list/`);

export const getCashoutApi = (id) => axiosConfig.get(`/wallet/cashout/${id}/`);

export const createCashoutApi = (id, body) =>
  axiosConfig.post(`/wallet/cashout/${id}/`, body);

export const convertToUsdApi = (body) =>
  axiosConfig.post(`/wallet/convert-to-usd/`, body);

export const currencyListApi = (params) =>
  axiosConfig.get(`/wallet/currency-list/`, { params });

export const depositApi = (body) => axiosConfig.post(`/wallet/deposit/`, body);

export const startSwapApi = (body) =>
  axiosConfig.post(`/wallet/start_swap/`, body);

export const swapDefaultApi = (body) =>
  axiosConfig.post(`/wallet/swap/default/`, body);

export const transactionListApi = () =>
  axiosConfig.get(`/wallet/transaction-list/`);

export const withdrawalApi = (body) =>
  axiosConfig.post(`/wallet/withdrawal/`, body);
