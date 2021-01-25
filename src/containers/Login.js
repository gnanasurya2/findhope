import React, { useState } from "react";
import styles from "../styles/CreateProfile.module.css";
import Input from "../components/Input";
import Button from "../components/PrimaryButton";
import firebase from "../helpers/firebase";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/Loader";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [Firebase, setFirebase] = useState(null);
  const history = useHistory();
  useEffect(() => {
    sessionStorage.removeItem("token");
    firebase.then((firebase) => setFirebase(firebase));
  }, []);
  const loginHandler = () => {
    setLoading(true);
    sessionStorage.setItem("email", email);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        sessionStorage.setItem("token", data.user.refreshToken);
        Firebase.firestore()
          .collection("safespace")
          .where("email", "==", email)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size) {
              querySnapshot.forEach((doc) => {
                sessionStorage.setItem(
                  "data",
                  JSON.stringify({ name: doc.id, ...doc.data() })
                );
              });
              history.push("/safespace");
            } else {
              history.push("/entername");
            }
            setLoading(false);
          });
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBox}>
        <h1>Findhope</h1>
        <Input
          title="Email"
          value={email}
          onChangeText={(event) => setEmail(event.target.value)}
        />
        <Input
          title="Password"
          value={password}
          onChangeText={(event) => setPassword(event.target.value)}
        />
        <Button title={loading ? "" : "Login"} onClick={loginHandler}>
          {loading ? <Loader /> : null}
        </Button>
      </div>
    </div>
  );
};

export default Login;
