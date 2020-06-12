import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0 10px;
`;

const Bar = styled(animated.div)`
  width: 40px;
  height: 5px;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  margin-top: 6px;
`;
const Hamburger = (props) => {
  const [value, set] = useSpring(() => ({ opacity: 1, angle: 0 }));
  useEffect(() => {
    set(props.toggle ? { opacity: 1, angle: 0 } : { opacity: 0, angle: 45 });
  }, [props.toggle, set]);
  return (
    <Wrapper onClick={props.onClick}>
      <Bar
        style={{
          opacity: value.opacity.interpolate((x) => x),
        }}
        color={props.color}
      />
      <Bar
        style={{
          transform: value.angle.interpolate((x) => `rotateZ(${x}deg)`),
        }}
        color={props.color}
      />
      <Bar
        style={{
          position: "absolute",
          top: "5px",
          transform: value.angle.interpolate((x) => `rotateZ(-${x}deg)`),
        }}
        color={props.color}
      />
      <Bar
        style={{
          opacity: value.opacity.interpolate((x) => x),
        }}
        color={props.color}
      />
    </Wrapper>
  );
};

export default Hamburger;
