import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 90%;
  border-radius: 12px;
  height: 220px;
  background-color: #00bcd4;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 20px #0000001a;
  margin-top: 32px;
  @media screen and (min-width: 700px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: center;
  cursor: pointer;
`;

const Arrow = styled(animated.div)`
  width: 15px;
  height: 15px;
  margin-top: 5px;
  margin-left: 20px;
  border: solid 2px;
  border-color: white white transparent transparent;
`;
const Content = styled.p`
  box-sizing: border-box;
  padding: 20px 5px;
  width: 90%;
  margin-bottom: 32px;
  display: ${(props) => (props.visible ? "flex" : "none")};
  text-align: center;
  box-shadow: 0px 0px 20px #0000001a;
  font-size: 22px;
  over-flow: hidden;
  border-radius: 0px 0px 12px 12px;
  @media screen and (min-width: 700px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;
const Accordion = (props) => {
  const [values, set] = useSpring(() => ({ angle: 135 }));
  const [visible, setVisible] = useState(false);
  const clickHandler = () => {
    set({ angle: visible ? 135 : -45 });
    setVisible((state) => !state);
  };
  return (
    <>
      <Wrapper>
        <h1 style={{ fontSize: "120px", color: "white", marginBottom: "30px" }}>
          {props.title[0]}
        </h1>
        <InnerWrapper onClick={clickHandler}>
          <p style={{ fontSize: "32px", color: "white" }}>{props.title}</p>
          <Arrow
            style={{
              transform: values.angle.interpolate((i) => `rotateZ(${i}deg)`),
            }}
          />
        </InnerWrapper>
      </Wrapper>
      <Content visible={visible}>{props.content}</Content>
    </>
  );
};

export default Accordion;
