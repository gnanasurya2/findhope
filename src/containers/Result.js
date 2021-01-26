import React, { useEffect, useState } from "react";
import styles from "../styles/Result.module.css";

import CircleBar from "../components/CircleBar";
import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import ToggleButton from "../components/ToggleButton";
import Solutions from "../components/Solutions";
import DepressionData from "../helpers/Depression.json";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  margin-top: 40px;
`;
const LI = styled.li`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

const entryoptionsdep = [
  "entry.1758988128",
  "entry.1916594965",
  "entry.1099754452",
  "entry.1080084900",
  "entry.1908846467",
  "entry.432366185",
  "entry.1335405081",
  "entry.2124050225",
  "entry.450037869",
  "entry.1344163733",
  "entry.1575855845",
  "entry.1070229833",
];
const Result = (props) => {
  const [tips, setTips] = useState([false, true, true]);
  const [title, setTitle] = useState("");
  const [solutions, setSolutions] = useState([0, 1, 2]);
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]);
  const [percentile, setPercentile] = useState(1);
  const params = useParams();
  useEffect(() => {
    if (params.testname === "Depression") {
      const values = [
        "Not+at+all",
        "Several+days",
        "More+than+half+days",
        "Nearly+everyday",
      ];
      const name = sessionStorage.getItem("name");
      const email = sessionStorage.getItem("testemail");
      const data = sessionStorage.getItem("data").split(",");
      let link = `https://docs.google.com/forms/d/e/1FAIpQLSdaUun4-lKr9hkPmjtLQsbl24SPO3-Gh5OS8_JzokqGH8eERA/formResponse?${entryoptionsdep[0]}=${name}&${entryoptionsdep[1]}=${email}`;
      data.forEach((ele, index) => {
        link += `&${entryoptionsdep[index + 2]}=${values[+ele]}`;
      });
      link += `&${entryoptionsdep[entryoptionsdep.length - 1]}=${(
        (+params.score / 27) *
        100
      ).toFixed(0)}`;
      fetch(`https://cors-anywhere.herokuapp.com/${link}`, {
        method: "POST",
        headers: {
          "Content-Type": "xml",
        },
      })
        .then(() => console.log("uploaded"))
        .catch((err) => alert(err.message))
        .finally(() => console.log("done"));
    }
  }, []);
  useEffect(() => {
    let s = params.score;
    let str;
    let name = params.testname;

    if (name === "Depression") {
      let Arr = [];
      let tips = params.tips;
      if (tips < 100) {
        Arr.push(0);
      }
      while (tips > 0) {
        Arr.push(tips % 10);
        tips = Math.trunc(tips / 10);
      }
      setSolutions(Arr);
      setActive(Arr[0]);

      setData(DepressionData.depression);
      setPercentile(27);
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
    } else if (name === "Anxiety") {
      setData(DepressionData.anxiety);
      setPercentile(21);
      if (s <= 5) {
        str = "Minimal anxiety";
      } else if (s > 5 && s <= 9) {
        str = "Mild anxiety";
      } else if (s > 9 && s <= 14) {
        str = "Moderate anxiety";
      } else {
        str = "Severe anxiety";
      }
    } else if (name === "Stress") {
      setPercentile(40);
      if (s < 13) {
        str = "Low stress";
      } else if (s >= 13 && s < 26) {
        str = "Moderate stress";
      } else {
        str = "High perceived stress";
      }
    }

    setTitle(str);
  }, [params.score, params.testname, params.tips]);

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
        progress={(+params.score / percentile) * 100}
        circleOneStroke="#F5F5F5"
        circleTwoStroke="#70db70"
        size={260}
        strokeWidth={14}
      />
      {data.length ? (
        <>
          {data[solutions[0]].title !== "" ? (
            <Wrapper>
              <h1>What is affecting you:</h1>
              <UL>
                <LI>{data[solutions[0]].title}</LI>
                <LI>{data[solutions[1]].title}</LI>
                <LI>{data[solutions[2]].title}</LI>
              </UL>
            </Wrapper>
          ) : null}

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
              {data[active].solutionsTitle}
            </h1>
            {data[active].solutions.map((solution) => (
              <Solutions title={solution.title} content={solution.content} />
            ))}
          </Wrapper>
        </>
      ) : null}
    </div>
  );
};

export default Result;
