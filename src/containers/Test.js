import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import styles from "../styles/Test.module.css";
import InfoBox from "../components/InfoBox";
import PrimaryButton from "../components/PrimaryButton";
import Tree from "../asset/feelbetter.svg";
import { Link } from "react-router-dom";

const Test = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <div className={styles.square1}></div>
          <div className={styles.square2}></div>
        </div>
        <div className={styles.mainTitleContentContainer}>
          <h1 className={styles.mainTitle}>Depression Test</h1>
          <p className={styles.mainContent}>
            Wondering if it's just a phase or something more? Take our short
            online test to find out if you're living with depression.
          </p>
        </div>
      </div>
      <InfoBox background="#4592d1" color="white">
        <h1 className={styles.statTitle}>Over 15 %</h1>
        <p className={styles.statContent}>
          Indian adults suffer from Depression
        </p>
      </InfoBox>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>You are not alone</h1>
        <p className={styles.mainContent} style={{ textAlign: "left" }}>
          Depression is the leading cause of disability worldwide and one of the
          most common mental health conditions globally. That’s right:
          depression can be a serious illness and knows no borders. While we all
          know what it’s like to feel sad, persistent depression can become
          severe and can lead to a range of other emotional and physical health
          issues.
        </p>
        <img src={Tree} alt="tree" className={styles.mainImage} />
      </div>
      <InfoBox background="#EEEFF1" color="black" styles={{ marginTop: "0px" }}>
        <h1 className={styles.mainTitle}> You deserve to feel better</h1>
        <p
          className={styles.statContent}
          style={{ marginTop: "32px", marginBottom: "32px", textAlign: "left" }}
        >
          When you’re up against despair and exhaustion, things may feel like
          they’ll never change. But you don’t have to live with depression.
          You’re here, exploring how to get support. This is the first step. By
          connecting with a licensed therapist, you will get practical guidance
          to feel happier, healthier, and more empowered every day.
        </p>
      </InfoBox>
      <div className={styles.testWrapper}>
        <h1 className={styles.testContainer}>Begin the Depression Test</h1>
        <p className={styles.testContent}>
          Take our short online test, and learn whether you may be living with
          depression.
        </p>
        <Link to="/questions">
          <PrimaryButton title="Begin test" />
        </Link>
      </div>
    </div>
  );
};

export default Test;
