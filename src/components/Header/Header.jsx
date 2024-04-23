import React, { useContext, useState } from "react";
import styles from "./Header.module.scss";
import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { IconContext } from "react-icons";
import ThemeContext from "../../contexts/ThemeContext";
import { MenuItems, MenuItemsNotLoggedIn } from "./MenuItems";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  const { theme, setTheme } = useContext(ThemeContext); // Get the theme from context
  console.log(theme);

  const returnHome = () => {
    window.location.href = "/";
  };

  // Define which menu items to use based on user status
  const userLoggedIn = currentUser !== null; // Check if currentUser exists
  const menuItems = userLoggedIn ? MenuItems : MenuItemsNotLoggedIn;

  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.header__content}>
        <div className={styles.header__company}>
          <span className={styles.logo} onClick={returnHome}>
            SAVOR
          </span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            {menuItems.map((item) => (
              <a key={item.id} className={styles.nav__item} href={item.url}>
                {item.title}
              </a>
            ))}
            <a className={styles.nav__item} href={"/account"}>
              <IconContext.Provider value={{ size: 50 }}>
                <MdAccountCircle className={styles.accountCircle} />
              </IconContext.Provider>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
