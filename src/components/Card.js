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
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${(props) => props.color};
  text-align: center;
`;

const Content = styled.p`
  width: 90%;
  font-size: 24px;
  text-align: center;
  margin-top: 32px;
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
