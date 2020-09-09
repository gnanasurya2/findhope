import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-right: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.p`
  width: max-content;
  font-size: 14px;
  max-width: 60%;
  padding: 5px 15px;
  border-radius: 20px 2px 20px 20px;
  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.15);
`;
const UserMessage = (props) => {
  return (
    <Wrapper>
      <Content>{props.content}</Content>
    </Wrapper>
  );
};

export default UserMessage;
