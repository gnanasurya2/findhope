import React, { useEffect, useState } from "react";
import styles from "../styles/profileMaker.module.css";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";
import ImageCropper from "../components/ImageCropper";
import { useParams, useHistory } from "react-router-dom";
import firebase from "../helpers/firebase";
import PrimaryButton from "../components/PrimaryButton";

const ProfileMaker = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  const { title } = useParams();
  const db = firebase.firestore();
  const history = useHistory();

  const submitHandler = (path) => {
    if (!toggle) {
      if (!name.length) {
        alert("Enter the name");
        return;
      }
      setToggle(true);
    } else {
      const data = JSON.parse(sessionStorage.getItem("data"));
      // console.log(path, data, title, name);
      db.collection("safespace")
        .doc(data.name.toLowerCase())
        .update({
          members: [
            ...data.members,
            {
              role: title,
              name: name,
              url: path,
            },
          ],
        })
        .then(() => history.push("/safespace"))
        .catch((err) => alert(err.message));
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setRedirect(true);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {redirect ? <Redirect to="/login" /> : null}

      <div className={styles.imageUploader}>
        {toggle ? (
          <ImageCropper submit={submitHandler} name={name} />
        ) : (
          <div className={styles.flex}>
            <Input
              title="enter the name"
              value={name}
              onChangeText={(event) => setName(event.target.value)}
            />
            <PrimaryButton title="Next" onClick={submitHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMaker;
