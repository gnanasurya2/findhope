import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  margin: 2.5% 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Content = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Text = styled.input`
  border: 1px solid grey;
  padding: 7px 5px;
  font-size: 18px;
`;
const Input = (props) => {
  return (
    <Wrapper>
      <Content>{props.title}</Content>
      {props.content ? <Content>{props.content}</Content> : null}
      <Text
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChangeText}
      />
    </Wrapper>
  );
};

export default Input;
