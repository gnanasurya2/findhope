import React from "react";
// import { useParams } from "react-router-dom";
import styles from "../styles/Test.module.css";
import depression_Hero from "../asset/depression_hero.svg";
import InfoBox from "../components/InfoBox";
import PrimaryButton from "../components/PrimaryButton";

const Test = (props) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.mainTitleContentContainer}>
          <h1 className={styles.mainTitle}>Depression Test</h1>
          <p className={styles.mainContent}>
            Wondering if it's just a phase or something more? Take our short
            online test to find out if you're living with depression.
          </p>
        </div>
        <img
          src={depression_Hero}
          alt="depression Hero"
          className={styles.mainImage}
        />
      </div>
      <InfoBox background="blue" color="white">
        <h1 className={styles.statTitle}>Over 15 %</h1>
        <p className={styles.statContent}>
          Indian adults suffer from Depression
        </p>
      </InfoBox>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>You are not alone</h1>
        <p
          className={styles.mainContent}
          style={{ width: "100%", marginLeft: "0" }}
        >
          Depression is the leading cause of disability worldwide and one of the
          most common mental health conditiond globally.That's right:Depression
          can be a serious illness and knows no borders but early interventions
          can save you from a lot of pain. While we all know what it's like to
          feel sad,persistent depression can lead to a range of other emotional
          and physical health issues
        </p>
      </div>
      <InfoBox background="blue" color="white">
        <h1 className={styles.mainTitle}> You deserve to feel better</h1>
        <p
          className={styles.statContent}
          style={{ marginTop: "32px", marginBottom: "32px" }}
        >
          when you're up against despair and exhaustion, things may feel like
          they'll never cahnge. But you don't have to live with depression.
          You're here, exploring how to get support. This is the first step. By
          connecting with a peer counselor, you will get pratical guidance to
          feel happier, healthier, and more empowered every day.
        </p>
      </InfoBox>
      <div className={styles.testWrapper}>
        <h1 className={styles.testContainer}>Begin the Depression Test</h1>
        <p className={styles.testContent}>
          Take our short online test, and learn whether you may be living with
          depression.
        </p>
        <PrimaryButton title="Begin test" />
      </div>
    </div>
  );
};

export default Test;
