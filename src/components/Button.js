import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const StyledButton = styled.button`
    border: solid 2px ${props.color};
    background-color: transparent;
    cursor: pointer;
    padding: 16px 32px;
    font-size: 24px;
    margin-top: 24px;
    border-radius: 32px;
    color: ${props.color};
  `;
  return (
    <StyledButton onClick={() => console.log("clicked")}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
