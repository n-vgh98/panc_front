export const truncate = (str: string, num: number) => {
  if (!str) return null;

  return str.length > num ? str.substring(0, num) + "..." : str;
};
