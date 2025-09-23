import apiClient from "./apiClient"; // axios đã setup sẵn

export const sendOtp = async (phone: string) => {
  const res = await apiClient.get(`/Auth?phone=${phone}`);
  return res.data; // { message: string; otp?: string }
};

export const verifyOtp = async (phone: string, otp: string) => {
  const res = await apiClient.post(`/Auth/verify-otp?phone=${phone}&otp=${otp}`);
  return res.data; // { token: string, user: ProfileUserDTO }
};
