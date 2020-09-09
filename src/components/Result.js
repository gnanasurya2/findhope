import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 16px;
  margin-right: 10px;
  line-height: 20px;
`;

const Bar = styled.div`
  height: 20px;
  min-width: 50vw;
  background-color: gray;
  border: 2px solid black;
`;

const Percent = styled.div`
  position: relative;
  height: 100%;
  width: ${(props) => props.width + "%"};
  background-color: black;
`;
const Result = (props) => {
  return (
    <Wrapper>
      <div style={{ maxWidth: "50vw" }}>
        <H2>{props.title} :</H2>
      </div>
      <Bar>
        <Percent width={props.width} />
      </Bar>
    </Wrapper>
  );
};

export default Result;
