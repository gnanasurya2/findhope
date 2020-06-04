import React, { useState } from "react";
import styles from "../styles/Layout.module.css";
import Logo from "../asset/logo.jpeg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
// <img src={Logo} alt="Findhope" className={styles.logoImage} />
const Layout = (props) => {
  const [opacity, setOpacity] = useState({ opacity: 0, display: "none" });
  const [value, set, stop] = useSpring(() => ({
    width: 0,
  }));
  const clickHandler = () => {
    setOpacity({ opacity: 0, display: "none" });
    set({ width: 0 });
  };
  const openMenuHandler = () => {
    setOpacity({ opacity: 1, display: "flex" });
    set({ width: 70 });
  };
  return (
    <>
      <header className={styles.head}>
        <div className={styles.logo}></div>
        <animated.nav
          className={styles.navbar}
          style={{ width: value.width.interpolate((x) => x + "vw") }}
        >
          <div style={opacity}>
            <div className={styles.close} onClick={clickHandler}>
              <div className={styles.cross1}></div>
              <div className={styles.cross2}></div>
            </div>
            <span>
              <div>
                <Link to="/" className={styles.link} onClick={clickHandler}>
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="/youthadvocates"
                  className={styles.link}
                  onClick={clickHandler}
                >
                  Youth Advocates
                </Link>
              </div>
              <div>
                <Link to="/test" className={styles.link} onClick={clickHandler}>
                  Test
                </Link>
              </div>
              <div>
                <Link
                  to="/peercounsellor"
                  className={styles.link}
                  onClick={clickHandler}
                >
                  Peer Counsellor
                </Link>
              </div>
            </span>
          </div>
        </animated.nav>
        <div className={styles.hamburger} onClick={openMenuHandler}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default Layout;
