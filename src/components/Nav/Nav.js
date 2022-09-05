import React from "react";
import styles from "./Nav.module.css";
import Logo from "../UI/Images/Logo.png";
import { Link } from "@tanstack/react-location";

const Nav = (props) => {
  return (
    <div className={`${styles["nav-container"]}`}>
      <Link to="/">
        <img className={styles["logo"]} src={Logo} alt="" />
      </Link>

      <div className={"flex fs-400 letter-spacing-2"}>
        <Link
          to="/about"
          className={`${styles["nav-item"]} gradient-yellow-pink`}
        >
          About
        </Link>

        <Link
          to="/portfolio"
          className={`${styles["nav-item"]} gradient-pink-dark-blue`}
        >
          Portfolio
        </Link>

        <Link
          to="shop"
          className={`${styles["nav-item"]} gradient-green-light-blue`}
        >
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Nav;
