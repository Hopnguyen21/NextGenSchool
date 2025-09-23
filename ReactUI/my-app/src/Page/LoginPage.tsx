import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { sendOtp, verifyOtp } from "../Api/userService";
import { OtpDialog } from "@/components/OtpDialog";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [overlayOnLeft, setOverlayOnLeft] = useState(true);
  const [phone, setPhone] = useState("");
  const [showOtpDialog, setShowOtpDialog] = useState(false);
const navigate = useNavigate();
  const handleSendOtp = async () => {
  try {
    const data = await sendOtp(phone);
    console.log("Send OTP response:", data); 
      setShowOtpDialog(true); 
  } catch (err: any) {
    console.error("Error sending OTP:", err.response?.data || err.message);
    alert("Error: " + (err.response?.data || err.message));
  }
};


 const handleVerifyOtp = async (otp: string) => {
  try {
    const data = await verifyOtp(phone, otp);
    if (data != null) {
     navigate("/dashboard");
    } else {
      alert("Login failed: " + (data.message || "Invalid OTP"));
    }
  } catch (err: any) {
    alert(err.message || "Error while verifying OTP");
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[720px] max-w-full h-[460px] rounded-xl shadow-2xl overflow-hidden flex">
        {/* Left - Login */}
        <div className={`w-1/2 h-full bg-white flex items-center justify-center transition-all duration-1000 ${
  overlayOnLeft ? "opacity-100" : "opacity-0 pointer-events-none"
}`}>
          <div className="max-w-[260px] w-full text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#008CB8]">Login</h2>
            <div>
              <label htmlFor="phone" className="block mb-1 text-left font-bold">
                Phone Number
              </label>
              <Input
                type="text"
                id="phone"
                placeholder="PhoneNumber"
                className="border p-2 mb-3 w-full rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full bg-[#008CB8] text-white px-4 py-2 rounded hover:opacity-90"
            >
              Login
            </button>
<OtpDialog
  open={showOtpDialog}
  onOpenChange={setShowOtpDialog}
  onVerify={(otp) => handleVerifyOtp(otp)}
/>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-3 text-gray-500 font-semibold">
                Login with Staff
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full bg-white border border-gray-300 px-4 py-3 rounded font-bold hover:bg-gray-100 shadow-md flex items-center justify-center gap-2"
            >
              <FcGoogle className="w-6 h-6" />
              Login with Google
            </button>
          </div>
        </div>

        {/* Right - Register */}
        <div className={`w-1/2 h-full bg-white flex items-center justify-center transition-all duration-1000 ${
  overlayOnLeft ? "opacity-0 pointer-events-none" : "opacity-100"
}`}>
          <div className="max-w-[260px] w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <Input
              type="text"
              placeholder="Username"
              className="border p-2 mb-3 w-full rounded"
            />
            <Input
              type="email"
              placeholder="Email"
              className="border p-2 mb-3 w-full rounded"
            />
            <Input
              type="password"
              placeholder="Password"
              className="border p-2 mb-3 w-full rounded"
            />
            <button className="w-full bg-[#008CB8] text-white px-4 py-2 rounded hover:opacity-90">
              Register
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-[#008CB8] text-white 
                      flex flex-col items-center justify-between py-16
                      transition-transform duration-1000 ease-in-out
                      ${overlayOnLeft ? "translate-x-full" : "translate-x-0"}`}
        >
          <h2 className="text-3xl font-bold text-center transition-opacity duration-500">
            {overlayOnLeft ? "Welcome Back!" : "Welcome To!"}
          </h2>

          <button
            onClick={() => setOverlayOnLeft(!overlayOnLeft)}
            className="px-6 py-3 bg-white text-[#008CB8] font-semibold rounded-md shadow-md hover:scale-[1.05] transition-transform"
          >
            {overlayOnLeft ? "->" : "<-"}
          </button>
        </div>
      </div>

    </div>
    
  );
}
