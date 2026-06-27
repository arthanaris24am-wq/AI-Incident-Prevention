import React from "react";
import "./Navbar.css";
function Navbar(){
    return(
        <header className = "Navbar">
            <div className = "navbar-left">
                <h2 className = "logo">
                    AI INCIDENT COMMANDER
                </h2>
            </div>
            <div className = "navbar-center">
                <Input
                    type = "text"
                    paceholder = "search"
                    className = "Search inputs"
                    />
            </div>
            <div className = "navbar-right">
                <botton className = "icon">
                    🔔
                </botton>
                <button className = "icon">
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