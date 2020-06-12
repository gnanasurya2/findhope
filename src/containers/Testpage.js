import React, { useEffect } from "react";
import styles from "../styles/Testpage.module.css";
import TestContainer from "../components/TestContainer";
import Testimonial from "../components/Testimonial";
import { NavLink } from "react-router-dom";

const TestPage = (props) => {
  const testClickHandler = () => {
    console.log(props.route);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.backgroundImage}>
          <div className={styles.backgroundSquare}></div>
          <div className={styles.backgroundCircle}></div>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Assessments</h1>
          <p className={styles.mainContent}>
            Simple questionnaires on various topics to help you understand
            youserlf better.
            <br />
            <br />
            Choose the ones that comes closest to describing your problem.
          </p>
        </div>
      </div>
      <div className={styles.testContainer}>
        <NavLink to="/test/depression" style={{ textDecoration: "none" }}>
          <TestContainer
            title="Am I sad or Depressed ?"
            background="#4dabde"
            color="#dcf0f7"
            clicked={testClickHandler}
          />
        </NavLink>
        <NavLink to="/test/stress" style={{ textDecoration: "none" }}>
          <TestContainer
            title="Am I Stressed ?"
            background="#fce9a2"
            color="#807a7d"
          />
        </NavLink>
        <NavLink to="/test/anxiety" style={{ textDecoration: "none" }}>
          <TestContainer
            title="Am I Anxious ?"
            background="#6992d9"
            color="#d9d9a9"
          />
        </NavLink>
      </div>
      <Testimonial />
    </div>
  );
};

export default TestPage;
