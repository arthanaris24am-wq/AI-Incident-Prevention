import {Outlets} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
function AppRoutes(){
    return (
        <div ClassName = "appLayout">
            <Navbar/>
        <div ClassName = "MainLayer">
            <Sidebar/>
        <main ClassName = "Page-content">
            <Outlets/>
        </main>
        </div>
        </div>
    );
}
export default MainLayout;