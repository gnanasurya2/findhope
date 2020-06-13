import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid 2px ${(props) => props.color};
  background-color: transparent;
  cursor: pointer;
  padding: 16px 32px;
  font-size: 24px;
  margin-top: 24px;
  border-radius: 32px;
  color: ${(props) => props.color};
`;
const Button = (props) => {
  return <StyledButton color={props.color}>{props.text}</StyledButton>;
};

export default Button;
