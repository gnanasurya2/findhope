import React, { useState } from "react";
import styles from "../styles/Layout.module.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Hamburger from "./Hamburger";
import Logo from "../asset/Hope Logo.svg";

const Layout = (props) => {
  const [opacity, setOpacity] = useState({ opacity: 0, display: "none" });
  const [toggle, setToggle] = useState(true);
  const [value, set] = useSpring(() => ({
    width: 0,
  }));

  const openMenuHandler = () => {
    setToggle((state) => !state);
    setOpacity(
      toggle ? { opacity: 1, display: "flex" } : { opacity: 0, display: "none" }
    );
    set(toggle ? { width: 70 } : { width: 0 });
  };
  return (
    <>
      <header className={styles.head}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={Logo} alt="Findhope" className={styles.logoImage} />
          </Link>
        </div>
        <animated.nav
          className={styles.navbar}
          style={{ width: value.width.interpolate((x) => x + "vw") }}
        >
          <div style={opacity}>
            <span>
              <div>
                <Link to="/" className={styles.link} onClick={openMenuHandler}>
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="/youthadvocates"
                  className={styles.link}
                  onClick={openMenuHandler}
                >
                  Advocate Program
                </Link>
              </div>
              <div>
                <Link
                  to="/test"
                  className={styles.link}
                  onClick={openMenuHandler}
                >
                  Self Assessments
                </Link>
              </div>
              <div>
                <Link
                  to="/freecounseling"
                  className={styles.link}
                  onClick={openMenuHandler}
                >
                  Free Support
                </Link>
              </div>
              <div>
                <Link
                  to="/blogs"
                  className={styles.link}
                  onClick={openMenuHandler}
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  to="/mhscan"
                  className={styles.link}
                  onClick={openMenuHandler}
                >
                  Mental Health Scan
                </Link>
              </div>
            </span>
          </div>
        </animated.nav>
        <div
          style={{ marginLeft: "40px", zIndex: 200 }}
          onClick={openMenuHandler}
        >
          <Hamburger color="white" toggle={toggle} />
        </div>
      </header>
      {props.children}
    </>
  );
};

export default Layout;
// <div className={styles.close} onClick={clickHandler}>
// <div className={styles.cross1}></div>
// <div className={styles.cross2}></div>
// </div>
