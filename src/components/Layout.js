import React from "react";
import styles from "../styles/Layout.module.css";
import Logo from "../asset/logo.jpeg";
import { Link } from "react-router-dom";
// <img src={Logo} alt="Findhope" className={styles.logoImage} />
const Layout = (props) => {
  return (
    <>
      <header className={styles.head}>
        <div className={styles.logo}></div>
        <nav className={styles.navbar}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/test">Test</Link>
          </div>
        </nav>
      </header>
      {props.children}
    </>
  );
};

export default Layout;
