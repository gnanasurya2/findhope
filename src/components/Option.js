import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 280px;
  border: solid 2px #70db70;
  padding: 12px 40px;
  margin: 15px 0px;
  font-size: 20px;
  border-radius: 30px;
  color: #70db70;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    background-color: #70db70;
    color: white;
  }
`;

const Option = (props) => {
  return <Button onClick={props.clicked}>{props.title}</Button>;
};

export default Option;
