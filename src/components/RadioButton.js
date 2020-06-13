import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Radio = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 50%;
  margin-right: 10px;
`;

const Selected = styled.div`
  width: 60%;
  height: 60%;
  background-color: #167efb;
  border-radius: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.p`
  font-size: 22px;
`;
const RadioButton = (props) => {
  return (
    <Wrapper onClick={props.clickHandler}>
      <Radio>{props.selected ? <Selected /> : null}</Radio>
      <Text>{props.text}</Text>
    </Wrapper>
  );
};

export default RadioButton;
