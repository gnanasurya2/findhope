import React, { useState, useEffect } from "react";
import styles from "../styles/Advocates.module.css";
import Accordion from "../components/Accordion";
import Data from "../helpers/youthAdvocate.json";
import { useParams, Redirect, Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const Advocates = (props) => {
  const [profile, setProfile] = useState(Data.youthadvocate[0]);
  const [redirect, setRedirect] = useState(false);
  const { name } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const pro = Data.youthadvocate.filter((el) => el.short === name);
    console.log(pro);
    if (!pro.length) {
      setRedirect(true);
    } else {
      setProfile(pro[0]);
    }
  }, [name]);
  return (
    <div className={styles.outerWrapper}>
      {redirect ? <Redirect to="/" /> : null}
      <div className={styles.wrapper}>
        <h1 style={{ fontSize: "48px", textAlign: "center" }}>
          Mental Health Advocate
        </h1>
      </div>
      <img
        src={process.env.PUBLIC_URL + `/assest/${profile.url}`}
        alt="youth advocate"
        className={styles.image}
      />
      <h1 className={styles.name}>{profile.name}</h1>
      {profile.content.map((con) => (
        <p className={styles.content}>{con}</p>
      ))}
      <Accordion
        title="Recognition"
        content=" Although mental health is a fundamental component of health, recognition of mental health disorders and its importance is limited, with Awareness Campaign we promote the symptoms and risk factors of common mental health struggles."
      />
      <Accordion
        title="Stigma"
        content=" Stigma associated with mental health can stop people from reaching out for help, because of the negative stereotypes it imparts on people. Remember your mental health issue doesn't define you."
      />
      <Accordion
        title="Self help"
        content="Just like Health Literacy , mental health literacy refers to recognition, management and prevention of mh disorders by learning self help techniques and understanding when to seek professional help."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2.5%",
        }}
      >
        <h1>
          You can become a mental health advocate by enrolling in our wellbeing
          program.
        </h1>
        <Link to="/youthAdvocates" style={{ textDecoration: "none" }}>
          <PrimaryButton title="Click here to know more" />
        </Link>
      </div>
    </div>
  );
};

export default Advocates;
