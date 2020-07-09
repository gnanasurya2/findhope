import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
      339deg,
      rgba(215, 227, 254, 1) 0%,
      rgba(98, 80, 209, 0.3) 84%
    ),
    linear-gradient(
      220deg,
      rgba(255, 237, 114, 1) 2%,
      rgba(241, 59, 123, 1) 45%,
      rgba(98, 80, 209, 1) 71%
    );
  margin: 30px 0px;
  padding: 20px 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 44px;
  color: white;
`;

const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;
const Button = styled.div`
  border: none;
  color: white;
  font-size: 32px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px 0px;
  cursor: pointer;
`;
const Card = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 350px;
  background-color: white;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 10px;
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

const Data = [
  ["Awarness campaign", "Hyper local model", "400"],
  ["Literacy Campaign", "Grassroot Education model", "100"],
  ["Stigma busting Campaign", "contact based education model", "150"],
];
const RoadMap = (props) => {
  const [active, setActive] = useState(0);
  const [array, setArray] = useState([true, false, false]);
  const clickHandler = (id) => {
    const activeArray = [false, false, false];
    activeArray[id] = true;
    setArray(activeArray);
    setActive(id);
  };
  return (
    <Wrapper>
      <Title>Roadmap</Title>
      <ButtonWrapper>
        <Button
          style={{ backgroundColor: array[0] ? "black" : "rgba(0,0,0,0.5)" }}
          onClick={() => clickHandler(0)}
        >
          1
        </Button>
        <Button
          active={array[1]}
          style={{ backgroundColor: array[1] ? "black" : "rgba(0,0,0,0.6)" }}
          onClick={() => clickHandler(1)}
        >
          2
        </Button>
        <Button
          active={array[2]}
          style={{ backgroundColor: array[2] ? "black" : "rgba(0,0,0,0.6)" }}
          onClick={() => clickHandler(2)}
        >
          3
        </Button>
      </ButtonWrapper>
      <Card>
        <h1 style={{ textAlign: "center" }}>{Data[active][0]}</h1>
        <h2 style={{ marginTop: "20px" }}>Campaign type:</h2>
        <h3 style={{ padding: "0px" }}>{Data[active][1]}</h3>
        <h2 style={{ marginTop: "20px" }}>students reached:</h2>
        <h3>{Data[active][2]}</h3>
      </Card>
    </Wrapper>
  );
};

export default RoadMap;
