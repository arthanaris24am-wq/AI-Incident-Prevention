import {Outlets} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
function AppRoutes(){
    return (
        <div ClassName = "app-layout">
            <Navbar/>
        <div ClassName = "main-container">
            <Sidebar/>
        <main ClassName = "page-content">
            <Outlet/>
        </main>
        </div>
        </div>
    );
}
export default MainLayout;