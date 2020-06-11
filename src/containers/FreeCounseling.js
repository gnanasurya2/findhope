import React, { useState } from "react";
import styles from "../styles/FreeCounseling.module.css";
import Input from "../components/Input";
const FreeCounseling = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/3/d/e/1FAIpQLScLp0GxKSMF9I9b2rhlU-BCBmGAm9QVfcsiBA-fChOk19N5_w/formResponse?entry.455918560=${name}&entry.2020669080=${email}&entry.1690252233=${number}&entry.788657994=${description}`,
      {
        type: "POST",
        headers: { Content: "xml" },
      }
    );
    setName("");
    setEmail("");
    setNumber("");
    setDescription("");
  };

  return (
    <div className={styles.wrapper}>
      <h1> Peer Counseling </h1>
      <Input
        title="Name"
        content="(Provide nickname if you wish to be anonymous)"
        placeholder="Name"
        value={name}
        onChangeText={(event) => setName(event.target.value)}
      />
      <Input
        title="Email"
        placeholder="Email"
        value={email}
        onChangeText={(event) => setEmail(event.target.value)}
      />
      <Input
        title="Whatsapp Number"
        content="(Therapy is done over whatsapp and your number is perfectly safe)"
        placeholder="Phone"
        value={number}
        onChangeText={(event) => setNumber(event.target.value)}
      />
      <Input
        title="Description your situation"
        value={description}
        onChangeText={(event) => setDescription(event.target.value)}
      />
      <div className={styles.buttonWrapper} onClick={submitHandler}>
        <p>SEND</p>
      </div>
    </div>
  );
};

export default FreeCounseling;
