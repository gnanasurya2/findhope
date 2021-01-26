import React, { useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import Option from "../components/Option";
import styles from "../styles/Questions.module.css";
import { Redirect, useParams } from "react-router-dom";
import questionsData from "../helpers/questions.json";

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const { testname } = useParams();
  const [jump, setJump] = useState(0);
  const [question, setQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [points, setPoints] = useState(0);
  const [options, setOptions] = useState([
    "Not at all",
    "Several days",
    "More than half days",
    "Nearly everyday",
  ]);
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);
  const [tips, setTips] = useState(0);

  useEffect(() => {
    setJump(100 / questions.length);
  }, [questions]);
  useEffect(() => {
    if (testname === "Depression") {
      setQuestions(questionsData.depression);
    } else if (testname === "Stress") {
      setQuestions(questionsData.stress);
      setOptions([
        "Never",
        "Almost never",
        "Sometimes",
        "Fairly often",
        "Very often",
      ]);
    } else if (testname === "Anxiety") {
      setQuestions(questionsData.anxiety);
    }
  }, [setQuestions, testname]);
  useEffect(() => {
    if (questions.length & (data.length === questions.length)) {
      setRedirect(true);
      sessionStorage.setItem("data", data.toString());
      let final = data.map((ele, index) => [ele, index]);
      final = final.sort((a, b) => b[0] - a[0]).splice(0, 3);
      let value = 0;
      for (let ele of final) {
        value = value * 10 + ele[1];
      }
      setTips(value);
    }
  }, [data]);
  const clickHandler = (id) => {
    if (question < questions.length) {
      setProgress((state) => state + jump);
      setQuestion((state) => state + 1);
      if (testname === "Stress" && (question === 3 || 4 || 6 || 7)) {
        setPoints((state) => state + (4 - id));
      } else {
        setPoints((state) => state + id);
      }
      setData(data.concat(id));
    }
  };
  return (
    <div>
      {redirect ? (
        <Redirect push to={`/result/${testname}/${points}/${tips}`} />
      ) : null}
      <div className={styles.wrapper}>
        <ProgressBar progress={progress} />
        <div className={styles.questionWrapper}>
          <h1 className={styles.question}>{questions[question]}</h1>
        </div>
        <div className={styles.optionsWrapper}>
          {options.map((ele, index) => (
            <Option title={ele} clicked={() => clickHandler(index)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
