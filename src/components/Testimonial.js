import React from "react";
import styled from "styled-components";
import Photo from "../asset/fbmale.png";
import { useState } from "react";

const Wrapper = styled.div`
  width: 95%;
  min-height: 530px;
  margin: 32px 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1200px) {
    width: 40%;
    margin-left: 30%;
    padding: 60px 0px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: transparent;
  transform: rotateZ(${(props) => (props.left ? "45deg" : "225deg")});
  border: solid 3px black;
  border-color: transparent transparent black black;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: rotateZ(${(props) => (props.left ? "45deg" : "225deg")})
      scale(1.2);
  }
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  margin: 16px 24px;
  border-radius: 50%;
  visibility: hidden;
`;

const Content = styled.h2`
  font-size: 24px;
  text-align: center;
  width: 95%;
`;
const Testimonial = (props) => {
  const [Data] = useState(props.data);
  const [index, setIndex] = useState(0);

  const changeContentHandler = (dir) => {
    const length = Data.testimonial.length - 1;
    if (dir === -1 && index === 0) {
      setIndex(length);
    } else if (dir === 1 && index === length) {
      setIndex(0);
    } else {
      setIndex((state) => state + dir);
    }
  };
  return (
    <Wrapper>
      <Content>{Data.testimonial[index].content}</Content>
      <ImageWrapper>
        <Arrow left onClick={() => changeContentHandler(-1)} />
        <h3
          style={{
            fontSize: "24px",
            marginTop: "24px",
            marginBottom: "24px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {Data.testimonial[index].name}
        </h3>
        <Arrow onClick={() => changeContentHandler(1)} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Testimonial;
