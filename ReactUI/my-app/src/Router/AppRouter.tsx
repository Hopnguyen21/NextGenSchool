
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";

export default function AppRouter (){
return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path = "/login" element={<LoginPage />} />
<Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
)

}