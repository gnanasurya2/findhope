import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
`;

const Title = styled.h1`
  width: 90%;
  text-align: center;
`;

const Content = styled.p`
  width: 85%;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  padding: 10px 0px;
`;

const Solutions = (props) => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Content>{props.content}</Content>
  </Wrapper>
);

export default Solutions;
