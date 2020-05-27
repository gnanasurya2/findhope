import React from "react";
import styled from "styled-components";
import Svg from "../components/Svg";
import Button from "../components/Button";

const BackgroundContainer = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `;
  const Content = styled.div`
    position: absolute;
    width: 80%;
    margin-left: 10%;
    top: 40%;
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
    color: ${props.color};
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
    color: ${props.color};
  `;
  return (
    <Container>
      <Svg styles={props.svgStyles} />
      <Content>
        <Title>{props.title}</Title>
        <SubContent>{props.content}</SubContent>
        {props.buttonText ? (
          <Button text={props.buttonText} color={props.color} />
        ) : null}
      </Content>
    </Container>
  );
};

export default BackgroundContainer;
