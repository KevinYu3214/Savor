// Menu.jsx
import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { MenuItems, MenuItemsNotLoggedIn } from "./MenuItems"
import { useAuth } from "../../contexts/AuthContext";

const FloatingHeader = () => {
    const { currentUser } = useAuth();
    const userLoggedIn = currentUser !== null; // Check if currentUser exists
    const menuItems = userLoggedIn ? MenuItems : MenuItemsNotLoggedIn;
  return (
    <div>
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
        {menuItems.map(item => (
                        <li key={item.id}><a href={item.url}>{item.title}</a></li>
                    ))}
        </ul>
      </nav>
    </div>
  );
};

export default FloatingHeader;
