import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Wrapper = styled.div`
  width: 90%;
  padding: 10px;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-bottom: solid 2px #d4d2ce;
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #25c8bd;
  border-radius: 50%;
  cursor: pointer;
`;
const Arrow = styled(animated.div)`
  width: 20px;
  height: 20px;
  position: relative;
  border: solid 3px grey;
  border-color: white white transparent transparent;
  top: 25%;
  left: 27%;
`;
const Content = styled.p`
  width: 90%;
  height: 0%;
  text-align: center;
  margin: 25px 2.5%;
  font-size: 20px;
  display: ${(props) => (props.clicked ? "none" : "flex")};
  @media screen and (min-width: 700px) {
    font-size: 32px;
  }
`;
const Faq = (props) => {
  const [visible, setVisible] = useState(true);
  const [value, set] = useSpring(() => ({
    angle: 135,
  }));
  const clickHandler = () => {
    setVisible((state) => !state);
    set({ angle: visible ? -45 : 135 });
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <h1 style={{ fontSize: "24px", width: "100%" }}>{props.title}</h1>
        <Circle onClick={clickHandler}>
          <Arrow
            style={{
              transform: value.angle.interpolate((x) => `rotateZ(${x}deg)`),
            }}
          />
        </Circle>
      </InnerWrapper>
      <Content clicked={visible}>{props.content}</Content>
    </Wrapper>
  );
};

export default Faq;
