import React, { useEffect, useRef } from "react";
import styles from "../styles/YouthAdvocates.module.css";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

import ProblemImage from "../asset/recognising.svg";
import SelfHelpImage from "../asset/findingsupport.svg";
import StigmaImage from "../asset/stigma.svg";
import TimeImage from "../asset/time.svg";
import MoneyImage from "../asset/certified.svg";
import CertifiedImage from "../asset/icons8-checked.svg";
import DriveImage from "../asset/drive the change.svg";
import Youthprofile from "../components/Youthprofile";
import Data from "../helpers/youthAdvocate.json";
import { Link } from "react-router-dom";

const YouthAdvocates = (props) => {
  const formRef = useRef(null);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (formRef) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.setAttribute("data-payment_button_id", "pl_FeVZV32yRCw9kG");
      formRef.current.appendChild(script);
    }
  }, [formRef]);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.circle}></div>
        </div>
        <h1 className={styles.title}>The Mental Health Advocate Program</h1>
        <p className={styles.content}>
          If you have experienced a mental health struggle then you know that
          the road to recovery has 3 pitfalls. Recognising what you are dealing
          with, coping up and Overcoming Stigma. As a mental Heath Leader you
          will make it easy for people around you to deal with this three
        </p>
      </div>
      <div className={styles.problemWrapper}>
        <Card
          image={ProblemImage}
          alt="Problem Thinking"
          title="Recognising problem"
          content="What do we do when we have a cut ? reach out for a Band Aid right. Isn't it obvius with mental health too. But how many of us know the signs of common disorders like Depression ? As a Mental heath leader you will learn and empower others to take action in recognising disorders"
        />
        <Card
          image={SelfHelpImage}
          alt="Self help"
          title="Self-Help"
          content="Just like physical first aid, Mental Health self help has the potential to save a lot of pain by leveraging the advantage of early intervention. Mental Health leaders learn and proliferate basic M.H. Self-Help"
        />
        <Card
          image={StigmaImage}
          alt="Stigma"
          title="Overcoming Stigma"
          content="People suffer alone because they suffer more when they open up and get affected by stigma. Mental Health Leaders openly talk about their issues and proactively bust stigma using resources from our program."
        />
      </div>
      <div className={styles.scheduleWrapper}>
        <h1 className={styles.scheduleTitle}>
          Our Flagship program for Proactive wellbeing
        </h1>
        <Card
          image={TimeImage}
          alt="working time"
          title="15 Mins everyday for 10 days"
          color="#f6d8a6"
        />
        <Card
          image={MoneyImage}
          alt="money"
          title="Costs ₹ 150 only"
          color="#f6d8a6"
        />
        <Card
          image={CertifiedImage}
          alt="tick mark"
          title="Certified"
          color="#f6d8a6"
        />
      </div>
      <div className={styles.signUpWrapper}>
        <h1 className={styles.signUpContent}>You are at the right place if</h1>
        <p className={styles.contentSub}>
          You may have faced Mental Health struggle (or maybe not), but if don't
          want your community to suffer alone.
        </p>
        <img src={DriveImage} alt="sign up" className={styles.image} />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScfLKk4OvdjBv78c9yua18qNK8wDI2hbmq1qktFg__tIJipPg/viewform"
          target="__blank"
          style={{ textDecoration: "none", marginBottom: "30px" }}
        >
          <PrimaryButton title="Signup" />
        </a>

        <form ref={formRef}></form>
        {Data.youthadvocate.map((ele) => (
          <Link
            to={`/youthadvocate/${ele.short}`}
            style={{ width: "100%", textDecoration: "none" }}
          >
            <Youthprofile name={ele.name} place={ele.region} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default YouthAdvocates;
