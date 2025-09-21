import { useState } from "react";

export default function LoginPage() {
  const [overlayOnLeft, setOverlayOnLeft] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[720px] max-w-full h-[460px] rounded-xl shadow-2xl overflow-hidden flex">
        {/* Login (bên trái) */}
        <div className="w-1/2 h-full bg-white flex items-center justify-center">
          <div className="max-w-[260px] w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 mb-3 w-full rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 mb-3 w-full rounded"
            />
            <button className="w-full bg-[#008CB8] text-white px-4 py-2 rounded hover:opacity-90">
              Login
            </button>
          </div>
        </div>

        {/* Register (bên phải) */}
        <div className="w-1/2 h-full bg-white flex items-center justify-center">
          <div className="max-w-[260px] w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <input
              type="text"
              placeholder="Username"
              className="border p-2 mb-3 w-full rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 mb-3 w-full rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 mb-3 w-full rounded"
            />
            <button className="w-full bg-[#008CB8] text-white px-4 py-2 rounded hover:opacity-90">
              Register
            </button>
          </div>
        </div>

        {/* Overlay xanh trượt bằng translate */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-[#008CB8] text-white 
                      flex flex-col items-center justify-between py-16
                      transition-transform duration-500 ease-in-out
                      ${overlayOnLeft ? "translate-x-0" : "translate-x-full"}`}
        >
          <h2 className="text-3xl font-bold text-center transition-opacity duration-500">
            {overlayOnLeft ? "Welcome Back!" : "Welcome To!"}
          </h2>

          <button
            onClick={() => setOverlayOnLeft(!overlayOnLeft)}
            className="px-6 py-3 bg-white text-[#008CB8] font-semibold rounded-md shadow-md hover:scale-[1.05] transition-transform"
          >
            {overlayOnLeft ? "Go to Register" : "Go to Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
