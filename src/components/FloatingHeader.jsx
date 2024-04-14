// Menu.jsx
import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { MenuItems, MenuItemsNotLoggedIn } from "./MenuItems.jsx"; // Import MenuItems arrays
import { useAuth } from "../contexts/AuthContext";

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
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/compare"}>Compare</a></li>
          <li><a href={"/playlists"}>Playlists</a></li>
          <li><a href={"/search"}>Search</a></li>
          <li><a href={"/rankings"}>Rankings</a></li>
          <li><a href={"/account"}>Account</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default FloatingHeader;
