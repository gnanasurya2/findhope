import React from "react";
import styled from "styled-components";
import Photo from "../asset/fbmale.png";

const Wrapper = styled.div`
  width: 95%;
  min-height:400px;
  margin: 32px 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border solid 3px orange;
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
`;

const Content = styled.h2`
  font-size: 24px;
  text-align: center;
  width: 95%;
`;
const Testimonial = (props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Arrow left />
        <Image src={Photo} />
        <Arrow />
      </ImageWrapper>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        repudiandae culpa? Error, dignissimos laborum tenetur qui voluptas
        sapiente vero libero dolor! Sit eveniet illo nisi magnam at, minima
        corrupti inventore.
      </Content>
      <h3 style={{ fontSize: "24px", marginTop: "24px", marginBottom: "24px" }}>
        Gnanasurya
      </h3>
    </Wrapper>
  );
};

export default Testimonial;
