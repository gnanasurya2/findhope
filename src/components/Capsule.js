import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  max-width: max-content;
  padding: 12px 24px;
  margin: 10px 5px;
  border-radius: 50px;
  background-color: indigo;
  font-size: 21px;
  color: white;
`;

const Capsule = (props) => <Wrapper>{props.children}</Wrapper>;

export default Capsule;
