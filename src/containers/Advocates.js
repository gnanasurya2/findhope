import React, { useState, useEffect } from "react";
import styles from "../styles/Advocates.module.css";
import Accordion from "../components/Accordion";
import Data from "../helpers/youthAdvocate.json";
import { useParams, Redirect } from "react-router-dom";

const Advocates = (props) => {
  const [profile, setProfile] = useState(Data.youthadvocate[0]);
  const [redirect, setRedirect] = useState(false);
  const { name } = useParams();
  useEffect(() => {
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
    </div>
  );
};

export default Advocates;
