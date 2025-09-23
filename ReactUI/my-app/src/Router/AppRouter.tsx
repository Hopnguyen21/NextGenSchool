import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import DashBoard from "@/Page/Dashboard";
import ProtectedRoute from "../Router/ProtectRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Các route cần login */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashBoard />} />
        {/* thêm route khác vào đây */}
        {/* <Route path="/report" element={<Report />} /> */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
