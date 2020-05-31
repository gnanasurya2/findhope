import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  padding: 32px 0px;
`;

const Content = styled.p`
  font-size: 24px;
  text-align: right;
  padding-left: 5%;
  padding-right: 5%;
`;
const Stat = (props) => {
  const value = useSpring({
    from: {
      number: 0,
    },
    to: {
      number: props.number,
    },
    config: config.molasses,
  });
  useEffect(() => {
    console.log("created");
  }, []);
  return (
    <Wrapper>
      <animated.h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          paddingRight: "5%",
        }}
      >
        {value.number.interpolate((x) => x.toFixed(0) + "%")}
      </animated.h1>
      <Content>{props.content}</Content>
    </Wrapper>
  );
};

export default Stat;
