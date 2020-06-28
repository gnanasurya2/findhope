import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 200px;
  box-sizing: border-box;
  margin: 80px 20px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-out;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    transform: translateY(-20px);
  }
  @media screen and (max-width: 500px) {
    margin: 30px 20px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 120%;
  color: black;
`;

const Written = styled.h2`
  font-size: 23px;
  font-weight: 400;
  color: rgb(0, 0, 0, 0.6);
`;

const Blog = ({ data }) => (
  <Wrapper>
    <Link
      style={{
        textDecoration: "none",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
      to={"/blog/" + data.url}
    >
      <Title>{data.title}</Title>
      <Written>
        Written by
        <span style={{ fontWeight: "bold", opacity: "1", color: "black" }}>
          {" "}
          {data.author}
        </span>
      </Written>
    </Link>
  </Wrapper>
);

export default Blog;
