import React from "react";
import styled from "styled-components";
import Male from "../asset/fbmale.png";

const Wrapper = styled.div`
  max-width: 60%;
  min-height: 60px;
  margin: 10px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
`;

const Content = styled.p`
  background-color: #5aa4fc;
  padding: 5px 10px;
  border-radius: 2px 20px 20px 20px;
  margin-left: 10px;
  color: white;
  font-size: 14px;
  box-shadow: 1px 2px 8px 0px #5aa4fc;
`;
const Message = (props) => {
  return (
    <Wrapper>
      <Image src={Male} />
      <Content>{props.content}</Content>
    </Wrapper>
  );
};

export default Message;
