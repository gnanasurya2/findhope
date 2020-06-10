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
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);
  const [tips, setTips] = useState(0);

  useEffect(() => {
    let initial = 100 / questions.length;
    setJump(100 / questions.length);
    setProgress(initial);
  }, [questions]);
  useEffect(() => {
    if (testname === "Depression") {
      setQuestions(questionsData.depression);
    } else if (testname === "Stress") {
      setQuestions(questionsData.stress);
    } else if (testname === "Anxiety") {
      setQuestions(questionsData.anxiety);
    }
  }, [setQuestions, testname]);
  const clickHandler = (id) => {
    if (question < questions.length - 1) {
      console.log(jump, progress);
      setProgress((state) => state + jump);
      setQuestion((state) => state + 1);
      setPoints((state) => state + id);
      setData(data.concat(id));
    }
    if (question === questions.length - 2) {
      setRedirect(true);
      let final = data.map((ele, index) => [ele, index]);
      final = final.sort((a, b) => b[0] - a[0]).splice(0, 3);
      let value = 0;
      for (let ele of final) {
        value = value * 10 + ele[1];
      }
      setTips(value);
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
          <Option title="Not at all" clicked={() => clickHandler(0)} />
          <Option title="Several days" clicked={() => clickHandler(1)} />
          <Option title="More than half days" clicked={() => clickHandler(2)} />
          <Option title="Nearly everyday" clicked={() => clickHandler(3)} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
