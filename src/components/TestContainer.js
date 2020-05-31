import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  margin: 20px 2.5%;
  padding: 24px 0px;
  border-radius: 20px;
  background-color: ${(props) => props.background};
  cursor: pointer;
`;
const Title = styled.h1`
  padding-left: 20px;
  color: ${(props) => props.color};
  font-size: 24px;
  width: 80%;
`;
const TestContainer = (props) => {
  return (
    <Wrapper background={props.background}>
      <Title color={props.color}>{props.title}</Title>
    </Wrapper>
  );
};

export default TestContainer;