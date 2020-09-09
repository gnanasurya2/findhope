import React, { useState, useEffect } from "react";
import styles from "../styles/CreateProfile.module.css";
import Input from "../components/Input";
import Button from "../components/PrimaryButton";

const CreateProfile = (props) => {
  const [paymentId, setPaymentId] = useState();

  const paymentHandler = () => {
    console.log("err");
    fetch(`http://localhost:8000/api/payments/${paymentId}`)
      .then((Response) => {
        Response.json().then((data) => {
          if (data.error) {
            console.log(data.error);
            alert(data.error.description);
          } else {
            console.log(data);
          }
        });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBox}>
        <h1>Create Profile</h1>
        <Input
          title="payment Id"
          onChangeText={(event) => setPaymentId(event.target.value)}
        />
        <Button title="Next" onClick={paymentHandler} />
      </div>
    </div>
  );
};

export default CreateProfile;
