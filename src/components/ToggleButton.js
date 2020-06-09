import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  font-size: 20px;
  color: white;
  opacity: ${(props) => (props.opacit ? "0.3" : "1")};
  cursor: pointer;
  transition: all 0.2s linear;
`;

const ToggleButton = (props) => (
  <Button color={props.color} opacit={props.opacity} onClick={props.clicked}>
    {props.title}
  </Button>
);

export default ToggleButton;
