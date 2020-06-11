import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Test.module.css";
import InfoBox from "../components/InfoBox";
import PrimaryButton from "../components/PrimaryButton";
import Tree from "../asset/feelbetter.svg";
import { Link, Redirect } from "react-router-dom";
import TestData from "../helpers/TestData.json";
import GoogleLogin from "react-google-login";

const Test = (props) => {
  const [data, setData] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [backgroundcolor, setBackgroundcolor] = useState([
    "#4592d1",
    "#dcf0f7",
  ]);
  const [formLink, setFormLink] = useState(
    "https://docs.google.com/forms/u/5/d/e/1FAIpQLSdaUun4-lKr9hkPmjtLQsbl24SPO3-Gh5OS8_JzokqGH8eERA/formResponse"
  );
  const [entryValues, setEntryValues] = useState([
    "entry.1758988128",
    "entry.1916594965",
  ]);
  const { testName } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    console.log("asfaosf");
    if (testName === "depression") {
      setData(TestData.depression);
    } else if (testName === "stress") {
      setData(TestData.stress);
      setBackgroundcolor(["#fce9a2", "#807a7d"]);
      setFormLink(
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLScFCedzWi5UfDtvloVWQKi59_0t4A0eQV8dQqjD6oyW7xOMYg/formResponse"
      );
      setEntryValues(["entry.457685019", "entry.1693599908"]);
    } else if (testName === "anxiety") {
      setData(TestData.anxiety);
      setBackgroundcolor(["#6992d9", "#d9d9a9"]);
      setFormLink(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLScKqnCynizG-eS7MOHM6OTCd8IKEHACutTmmC_bcwV7j0xiwQ/formResponse"
      );
      setEntryValues(["entry.1539871518", "entry.1418110594"]);
    } else {
      setRedirect(true);
    }
  }, [testName]);
  const googleLoginHandler = (response) => {
    let body = {
      "entry.1539871518": response.profileObj.name.split(" ").join(""),
      "entry.1418110594": response.profileObj.email,
    };
    console.log(body);
    fetch(
      `https://cors-anywhere.herokuapp.com/${formLink}?${entryValues[0]}=${response.profileObj.name}&${entryValues[1]}=${response.profileObj.email}`,
      {
        method: "POST",
        headers: { Content: "xml" },
      }
    )
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
    console.log(response.profileObj.name);
    setRedirect(true);
  };
  return (
    <div>
      {redirect ? (
        <Redirect
          to={`/questions/${
            testName.charAt(0).toUpperCase() + testName.slice(1)
          }`}
        />
      ) : null}
      <div className={styles.wrapper}>
        <div
          className={styles.background}
          style={{ backgroundColor: backgroundcolor[0] }}
        >
          <div
            className={styles.square1}
            style={{ opacity: 0.2, backgroundColor: backgroundcolor[1] }}
          ></div>
          <div
            className={styles.square2}
            style={{ opacity: 0.2, backgroundColor: backgroundcolor[1] }}
          ></div>
        </div>
        <div
          className={styles.mainTitleContentContainer}
          style={{ color: backgroundcolor[1] }}
        >
          <h1 className={styles.mainTitle}>{data.title}</h1>
          <p className={styles.mainContent}>{data.titleContent}</p>
        </div>
      </div>
      <InfoBox background={backgroundcolor[0]} color={backgroundcolor[1]}>
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
          <GoogleLogin
            clientId="355243087266-ejcdhnmpjthed1jli8dtv2grq3gtoua7.apps.googleusercontent.com"
            onSuccess={googleLoginHandler}
            onFailure={googleLoginHandler}
            cookiePolicy={"single_host_origin"}
            buttonText="Sign in with google to continue"
            theme="dark"
          />
        </Link>
      </div>
    </div>
  );
};

export default Test;
