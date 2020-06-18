import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #005eaa;
  border: none;
  border-radius: 30px;
  padding: 12px 32px;
  font-size: 24px;
  margin-top: 24px;
  color: white;
  box-shadow: 0px 3px 5px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #005ee5;
    cursor: pointer;
  }
  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`;
const PrimaryButton = (props) => {
  return (
    <Button
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
      {props.title}
    </Button>
  );
};

export default PrimaryButton;
