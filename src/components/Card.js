import React from "react";
import styled from "styled-components";
import Img from "../asset/first_circle_illustration.svg";
const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 56%;
  margin-bottom: 24px;
  @media screen and (min-width: 700px) {
    width: 35%;
  }
  @media screen and (min-width: 1200px) {
    width: 15%;
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${(props) => props.color};
  text-align: center;
  @media screen and (min-width: 700px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 56px;
  }
`;

const Content = styled.p`
  width: 90%;
  font-size: 20px;
  text-align: center;
  margin-top: 32px;
  @media screen and (min-width: 700px) {
    font-size: 30px;
    line-height: 34px;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
    font-size: 32px;
  }
`;
const Card = (props) => {
  console.log(props.content);
  return (
    <Wrapper>
      <Image src={props.image} alt={props.alt} />
      <Title color={props.color}>{props.title}</Title>
      <Content>{props.content}</Content>
    </Wrapper>
  );
};

export default Card;
