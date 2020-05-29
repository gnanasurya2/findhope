import React, { useEffect, useState } from "react";
import styles from "../styles/homepage.module.css";

import Illustration from "../components/Illustration";
import FirstIllustration from "../asset/first_circle_illustration.svg";
import SecondIllustration from "../asset/second_circle_illustration.svg";
import FlyingIllustration from "../asset/FlyingIllustration.svg";
import BackgroundContainer from "../components/BackgroundContainer";
import BackSvg from "../components/BackSvg";
import PrimaryButton from "../components/PrimaryButton";

const Homepage = (props) => {
  const [visible, setVisible] = useState([false, false, false, false]);
  const [previous, setPrevious] = useState(-1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let screenPosition = window.scrollY / window.innerHeight;
      if (screenPosition > 1.9 && screenPosition < 2.3) {
        screenPosition = 0;
      } else if (screenPosition > 3 && screenPosition < 4.1) {
        screenPosition = 1;
      } else if (screenPosition > 4.5 && screenPosition < 5.4) {
        screenPosition = 2;
      } else if (screenPosition > 6 && screenPosition < 6.5) {
        screenPosition = 3;
      } else {
        screenPosition = -1;
      }
      // console.log(screenPosition);
      if (previous !== screenPosition) {
        setPrevious(screenPosition);
        const pos = [false, false, false, false];
        if (screenPosition !== -1) {
          pos[screenPosition] = true;
        }
        setVisible(pos);
        console.log(pos);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Free mental health support</h1>
        <h3 className={styles.subTitle}>
          No matter what's troubling you, get the support you need, right here,
          right now.
        </h3>
        <PrimaryButton />
        <BackSvg />
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
          visible={visible[0]}
          num={0}
        />
        <BackgroundContainer
          svgStyles={{ fill: "#73c4be", backgroundColor: "#79cec7" }}
          color="#556a78"
          title="Understand yourself better"
          content="Taking care of your yourself start withs a single step:recognizing
          you may need help"
          buttonText="free assessment"
          visible={visible[1]}
          num={1}
        />
        <BackgroundContainer
          svgStyles={{ fill: "#5ea0d2", backgroundColor: "#63a9dc" }}
          color="#e7e3ad"
          title="Worry Less Live More"
          content="Felling better starts with a single message"
          buttonText="support for free"
          visible={visible[2]}
          num={2}
        />
        <BackgroundContainer
          svgStyles={{ fill: "#f68891", backgroundColor: "#ff8f9b" }}
          color="#696172"
          title="Boost your happiness"
          content="Build the skills to feel more confident, deal with stress, think
        more positively, and so much more !"
          buttonText="support for free"
          visible={visible[3]}
          num={3}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.messageText}>
            findhope's mission is to make wellbeing accessible to every Youth.
          </h1>
        </div>
        <div className={styles.youthAdvocateContainer}>
          <h1 className={styles.youthAdvocateTitle}>
            Mental Health Advocacy program: A Leadership program for Youth
          </h1>
          <img
            src={FlyingIllustration}
            alt="hero"
            className={styles.youthAdvocateIllustration}
          />
          <h3 className={styles.youthAdvocateContent}>
            Mental Health Advocates* “a change agent, someone who educates their
            community on mental health & reduces the stigma .”
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
