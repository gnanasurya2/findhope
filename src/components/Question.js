import React, { useState } from "react";
import styled from "styled-components";
import RadioButton from "./RadioButton";

const Ques = styled.h2`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
`;
const Wrapper = styled.div`
  padding: 0px 8px;
  margin-bottom: 40px;
  @media (min-width: 600px) {
    padding: 0 20%;
  }
`;
const Question = (props) => {
  const [selected, setSelected] = useState([false, false]);
  const clickHandler = (status) => {
    if (status) {
      setSelected([true, false]);
      props.result(true, props.index);
    } else {
      setSelected([false, true]);
      props.result(false, props.index);
    }
  };
  return (
    <Wrapper>
      <Ques>{`${props.index + 1}. ${props.text}`}</Ques>
      <div style={{ paddingLeft: 12 }}>
        <RadioButton
          selected={selected[0]}
          text="Yes"
          clickHandler={() => clickHandler(true)}
        />
        <RadioButton
          selected={selected[1]}
          text="No"
          clickHandler={() => clickHandler(false)}
        />
      </div>
    </Wrapper>
  );
};

export default Question;
