import React from "react";
import styles from "../styles/Layout.module.css";
import Logo from "../asset/logo.jpeg";
// <img src={Logo} alt="Findhope" className={styles.logoImage} />
const Layout = (props) => {
  return (
    <>
      <header className={styles.head}>
        <div className={styles.logo}></div>
        <nav className={styles.navbar}>
          <div>Hompage</div>
          <div>Peer Councelling</div>
          <div>Youth Advocate</div>
          <div>About us</div>
        </nav>
      </header>
      {props.children}
    </>
  );
};

export default Layout;
