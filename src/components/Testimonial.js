import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Colon from "../asset/iconmonstr-quote-7.svg";

const Wrapper = styled.div`
  width: 95%;
  margin: 30px 2.5%;
  marign-bottom: 40px;
  padding: 40px 0px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 1200px) {
    width: 40%;
    margin-left: 30%;
    padding: 60px 0px;
    min-height: 220px;
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

const Content = styled.p`
  font-size: 24px;
  text-align: center;
  width: 95%;
`;

const Img = styled.img`
  position: relative;
  bottom: 0px;
  width: 70px;
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
    <>
      <Wrapper>
        <Img src={Colon} alt="quotation mark" />
        <ImageWrapper>
          <Arrow left onClick={() => changeContentHandler(-1)} />
          <h1
            style={{
              fontSize: "24px",
              marginTop: "24px",
              marginBottom: "24px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {Data.testimonial[index].name}
          </h1>
          <Arrow onClick={() => changeContentHandler(1)} />
        </ImageWrapper>
        <Content>{Data.testimonial[index].content}</Content>
      </Wrapper>
    </>
  );
};

export default Testimonial;
