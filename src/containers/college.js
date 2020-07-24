import React, { useEffect } from "react";
import styles from "../styles/college.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Svg from "../asset/recognising.svg";
import PrimaryButton from "../components/PrimaryButton";
import Photo from "../components/Photo";
import Image1 from "../asset/humaaans1.png";
import Image2 from "../asset/humaaans2.png";
const College = (props) => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    import(`../helpers/colleges/${name}.json`).then(({ default: college }) => {
      setData(college);
    });
  });
  return (
    <div className={styles.outerWrapper}>
      {data ? (
        <div>
          <div className={styles.background}>
            <div className={styles.square}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.collegeName}>{data.name}</h1>
            <p className={styles.subContent}>
              Safe space built by students of {data.name}
            </p>
          </div>
          <div className={styles.founderContent}>
            <img
              src={process.env.PUBLIC_URL + `/assest/${data.founder.photo}`}
              alt={data.founder.name}
              className={styles.photo}
            />
            <h1 className={styles.collegeName}>Message from the founder</h1>
            <p className={styles.subContent}>
              It's not everyday that you have an opportunity to make the world a
              happier place. With safe place {data.url} we are going to
              completely transform the way people around us percieve and deal
              with mental health issues
            </p>
            <h2>{data.founder.name}</h2>
          </div>
          <img src={Image1} alt="svg" className={styles.svg} />
          <div className={styles.orangeBox}>
            <p className={styles.orangeText}>
              Happpiness is really contagious. All you have to do, quite
              literally, is build a safe space to make it go viral whatsApp us
              at 8730067160 to build a safe space.
            </p>
          </div>
          <h1 className={styles.whiteText}>
            The safe way of promoting wellbeing
          </h1>
          <img src={Image2} alt="svg" className={styles.svg} />
          <h1 className={styles.whiteText}>
            Spend 10 minutes everyday for 11 days straight to learn about
            emotional first aid and get better at dealing with acadamic stress
            to relationship issues.
          </h1>
          <div className={styles.founderContent}>
            <PrimaryButton title="Learn more" />
          </div>
          {data.members.length ? (
            <div className={styles.orangeBox}>
              <h1 className={styles.orangeText} style={{ marginTop: "30px" }}>
                Members
              </h1>
              {data.members.map((member) => (
                <Photo name={member.name} photo={member.url} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default College;
