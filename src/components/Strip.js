import React from "react";
import styled from "styled-components";
import Edit from "../asset/edit.svg";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: orange;
  border-radius: 10px;
  padding: 0px 15px;
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  height: 25px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
const Strip = (props) => {
  const history = useHistory();
  const clickHandler = () => {
    const data = JSON.parse(sessionStorage.getItem("data"));
    if (data.members.length) {
      history.push("/memberprofile/" + props.title);
    } else {
      history.push("/profilemaker/" + props.title);
    }
  };
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <Button onClick={clickHandler}>
        <Img src={Edit} alt="edit" />
      </Button>
    </Wrapper>
  );
};

export default Strip;
