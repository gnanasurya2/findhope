import React from "react";
import styles from "../styles/Blogs.module.css";
import Blog from "../components/Blog";
import BlogsData from "../helpers/Blogs.json";

const Blogs = (props) => {
  return (
    <div>
      <div className={styles.wrapper}>
        {BlogsData.blogs.map((data) => (
          <Blog data={data} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
