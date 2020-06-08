import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
`;
const InnerWrapper = styled(animated.div)`
  width: 30%;
  height: 100%;
  background-color: #70db70;
`;
const ProgressBar = (props) => {
  const [value, set] = useSpring(() => ({ width: props.progress || 0 }));
  useEffect(() => {
    set({ width: props.progress });
  }, [props.progress, set]);
  return (
    <Wrapper>
      <InnerWrapper
        style={{ width: value.width.interpolate((x) => x + "%") }}
      />
    </Wrapper>
  );
};

export default ProgressBar;
