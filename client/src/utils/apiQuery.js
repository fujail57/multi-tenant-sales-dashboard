import axiosInstance from "./axiosInstance";

export const getApiQuery = async (URL) => {
  const response = await axiosInstance.get(URL);
  return response?.data;
};
