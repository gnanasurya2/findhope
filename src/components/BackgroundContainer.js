import React, { useEffect } from "react";
import styled from "styled-components";
import Svg from "../components/Svg";
import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: ${(props) => (props.position ? "fixed" : "relative")};
  top: 0;
`;
const Content = styled.div`
  position: ${(props) => (props.position ? "fixed" : "relative")};
  transition: all 0.3s;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 100px;
  top: 45%;
  display: flex;
  opacity: ${(props) => (props.position ? "1" : "0")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    top: 50%;
  }
  @media screen and (min-width: 700px) {
    top: 45%;
  }
`;
const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.color};
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 700px) {
    font-size: 40px;
  }
`;
const SubContent = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 32px;
  color: ${(props) => props.color};
`;

const BackgroundContainer = (props) => {
  return (
    <Container position={props.position}>
      <Svg
        styles={{ backgroundColor: "#73c4be" }}
        fill="#73c4be"
        background="#79cec7"
      />
      <Content visible={props.visible} position={props.position}>
        <Title color={props.color}>{props.title}</Title>
        <SubContent color={props.color}>{props.content}</SubContent>
        {props.buttonText ? (
          <Button text={props.buttonText} color={props.color} />
        ) : null}
      </Content>
    </Container>
  );
};

export default BackgroundContainer;
