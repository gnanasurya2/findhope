import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Question from "../components/Question";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  height: calc(100vh - 100px);
`;
const ResultText = styled.h2`
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  padding: 0px 24px;
`;
const data = [
  "Do you often have headaches ?",
  "Is your appetite (Hunger) poor ?",
  "Do you sleep badly ?",
  "Are you easily frightened ?",
  "Do your hands shake ?",
  "Do you feel nervous, tense or worried ?",
  "Is your digestion poor ?",
  "Do you have trouble thinking clearly?",
  "Do you feel unhappy ?",
  "Do you cry more than usual ?",
  "Do you find it difficult to enjoy your daily activities ?",
  "Do you find it difficult to make decisions ?",
  "Is your daily work suffering ?",
  "Are you unable to play a useful part in life ?",
  "Have you lost interest in things ?",
  "Do you feel that you are a worthless person ?",
  "Has the thought of ending your life been on your mind ?",
  "Do you feel tired all the time ?",
  "Do you have uncomfortable feelings in your stomach ?",
  "Are you easly tired ?",
];
const NewTest = (props) => {
  const [result, setResult] = useState({});
  const [toggleResult, setToggleResult] = useState(false);
  const [notComplete, setNotComplete] = useState(false);
  const [resultTitle, setResultTitle] = useState("");
  const [showButton, setShowButton] = useState(false);
  const history = useHistory();

  const clickHandler = (status, index) => {
    let newResult = { ...result };
    newResult[index] = status;
    setResult(newResult);
  };

  const resultHandler = () => {
    if (Object.keys(result).length === 20) {
      let score = 0;
      for (let scor in result) {
        score += result[scor];
      }
      if (score <= 5) {
        setResultTitle(
          "You seem to be doing great! Keep up the good work. If you ever want to talk to someone our peer counselors are here for you "
        );
      } else if ((score > 5) & (score < 10)) {
        setResultTitle(
          "Hey, times are tough but kudos to your determination. If you ever want to talk to someone without the fear of judgement, please use our free peer counseling,"
        );
      } else {
        setResultTitle(
          "Hey, times are tough. But together we can figure a way out. Our peer counselors are trained to help you deal with whatever is bothering you. Its a safe space to speak our your mind without the fear of judgement, use our free service if you feel like "
        );
        setShowButton(true);
      }
      setToggleResult(true);
    } else {
      setNotComplete(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
      }}
    >
      {!toggleResult ? (
        <>
          <h1 style={{ padding: 20, marginBottom: 40 }}>
            Please answer the following 20 questions as per your last 30 days to
            understand your overall mental well-being
          </h1>
          {data.map((str, index) => (
            <Question text={str} index={index} result={clickHandler} />
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <PrimaryButton
              title="Result"
              style={{ width: "40%" }}
              onClick={resultHandler}
            />
            {notComplete ? (
              <p
                style={{
                  color: "red",
                  marginTop: 24,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Answer all the questions to get the result
              </p>
            ) : null}
            <p style={{ lineHeight: 1.1, marginTop: 20, padding: 20 }}>
              This questionnaire was developed and validated by W.H.O as self
              reporting questionnaire SRQ 20. Please answer the following 20
              questions as per your last 30days to assess your overall mental
              well-being.
            </p>
          </div>
        </>
      ) : (
        <ResultWrapper>
          <ResultText>{resultTitle}</ResultText>
          {showButton ? (
            <PrimaryButton
              title="Free Support"
              onClick={() => {
                console.log("asda");
                history.push("/freecounseling");
              }}
            />
          ) : null}
        </ResultWrapper>
      )}
    </div>
  );
};

export default NewTest;
