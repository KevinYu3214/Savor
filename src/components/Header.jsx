import React, { useState } from "react";

import styles from "./Header.module.scss";

import icon from "../assets/icon.png";

import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__company}>
          <img src={icon} className={styles.icon} alt="" />
          <span className={styles.logo}>SAVOR</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/"}>
              Home
            </a>
            <a className={styles.nav__item} href={"/compare"}>
              Compare
            </a>
            <a className={styles.nav__item} href={"/playlists"}>
              Playlists
            </a>
            <a className={styles.nav__item} href={"/search"}>
              Search
            </a>
            <a className={styles.nav__item} href={"/rankings"}>
              Rankings 
              </a>
          </nav>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <HiMenu /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
