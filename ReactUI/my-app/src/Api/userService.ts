import apiClient from "./apiClient";
export const sendOtp = async (phone: string): Promise<{ message: string; otp?: string }> => {
  const res = await apiClient.get(`/Auth?phone=${phone}`);
  return res.data;
};
export const verifyOtp = async (phone: string, otp: string) => {
  const res = await apiClient.get(`/Auth/verify-otp?phone=${phone}&otp=${otp}`);
  return res.data;
}