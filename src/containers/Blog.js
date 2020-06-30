import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/Blog.module.css";

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
      React.createElement(element.type, null, element.content)
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
