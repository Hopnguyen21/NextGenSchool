import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // TODO: viết hàm check token hết hạn
  const isValid = token && !isTokenExpired(token);

  return isValid ? <Outlet /> : <Navigate to="/" replace />;
}

// Hàm check token
function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}
