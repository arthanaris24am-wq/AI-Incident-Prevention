import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Incidents from "../pages/Incidents";
import Logs from "../pages/logs";
import AIAnalysis from "../pages/AIAnalysis";
import Prevention from "../pages/Prevention";
import SelfHealing from "../pages/SelfHealing";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route Path = "/" element = {<Login />}/>
            <Route Element = {<MainLayout />}/>
            <Route Path = "Dashboard" element = {<DashBoard />}/>
            <Route Path = "Incidents" element = {<Incidents/>}/>
            <Route path = "Logs" element = {<Log/>}/>
            <Route path = "AIAnalysis" element = {<AIAnalysis/>}/>
            <Route path="/prevention" element={<Prevention />} />
            <Route path="/self-healing" element={<SelfHealing />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route/>
            <Route path = "*" element = {<Navigate to = "/" replace />}/>
        </Routes>
        </BrowserRouter>
    );
}
export default AppRuotes;