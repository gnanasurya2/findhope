import React from "react";
import styles from "../styles/YouthAdvocates.module.css";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

import ProblemImage from "../asset/recognising.svg";
import SelfHelpImage from "../asset/findingsupport.svg";
import StigmaImage from "../asset/stigma.svg";
import TimeImage from "../asset/time.svg";
import MoneyImage from "../asset/certified.svg";
import CertifiedImage from "../asset/certified (2).svg";
import DriveImage from "../asset/drive the change.svg";

const YouthAdvocates = (props) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>The Mental Health Leaders Program</h1>
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
          title="Recognising problem"
          content="What do we do when we have a cut ? reach out for a Band Aid right, It's per se because we understand that we are bleeding. Isn't it obvius with mental health too. But how many of us know the signs of common disorders like Depression ? As a Mental heath leader you will learn and empower others to take action in recognising disorders"
        />
        <Card
          image={SelfHelpImage}
          title="Self-Help"
          content="Just like physical first aid, Mental Health self help has the potential to save a lot of pain by leveraging the advantage of early intervention. Mental Health leaders learn and proliferate basic mental health self-help like Mindfulness,Relaxation,Constructive Problem Solving etc."
        />
        <Card image={StigmaImage} title="Overcoming Stigma" />
      </div>
      <div className={styles.scheduleWrapper}>
        <h1 className={styles.scheduleTitle}>
          Our Flagship program for Proactive wellbeing
        </h1>
        <Card
          image={TimeImage}
          title="15 Mins everyday for 10 days"
          color="#f6d8a6"
        />
        <Card image={MoneyImage} title="Costs ₹ 150 only" color="#f6d8a6" />
        <Card image={CertifiedImage} title="Certified" color="#f6d8a6" />
      </div>
      <div className={styles.signUpWrapper}>
        <h1 className={styles.signUpContent}>
          You may have faced Mental Health struggle (or maybe not), but if don't
          want your community to suffer alone.
          <br />
          <br /> Then you are at the right place
        </h1>
        <img src={DriveImage} alt="sign up" className={styles.image} />
        <PrimaryButton
          title="Sign Up"
          style={{ width: "70%", backgroundColor: "grey" }}
        />
      </div>
    </div>
  );
};

export default YouthAdvocates;
