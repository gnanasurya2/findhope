import React, { useEffect, useState } from "react";
import styles from "../styles/SafeSpace.module.css";
import Strip from "../components/Strip";
import firebase from "../helpers/firebase";
import Photo from "../components/Photo";

const SafeSpace = (props) => {
  const [data, setData] = useState(null);
  const db = firebase.firestore();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    db.collection("safespace")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.size) {
          alert("account not found");
        } else {
          querySnapshot.forEach((doc) => {
            setData({ name: doc.id, ...doc.data() });
            console.log(doc.data());
            sessionStorage.setItem(
              "data",
              JSON.stringify({ name: doc.id, ...doc.data() })
            );
          });
        }
      });
  }, []);
  return (
    <div className={styles.wrapper}>
      {data ? (
        <>
          <h1 className={styles.title}>SafeSpace {data.name}</h1>
          <Strip title="Founder" />
          {data.members
            .filter((ele) => ele.role === "Founder")
            .map((mem) => (
              <div className={styles.card}>
                <Photo title={mem.name} url={mem.url} />
              </div>
            ))}
          <Strip title="Member" />
          {data.members
            .filter((ele) => ele.role === "Member")
            .map((mem) => (
              <div className={styles.card}>
                <Photo title={mem.name} url={mem.url} />
              </div>
            ))}
        </>
      ) : null}
    </div>
  );
};

export default SafeSpace;
