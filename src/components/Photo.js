import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Name = styled.h1`
  font-size: 32px;
  margin: 5px 0px;
  color: white;
  text-align: center;
`;
const Photo = (props) => {
  return (
    <Wrapper>
      <Image
        src={process.env.PUBLIC_URL + `/assest/${props.photo}`}
        alt="find hope member"
      />
      <Name>{props.name}</Name>
      <h2>{props.title}</h2>
    </Wrapper>
  );
};

export default Photo;
