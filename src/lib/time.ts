import dayjs from "dayjs";

export const formatDateTime = (date) => {
  return dayjs(date).format("YYYY-MM-DD, HH:mm");
};
