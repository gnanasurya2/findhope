import React from "react";
import styles from "../styles/homepage.module.css";

import Illustration from "../components/Illustration";
import FirstIllustration from "../asset/first_circle_illustration.svg";
import SecondIllustration from "../asset/second_circle_illustration.svg";
import Svg from "../components/Svg";
import Button from "../components/Button";
import backgroundContainer from "../components/BackgroundContainer";
import BackgroundContainer from "../components/BackgroundContainer";

const Homepage = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Free mental health support</h1>
        <h3 className={styles.subTitle}>
          No matter what's troubling you, get the support you need, right here,
          right now.
        </h3>
      </div>
      <div className={styles.illustrationWrapper}>
        <Illustration
          svg={FirstIllustration}
          title="Ready to tap into your most awesome self?"
          content="Learn to deal with everything from stress to sleep,Understand the cause of the problem"
        />
        <Illustration
          svg={SecondIllustration}
          title="The help you need, right in your pocket"
          content="Reaching out for help doesn't mean you are weak"
        />
      </div>
      <div className={styles.backgroundContainer}>
        <BackgroundContainer
          svgStyles={{ fill: "#73c4be", backgroundColor: "#79cec7" }}
          color="#556a78"
          title="Reaching out for help doesn't mean you are weak"
        />
        <BackgroundContainer
          svgStyles={{ fill: "#73c4be", backgroundColor: "#79cec7" }}
          color="#556a78"
          title="Understand yourself better"
          content="Taking care of your yourself start withs a single step:recognizing
          you may need help"
          buttonText="free assessment"
        />
        <BackgroundContainer
          svgStyles={{ fill: "#5ea0d2", backgroundColor: "#63a9dc" }}
          color="#e7e3ad"
          title="Worry Less Live More"
          content="Felling better starts with a single message"
          buttonText="support for free"
        />
        <BackgroundContainer
          svgStyles={{ fill: "#f68891", backgroundColor: "#ff8f9b" }}
          color="#696172"
          title="Boost your happiness"
          content="Build the skills to feel more confident, deal with stress, think
        more positively, and so much more !"
          buttonText="support for free"
        />
      </div>
    </div>
  );
};

export default Homepage;
