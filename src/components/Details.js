import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 85%;
  padding: 30px 0px;
  padding-left: 20px;
  border: solid 1px grey;
  border-color: transparent transparent grey transparent;
`;

const Title = styled.h1`
  font-size: 32px;
  color: indigo;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 21px;
`;
const Details = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </Wrapper>
  );
};
export default Details;
