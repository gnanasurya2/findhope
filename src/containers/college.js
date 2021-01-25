import React, { useEffect } from "react";
import styles from "../styles/college.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Photo from "../components/Photo";
import Image1 from "../asset/humaaans1.png";
import Image2 from "../asset/humaaans2.png";
import firebase from "../helpers/firebase";

const College = (props) => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const db = firebase.firestore();
  useEffect(() => {
    db.collection("safespace")
      .doc(name)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData({ ...doc.data() });
          console.log(doc.data(), doc.id);
        } else {
          console.log("doesn't exist");
        }
      });
  }, [db, name]);
  return (
    <div className={styles.outerWrapper}>
      {data ? (
        <div>
          <div className={styles.background}>
            <div className={styles.square}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.collegeName}>
              {data.url === "pune" ? "Pune" : data.name}
            </h1>
            <p className={styles.subContent}>
              {data.url === "pune"
                ? "Safe space is a empathetic and non-judgemental space built for pune's youth to vent out and get help."
                : `Safe space built by students of ${data.name}`}
            </p>
          </div>
          <div className={styles.founderContent}>
            {data.members
              .filter((mem) => mem.role === "Founder")
              .map((mem) => (
                <Photo name={mem.name} url={mem.url} />
              ))}

            <h1 className={styles.collegeName}>
              Message from the {data.cofounder ? "founders" : "founder"}
            </h1>
            <p className={styles.subContent}>
              It's not everyday that you have an opportunity to make the world a
              happier place. With Safe space {data.url} we are going to
              completely transform the way people around us percieve and deal
              with mental health issues
            </p>
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
          {data.members.length > 1 ? (
            <div className={styles.orangeBox}>
              <h1 className={styles.orangeText} style={{ marginTop: "30px" }}>
                Members
              </h1>
              {data.members
                .filter((mem) => mem.role === "Member")
                .map((member) => (
                  <Photo name={member.name} url={member.url} color="white" />
                ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default College;
