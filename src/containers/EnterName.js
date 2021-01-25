import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/PrimaryButton";
import firebase from "../helpers/firebase";
import { useHistory } from "react-router-dom";
import styles from "../styles/profileMaker.module.css";

const EnterName = (props) => {
  const [name, setName] = useState();
  const [db, setDb] = useState();
  useEffect(() => {
    firebase.then((firebase) => setDb(firebase.firestore()));
  }, []);
  const history = useHistory();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      history.replace("/login");
    }
  }, [history]);
  const nameHandler = () => {
    const email = sessionStorage.getItem("email");
    if (!email) {
      alert("please login again");
      history.push("/login");
    }
    db.collection("safespace")
      .doc(name.toLowerCase())
      .set({
        email: email,
        members: [],
        name: name.toLowerCase(),
      })
      .then(() => {
        history.push("/safespace");
      });
  };
  return (
    <div
      className={styles.wrapper}
      style={{ paddingLeft: "15px", paddingRight: "15px" }}
    >
      <Input
        title="Enter the city name"
        value={name}
        onChangeText={(event) => setName(event.target.value)}
      />
      <Button title="Save" onClick={nameHandler} />
    </div>
  );
};

export default EnterName;
