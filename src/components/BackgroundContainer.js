import React, { useEffect } from "react";
import styled from "styled-components";
import Svg from "../components/Svg";
import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  height: 150vh;
  position: relative;
`;
const Content = styled.div`
  transition: all 0.5s;
  position: sticky;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 100px;
  top: 40%;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  display: flex;
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
    <Container>
      <Svg styles={props.svgStyles} />
      <Content visible={props.visible}>
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
