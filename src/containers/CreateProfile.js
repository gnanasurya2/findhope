import React, { useState } from "react";
import styles from "../styles/CreateProfile.module.css";
import Input from "../components/Input";
import Button from "../components/PrimaryButton";
import firebase from "../helpers/firebase";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../components/Loader";

const CreateProfile = (props) => {
  const [paymentId, setPaymentId] = useState("");
  const [paymentData, setPaymentData] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const db = firebase.firestore();
  const history = useHistory();

  const paymentHandler = () => {
    setLoading(true);
    db.collection("payments")
      .where("payment", "==", paymentId)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size) {
          querySnapshot.forEach((doc) => {
            alert("payment_id is already in use");
          });
        } else {
          fetch(
            `https://limitless-springs-02261.herokuapp.com/api/payments/${paymentId}`
          )
            .then((response) => response.json())
            .then((data) => {
              setLoading(false);
              if (data.statusCode) {
                alert(data.error.description);
              } else {
                setPaymentData(data);
              }
            })
            .catch((err) => {
              alert(err.error.description);
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  const signUphandler = () => {
    if (password.length < 6) {
      alert("password must be atleast 6 characters");
    } else if (password !== confirmPassword) {
      alert("passwords don't match");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(name, password)
        .then((data) => {
          db.collection("payments")
            .doc(paymentData.order_id)
            .set({
              email: name,
              payment: paymentId,
            })
            .then(() => setRedirect(true));
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBox}>
        {redirect ? <Redirect to="/login" /> : null}
        {paymentData ? (
          <>
            <h1>Create Profile</h1>
            <Input
              title="Email"
              value={name}
              onChangeText={(event) => setName(event.target.value)}
            />
            <Input
              title="Password"
              value={password}
              onChangeText={(event) => setPassword(event.target.value)}
            />
            <Input
              title="Confirm Password"
              value={confirmPassword}
              onChangeText={(event) => setConfirmPassword(event.target.value)}
            />
            <Button title={loading ? "" : "Sign Up"} onClick={signUphandler}>
              {loading ? <Loader /> : null}
            </Button>
          </>
        ) : (
          <>
            <h1>Create Profile</h1>
            <Input
              title="payment Id"
              value={paymentId}
              onChangeText={(event) => setPaymentId(event.target.value)}
            />
            <p>payment ID is sent in email </p>
            <Button title={loading ? "" : "Next"} onClick={paymentHandler}>
              {loading ? <Loader /> : null}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateProfile;
