import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  padding: 40px 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);
`;

const Wrapper = (props) => <Card>{props.children}</Card>;

export default Wrapper;
