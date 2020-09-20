import React, { useState } from "react";
import styles from "../styles/CreateProfile.module.css";
import Button from "../components/PrimaryButton";
import Loader from "../components/Loader";
import { useHistory, useParams } from "react-router-dom";
import firebase from "../helpers/firebase";
import Input from "../components/Input";

const MemberProfile = (props) => {
  const [loading, setLoading] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const [data, setData] = useState();
  const db = firebase.firestore();
  const history = useHistory();
  const { title } = useParams();
  const ClickHandler = () => {
    setLoading(true);
    db.collection("payments")
      .where("payment", "==", paymentId)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.size);
        if (querySnapshot.size) {
          querySnapshot.forEach((doc) => {
            alert("payment_id is already in use");
            setLoading(false);
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
                setPaymentId("");
              } else {
                db.collection("payments")
                  .doc(data.order_id)
                  .set({
                    email: data.email,
                    payment: paymentId,
                  })
                  .then(() => history.push("/profilemaker/" + title));
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBox}>
        <h1>Payment details</h1>
        <Input
          title="Payment Id"
          value={paymentId}
          onChangeText={(event) => setPaymentId(event.target.value)}
        />
        <Button title={loading ? "" : "Next"} onClick={ClickHandler}>
          {loading ? <Loader /> : null}
        </Button>
        <p>payment ID is sent in email </p>
      </div>
    </div>
  );
};
export default MemberProfile;
