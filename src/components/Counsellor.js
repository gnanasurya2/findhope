import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DefaultImage from "../asset/fbmale.png";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  margin: 32px 0px;
  padding: 40px 0px;
  margin-left: 2.5%;
  display: flex;

  align-items: flex-start;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 1px 5px grey;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 30px;
  margin-top: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 56px;
  padding-right: 76px;
  width: 180px;
`;
const Name = styled.h1`
  font-size: 24px;
  color: indigo;
  maring-bottom: 20px;
`;
const Counsellor = (props) => {
  const [image, setImage] = useState({});

  const imageLoader = async () => {
    const img = import("../asset/Swetha Desiraju.jpeg").then((imag) => imag);
    console.log(img);
    return <Image src={img} />;
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <Name>{props.name}</Name>
        <p>{props.qualification}</p>
        <p>{props.languages}</p>
        <p>100% (36votes)</p>
        <p>23356 conversations</p>
        <Link to="/profile">
          <PrimaryButton title="Know more" style={{ fontSize: "22px" }} />
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Counsellor;
