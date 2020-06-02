import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  min-height: 200px;
  background-color: ${(props) => props.background};
  margin: 32px 2.5%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.3);
`;
const InfoBox = (props) => (
  <Wrapper
    background={props.background}
    color={props.color}
    style={props.styles}
  >
    {props.children}
  </Wrapper>
);

export default InfoBox;
