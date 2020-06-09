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
  opacity: ${(props) => (props.opacity ? "0.3" : "1")};
  cursor: pointer;
`;

const ToggleButton = (props) => (
  <Button color={props.color} opacity={props.opacity}>
    {props.title}
  </Button>
);

export default ToggleButton;
