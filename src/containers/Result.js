import React, { useEffect, useState } from "react";
import styles from "../styles/Result.module.css";

import CircleBar from "../components/CircleBar";
import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import ToggleButton from "../components/ToggleButton";
import Solutions from "../components/Solutions";
import DepressionData from "../helpers/Depression.json";

const Result = (props) => {
  const [tips, setTips] = useState([false, true, true]);
  const params = useParams();
  useEffect(() => {
    console.log(DepressionData);
  }, []);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.resultTitle}>Result:minimal Depression</h1>
      <CircleBar
        progress={+params.test}
        circleOneStroke="#F5F5F5"
        circleTwoStroke="#70db70"
        size={260}
        strokeWidth={14}
      />
      <Wrapper>
        <h1>What is affecting you:</h1>
        <ul>
          <li>{DepressionData.depression[0].title}</li>
          <li>{DepressionData.depression[1].title}</li>
          <li>{DepressionData.depression[2].title}</li>
        </ul>
      </Wrapper>
      <Wrapper>
        <h1>Suggested solutions</h1>
        <div className={styles.buttonWrapper}>
          <ToggleButton title="1" color="#70db70" opacity={tips[0]} />
          <ToggleButton title="2" color="#70db70" opacity={tips[1]} />
          <ToggleButton title="3" color="#70db70" opacity={tips[2]} />
        </div>
        <h1 className={styles.solutionTitle}>
          {DepressionData.depression[0].solutionsTitle}
        </h1>
        {DepressionData.depression[0].solutions.map((solution) => (
          <Solutions title={solution.title} content={solution.content} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Result;
