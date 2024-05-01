import axiosConfig from "./axios-config";

export const buyTicketApi = (body) =>
  axiosConfig.post("/lottery/buy/ticket/", body);

export const getCurrentRoundApi = () =>
  axiosConfig.get("/lottery/current-round");

export const getPreviousRoundApi = () =>
  axiosConfig.get("/lottery/previous-round");

export const getTicketApi = () => axiosConfig.get("/lottery/ticket/");
