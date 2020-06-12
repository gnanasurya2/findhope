import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
const Svg = styled.svg`
  display: block;
  margin: 20px auto;
  max-widtdh: 100%;
`;

const Circle = styled(animated.circle)`
  fill: none;
`;

const Text = styled(animated.text)`
  font-size: 3rem;
  text-anchor: middle;
  fill: #000;
  font-weight: bold;
`;
const CircleBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
}) => {
  const circleRef = useRef(null);
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const [value, set] = useSpring(() => ({
    offset: circumference,
    config: config.slow,
    number: 0,
  }));
  useEffect(() => {
    const progressOffset = circumference - (progress / 100) * circumference;
    set({ offset: progressOffset, number: progress });
  }, [set, circumference, progress]);

  const center = size / 2;

  return (
    <React.Fragment>
      <Svg width={size} height={size}>
        <Circle
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            strokeDashoffset: value.offset.interpolate((x) => x),
          }}
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
        <Text x={center + 8} y={center + 18}>
          {value.number.interpolate((x) => x.toFixed(0) + "%")}
        </Text>
      </Svg>
    </React.Fragment>
  );
};

export default CircleBar;
