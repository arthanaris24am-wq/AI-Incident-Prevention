import React from "react";
import "./Navbar.css";
function Navbar(){
    return(
        <header className = "navbar">
            <div className = "navbar-left">
                <h2 className = "logo">
                    AI INCIDENT COMMANDER
                </h2>
            </div>
            <div className = "navbar-center">
                <Input
                    type = "text"
                    paceholder = "Search incidents.."
                    className = "search-input"
                    />
            </div>
            <div className = "navbar-right">
                <botton className = "icon-button">
                    🔔
                </botton>
                <button className = "icon-button">
                    ⚙️
                </button>
                <div className = "profile">
                    <span>Admin</span>
                </div>
                   
            </div>
        </header>
    );
}
export default Navbar;