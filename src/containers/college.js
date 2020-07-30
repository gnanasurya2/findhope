import React, { useEffect } from "react";
import styles from "../styles/college.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
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
            {data.cofounder ? (
              <>
                <Photo
                  name={data.founder.name}
                  photo={data.founder.photo}
                  title="Founder"
                  color="black"
                />
                <Photo
                  name={data.cofounder.name}
                  photo={data.cofounder.photo}
                  title="Founder"
                  color="black"
                />
              </>
            ) : (
              <img
                src={process.env.PUBLIC_URL + `/assest/${data.founder.photo}`}
                alt={data.founder.name}
                className={styles.photo}
              />
            )}

            <h1 className={styles.collegeName}>
              Message from the {data.cofounder ? "founders" : "founder"}
            </h1>
            <p className={styles.subContent}>
              It's not everyday that you have an opportunity to make the world a
              happier place. With safe place {data.url} we are going to
              completely transform the way people around us percieve and deal
              with mental health issues
            </p>
            {data.cofounder ? null : <h2>{data.founder.name}</h2>}
          </div>
          <img src={Image1} alt="svg" className={styles.svg} />
          <div className={styles.orangeBox}>
            <p className={styles.orangeText}>
              As students we face a lot of challenges for the very first time in
              our lives. From Acadamic stress to relationships Issues, anything
              that stops you from being at your full potential, can be dealt
              easily by maintaing a positive mental health. Join our safe space
              and learn emotional first aid to keep a positive mental health.
            </p>
          </div>
          <h1 className={styles.whiteText}>
            The easiest way to maintain a positive mindset
          </h1>
          <img src={Image2} alt="svg" className={styles.svg} />
          <h1 className={styles.whiteText}>
            Spend just 10 minutes a day for 11 days in a row to learn emotional
            first aid and get better at dealing with common problems in life (
            from acadamic stress to relationships etc)
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
                <Photo name={member.name} photo={member.url} color="white" />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default College;
