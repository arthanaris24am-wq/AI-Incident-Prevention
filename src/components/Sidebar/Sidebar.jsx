import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "🏠",
    },
    {
      name: "Incidents",
      path: "/incidents",
      icon: "🚨",
    },
    {
      name: "Logs",
      path: "/logs",
      icon: "📄",
    },
    {
      name: "AI Analysis",
      path: "/analysis",
      icon: "🤖",
    },
    {
      name: "Prevention",
      path: "/prevention",
      icon: "🛡️",
    },
    {
      name: "Self Healing",
      path: "/self-healing",
      icon: "🔄",
    },
    {
      name: "Reports",
      path: "/reports",
      icon: "📊",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">
        Navigation
      </h3>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span className="menu-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;