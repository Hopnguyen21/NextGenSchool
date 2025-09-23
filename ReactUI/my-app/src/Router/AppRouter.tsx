
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import DashBoard from "@/Page/Dashboard";
export default function AppRouter (){
return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path = "/login" element={<LoginPage />} />
    <Route path="/Dashboard" element ={<DashBoard/>}/>
<Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
)

}