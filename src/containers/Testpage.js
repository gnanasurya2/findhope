import React from "react";
import styles from "../styles/Testpage.module.css";
import TestContainer from "../components/TestContainer";
import Testimonial from "../components/Testimonial";

const TestPage = (props) => {
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
        <TestContainer
          title="Am I sad or Depressed ?"
          background="#4dabde"
          color="#dcf0f7"
        />
        <TestContainer
          title="Am I Stressed ?"
          background="#fce9a2"
          color="#807a7d"
        />
        <TestContainer
          title="Am I Anxious ?"
          background="#6992d9"
          color="#d9d9a9"
        />
      </div>
      <Testimonial />
    </div>
  );
};

export default TestPage;
