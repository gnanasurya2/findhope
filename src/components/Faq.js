import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  padding: 10px;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-bottom: solid 2px #d4d2ce;
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #25c8bd;
  border-radius: 50%;
  cursor: pointer;
`;
const Arrow = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  border: solid 3px grey;
  border-color: white white transparent transparent;
  top: 30%;
  left: 30%;
  transform: rotateZ(135deg);
`;
const Content = styled.p`
  width: 90%;
  text-align: center;
  margin: 25px 2.5%;
  font-size: 20px;
  display: ${(props) => (props.closed ? "none" : "flex")};
`;
const Faq = (props) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>{props.title}</h1>
        <Circle>
          <Arrow />
        </Circle>
      </InnerWrapper>
      <Content closed>{props.content}</Content>
    </Wrapper>
  );
};

export default Faq;
