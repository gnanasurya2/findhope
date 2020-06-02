import React from "react";
import styled from "styled-components";

import DefaultImage from "../asset/fbmale.png";
const Wrapper = styled.div`
  width: 95%;
  margin: 32px 0px;
  padding: 40px 0px;
  margin-left: 2.5%;
  display: flex;
  justify-content: flex-start;
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
  padding-left: 24px;
`;
const Name = styled.h1`
  font-size: 24px;
  color: indigo;
  maring-bottom: 20px;
`;
const Counsellor = (props) => {
  return (
    <Wrapper>
      <Image src={DefaultImage} alt="Councellor" />
      <ContentWrapper>
        <Name>gnanasurya</Name>
        <p>B.Tech</p>
        <p>English,Tamil</p>
        <p>100% (36votes)</p>
        <p>23356 conversations</p>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Counsellor;
