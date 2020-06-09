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
  const [title, setTitle] = useState("");
  const [solutions, setSolutions] = useState([0, 0, 0]);
  const [active, setActive] = useState(0);

  const params = useParams();
  useEffect(() => {
    let Arr = [];
    let tips = params.tips;
    if (tips < 100) {
      Arr.push(0);
    }
    while (tips > 0) {
      Arr.push(tips % 10);
      tips = Math.trunc(tips / 10);
      console.log(tips);
    }
    setSolutions(Arr);
    setActive(Arr[0]);
    console.log(Arr);
    let s = params.score;
    let str;
    if (s <= 4) {
      str = "Minimal depression";
    } else if (s > 4 && s <= 9) {
      str = "Mild depression";
    } else if (s > 9 && s <= 14) {
      str = "Moderate depression";
    } else if (s > 14 && s <= 19) {
      str = "Moderately severe depression";
    } else {
      str = "Severe depression";
    }
    setTitle(str);
  }, []);

  const clickHandler = (id) => {
    const toggle = [true, true, true];
    toggle[id] = false;
    setTips(toggle);
    setActive(solutions[id]);
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.resultTitle}>Result: {title}</h1>
      <CircleBar
        progress={(+params.score / 27) * 100}
        circleOneStroke="#F5F5F5"
        circleTwoStroke="#70db70"
        size={260}
        strokeWidth={14}
      />
      <Wrapper>
        <h1>What is affecting you:</h1>
        <ul>
          <li>{DepressionData.depression[solutions[0]].title}</li>
          <li>{DepressionData.depression[solutions[1]].title}</li>
          <li>{DepressionData.depression[solutions[2]].title}</li>
        </ul>
      </Wrapper>
      <Wrapper>
        <h1>Suggested solutions</h1>
        <div className={styles.buttonWrapper}>
          <ToggleButton
            title="1"
            color="#70db70"
            opacity={tips[0]}
            clicked={() => clickHandler(0)}
          />
          <ToggleButton
            title="2"
            color="#70db70"
            opacity={tips[1]}
            clicked={() => clickHandler(1)}
          />
          <ToggleButton
            title="3"
            color="#70db70"
            opacity={tips[2]}
            clicked={() => clickHandler(2)}
          />
        </div>
        <h1 className={styles.solutionTitle}>
          {DepressionData.depression[active].solutionsTitle}
        </h1>
        {DepressionData.depression[active].solutions.map((solution) => (
          <Solutions title={solution.title} content={solution.content} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Result;
