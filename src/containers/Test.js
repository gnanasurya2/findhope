import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Test.module.css";
import InfoBox from "../components/InfoBox";
import PrimaryButton from "../components/PrimaryButton";
import Tree from "../asset/feelbetter.svg";
import { Link, Redirect } from "react-router-dom";
import TestData from "../helpers/TestData.json";

const Test = (props) => {
  const [data, setData] = useState({});
  const [redirect, setRedirect] = useState(false);

  const { testName } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    console.log("asfaosf");
    if (testName === "depression") {
      setData(TestData.depression);
    } else if (testName === "stress") {
      setData(TestData.stress);
    } else if (testName === "anxiety") {
      setData(TestData.anxiety);
    } else {
      setRedirect(true);
    }
  }, [testName]);

  return (
    <div>
      {redirect ? <Redirect to="/test" /> : null}
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <div className={styles.square1}></div>
          <div className={styles.square2}></div>
        </div>
        <div className={styles.mainTitleContentContainer}>
          <h1 className={styles.mainTitle}>{data.title}</h1>
          <p className={styles.mainContent}>{data.titleContent}</p>
        </div>
      </div>
      <InfoBox background="#4592d1" color="white">
        <h1 className={styles.statTitle}>{data.stat}</h1>
        <p className={styles.statContent}>
          Indian adults suffer from {data.name}
        </p>
      </InfoBox>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>You are not alone</h1>
        <p className={styles.mainContent} style={{ textAlign: "left" }}>
          {data.content}
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
          they’ll never change. But you don’t have to live with {data.name}.
          You’re here, exploring how to get support. This is the first step. By
          connecting with a licensed therapist, you will get practical guidance
          to feel happier, healthier, and more empowered every day.
        </p>
      </InfoBox>
      <div className={styles.testWrapper}>
        <h1 className={styles.testContainer}>Begin the {data.title}</h1>
        <p className={styles.testContent}>
          Take our short online test, and learn whether you may be living with
          {data.depression}
        </p>
        <Link to={`/questions/${data.name}`}>
          <PrimaryButton title="Begin test" />
        </Link>
      </div>
    </div>
  );
};

export default Test;
