import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Svg from "../components/Svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 475vh;
  position: relative;
  top: 0;
`;
const Content = styled.div`
  position: ${(props) => (props.position ? "fixed" : "relative")};
  transition: all 0.3s;
  width: 80%;
  margin-bottom: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  opacity: ${(props) => (props.position ? "1" : "0")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.color};
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 700px) {
    font-size: 56px;
    line-height: 54px;
  }
`;
const SubContent = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 32px;
  color: ${(props) => props.color};
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 700px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

const BackgroundContainer = (props) => {
  const [svgStyles, setSvgStyles] = useState("");
  useEffect(() => {
    setSvgStyles({ backgroundColor: props.fill });
  }, [props]);
  return (
    <Container position={props.position}>
      <Svg styles={svgStyles} fill={props.fill} background={props.background} />
      <Content visible={props.visible} position={props.position}>
        <Title color={props.color}>{props.title}</Title>
        <SubContent color={props.color}>{props.content}</SubContent>
        {props.buttonText ? (
          <Link to="/test">
            <Button text={props.buttonText} color={props.color} />
          </Link>
        ) : null}
      </Content>
    </Container>
  );
};

export default BackgroundContainer;
