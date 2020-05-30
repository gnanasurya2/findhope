import React, { useEffect, useState, useRef } from "react";
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
  const [wrapperstyles, setWrapperStyles] = useState({ marginTop: "0vh" });
  const [position, setPosition] = useState(false);

  const ref = useRef();

  const scrollHandler = (totalHeight) => {
    let screenPosition = (window.scrollY / window.innerHeight) * 100;
    if (totalHeight) {
      if (screenPosition < totalHeight) {
        setPosition(false);
      }
      if (screenPosition > totalHeight && !position) {
        setPosition(true);
      }
      setWrapperStyles({ marginTop: screenPosition + "vh" });
    }
  };
  useEffect(() => {
    console.log("created");

    window.addEventListener("scroll", () =>
      scrollHandler(
        (ref.current.clientHeight / window.innerHeight).toFixed(2) * 100 + 5
      )
    );
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.marker} style={wrapperstyles}></div>
      <div ref={ref}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Free mental health support</h1>
          <h3 className={styles.subTitle}>
            No matter what's troubling you, get the support you need, right
            here, right now.
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
      </div>
      <div className={styles.backgroundContainer}>
        <BackgroundContainer
          svgStyles={{ fill: "#73c4be", backgroundColor: "#79cec7" }}
          color="#556a78"
          title="Reaching out for help doesn't mean you are weak"
          visible={visible[0]}
          num={0}
          position={position}
        />
        <div style={{ width: "100%", height: "300vh" }}></div>
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

// <BackgroundContainer
// svgStyles={{ fill: "#73c4be", backgroundColor: "#79cec7" }}
// color="#556a78"
// title="Understand yourself better"
// content="Taking care of your yourself start withs a single step:recognizing
// you may need help"
// buttonText="free assessment"
// visible={visible[1]}
// num={1}
// />
// <BackgroundContainer
// svgStyles={{ fill: "#5ea0d2", backgroundColor: "#63a9dc" }}
// color="#e7e3ad"
// title="Worry Less Live More"
// content="Felling better starts with a single message"
// buttonText="support for free"
// visible={visible[2]}
// num={2}
// />
// <BackgroundContainer
// svgStyles={{ fill: "#f68891", backgroundColor: "#ff8f9b" }}
// color="#696172"
// title="Boost your happiness"
// content="Build the skills to feel more confident, deal with stress, think
// more positively, and so much more !"
// buttonText="support for free"
// visible={visible[3]}
// num={3}
// />
