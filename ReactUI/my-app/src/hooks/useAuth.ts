import { useState } from "react";
import * as authService from "../Api/authService";
import { useUser } from "../Context/UserContext";

export const useAuth = () => {
  const { setUserAndToken } = useUser();
  const [loading, setLoading] = useState(false);

  const sendOtp = async (phone: string) => {
    setLoading(true);
    try {
      const data = await authService.sendOtp(phone);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (phone: string, otp: string) => {
    setLoading(true);
    try {
      const data = await authService.verifyOtp(phone, otp);
      if (data.token && data.user) setUserAndToken(data.user, data.token);
      return data;
    } finally {
      setLoading(false);
    }
  };

  return { sendOtp, verifyOtp, loading };
};
