import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/homepage.module.css";

import Illustration from "../components/Illustration";
import FirstIllustration from "../asset/first_circle_illustration.svg";
import SecondIllustration from "../asset/second_circle_illustration.svg";
import FlyingIllustration from "../asset/FlyingIllustration.svg";
import BackgroundContainer from "../components/BackgroundContainer";
import BackSvg from "../components/BackSvg";
import PrimaryButton from "../components/PrimaryButton";
import Testimonial from "../components/Testimonial";
import LastIllustration from "../asset/HomePageLastIllustration.svg";
import Stat from "../components/Stat";

const titleData = [
  "Reaching out for help doesnt mean you are weak",
  "Understand yourself better",
  "Worry less live more",
  "Boost Happiness",
];
const contentData = [
  "",
  "Taking care of your yourself starts with a single step: recongizing you may need help",
  "Feeling better with a single message",
  "Build the skills to feel more confident, deal with stress, think more positively, and so much more!",
];
const buttonTextData = [
  "",
  "free assessment",
  "support for free",
  "support for free",
];
const colorsData = [
  ["#73c4be", "#79cec7", "#556a78"],
  ["#73c4be", "#79cec7", "#556a78"],
  ["#63a9dc", "#5ea0d2", "#e1dac5"],
  ["#f68891", "#ff8f9b", "#6a6369"],
];
const Homepage = (props) => {
  const [wrapperstyles, setWrapperStyles] = useState({ marginTop: "0vh" });
  const [position, setPosition] = useState(false);
  const [title, setTitle] = useState(
    "Reaching out for help doesnt mean you are weak"
  );
  const [content, setContent] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [colors, setColors] = useState(["#73c4be", "#79cec7", "#556a78"]);
  const [animatableNumber, setAnimatableNumber] = useState([0, 0]);
  const ref = useRef();
  const movg = useRef();

  const changeTextHandler = (id) => {
    setTitle(titleData[id]);
    setContent(contentData[id]);
    setButtonText(buttonTextData[id]);
    setColors(colorsData[id]);
  };

  const scrollHandler = (totalHeight) => {
    let screenPosition = (window.scrollY / window.innerHeight) * 100;
    const element =
      (movg.current.getBoundingClientRect().top / window.innerHeight) * 100;
    if (element < 60) {
      setAnimatableNumber([100, 70]);
    }
    if (screenPosition < totalHeight) {
      setPosition(false);
    }
    if (screenPosition > totalHeight && screenPosition < totalHeight + 100) {
      setPosition(true);
      changeTextHandler(0);
    } else if (
      screenPosition > totalHeight + 100 &&
      screenPosition < totalHeight + 200
    ) {
      changeTextHandler(1);
    } else if (
      screenPosition > totalHeight + 200 &&
      screenPosition < totalHeight + 300
    ) {
      changeTextHandler(2);
    } else if (
      screenPosition > totalHeight + 300 &&
      screenPosition < totalHeight + 400
    ) {
      setPosition(true);
      changeTextHandler(3);
    } else {
      setPosition(false);
    }
    setWrapperStyles({ marginTop: screenPosition + "vh" });
  };
  useEffect(() => {
    let func;
    console.log("created");
    window.addEventListener(
      "scroll",
      (func = () =>
        scrollHandler(
          (ref.current.clientHeight / window.innerHeight).toFixed(2) * 100 + 5
        ))
    );
    return () => {
      window.removeEventListener("scroll", func);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/*<div className={styles.marker} style={wrapperstyles}></div>*/}
      <div ref={ref}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Mental health made accessible</h1>
          <h3 className={styles.subTitle}>
            No matter what's troubling you, get the support you need, right
            here, right now.
          </h3>
          <PrimaryButton title="Start for free" />
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
            content=""
          />
        </div>
      </div>
      <div className={styles.backgroundContainer}>
        <BackgroundContainer
          fill={colors[0]}
          background={colors[1]}
          color={colors[2]}
          title={title}
          content={content}
          position={position}
          buttonText={buttonText}
        />
        <Testimonial />
        <div className={styles.textContainer}>
          <h1 className={styles.messageText}>
            Introducing
            <br />
            Mental Health Advocates
          </h1>
        </div>
        <div className={styles.youthAdvocateContainer}>
          <h1 className={styles.youthAdvocateTitle}>
            Procative change agents who educate themselves and their community
            on mental health & reduces the stigma
          </h1>
        </div>
        <img
          src={FlyingIllustration}
          alt="hero"
          className={styles.youthAdvocateIllustration}
        />
        <div className={styles.joinusContainer}>
          <h1 className={styles.joinusTitle}>
            Join us to transform the future of mental wellbeing:
          </h1>
          <p className={styles.joinusContent}>
            Because you may have suffered but won't let others to suufer alone.
          </p>
        </div>
        <div style={{ backgroundColor: "#FFDEA7" }}>
          <img
            src={LastIllustration}
            alt="people using phone"
            className={styles.youthAdvocateIllustration}
          />
          <div className={styles.statsContainer} ref={movg}>
            <h1 className={styles.statsTitle}>
              Clinically Validated to help people feel better
            </h1>
            <Stat
              number={animatableNumber[0]}
              content="Of mental health advocates reported higher levels of happiness and
          stress free life after the program end"
            />
            <Stat
              number={animatableNumber[1]}
              content="Of community around mental health advocates reported easy recognition of their problems and found relief"
            />
          </div>
        </div>
        <div className={styles.advocatesJoinContainer}>
          <h1 className={styles.advocatesJoinTitle}>
            Ready to Transform into a Mental health Advocate?
          </h1>
          <PrimaryButton title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
