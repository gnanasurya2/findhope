import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  min-width: max-content;
  padding: 12px 24px;
  margin: 10px 5px;
  border-radius: 50px;
  background-color: indigo;
  font-size: 14px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

const Capsule = (props) => (
  <Wrapper
    onClick={props.clicked}
    style={props.selected ? { backgroundColor: "black" } : {}}
  >
    {props.children}
  </Wrapper>
);

export default Capsule;
