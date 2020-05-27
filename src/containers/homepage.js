import React from "react";
import styles from "../styles/homepage.module.css";

import Illustration from "../components/Illustration";
import FirstIllustration from "../asset/first_circle_illustration.svg";
import SecondIllustration from "../asset/second_circle_illustration.svg";

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
    </div>
  );
};

export default Homepage;
