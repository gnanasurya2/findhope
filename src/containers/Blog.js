import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/Blog.module.css";
import styled from "styled-components";

// const H2 = styled.h2`
//   font-size: 40px;
//   line-height: 48px;
//   margin-bottom: 25px;
// `;
// const P = styled.p`
//   font-size: 20px;
//   letter-spacing: 1.1px;
//   line-height: 36px;
//   margin-bottom: 40px;
// `;
// const UL = styled.ul`
//   list-style-type: disc;
//   width: 100%;
//   list-style-position: inside;
//   text-align: left;
// `;
// const LI = styled.li`
//   text-align: left;
//   list-style-position: inside;
//   margin-bottom: 20px;
//   font-size: 24px;
//   line-height: 34px;
// `;

const blogStyles = {
  p: {
    fontSize: "20px",
    letterSpacing: "1.1px",
    lineHeight: "36px",
    marginBottom: "40px",
  },
  li: {
    textAlign: "left",
    listStylePosition: "inside",
    marginBottom: "20px",
    fontSize: "24px",
    lineHeight: "34px",
  },
  h2: {
    fontSize: "40px",
    lineHeight: "48px",
    marginBottom: "25px",
  },
};
const Blog = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    import(`../helpers/blogs/${name}.json`).then(({ default: data }) => {
      console.log(data);
      setData(data);
    });
  }, []);
  const createContent = (content) => {
    const ReactContent = content.map((element) =>
      React.createElement(
        element.type,
        { style: blogStyles[element.type] },
        element.content
      )
    );
    return ReactContent;
  };
  return (
    <div>
      {data ? (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>{data.title}</h1>
            <Link to={`/blogger/${data.url}`}>
              <h3 className={styles.author}>Written by {data.author}</h3>
            </Link>
          </div>
          {createContent(data.content)}
        </div>
      ) : null}
    </div>
  );
};

export default Blog;
