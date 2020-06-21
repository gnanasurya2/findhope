import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  background-color: #4dabde;
  border-radius: 12px;
  @media screen and (min-width: 1200px) {
    width: 40%;
    margin-left: 30%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
`;

const Youthprofile = (props) => (
  <Wrapper>
    <Title>{props.name}</Title>
    <Title>{props.place}</Title>
  </Wrapper>
);

export default Youthprofile;
