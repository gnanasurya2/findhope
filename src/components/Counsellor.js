import React from "react";
import styled from "styled-components";

import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
  height: 400px;
  margin: 32px 0px;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 1px 5px grey;
  @media screen and (min-width: 700px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-left: 30px;
  margin-top: 20px;
`;

const AnotherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 26px;
  padding-right: 30px;
  width: 180px;
`;

const Name = styled.h1`
  font-size: 24px;
  color: indigo;
  maring-bottom: 20px;
`;

const Counsellor = (props) => {
  return (
    <Wrapper>
      <AnotherWrapper>
        <Image src={props.src} />
        <ContentWrapper>
          <Name>{props.name}</Name>
          <p>{props.qualification}</p>
        </ContentWrapper>
      </AnotherWrapper>
      <Link to={`/profile/${props.id}`} style={{ textDecoration: "none" }}>
        <PrimaryButton title="View profile" style={{ fontSize: "22px" }} />
      </Link>
    </Wrapper>
  );
};

export default Counsellor;
