import React, { useState } from "react";
import styles from "../styles/FreeCounseling.module.css";
import Input from "../components/Input";
import RadioButton from "../components/RadioButton";
import { Redirect } from "react-router-dom";

const FreeCounseling = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState([true, false, false]);
  const [languages] = useState(["English", "Hindi", "Telugu"]);
  const [final, setFinal] = useState("English");
  const [redirect, setRedirect] = useState(false);

  const submitHandler = () => {
    if (name === "") {
      alert("Name should not be empty");
      return;
    }
    if (!number.match(/^[0]?[6789]\d{9}$/)) {
      alert("Enter a valid number");
      return;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      alert("Enter a valid email");
      return;
    }
    if (description === "") {
      alert("describe your situation");
      return;
    }
    fetch(
      `https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/3/d/e/1FAIpQLScLp0GxKSMF9I9b2rhlU-BCBmGAm9QVfcsiBA-fChOk19N5_w/formResponse?entry.455918560=${name}&entry.2020669080=${email}&entry.1690252233=${number}&entry.1628414300=${final}&entry.788657994=${description}`,
      {
        type: "POST",
        headers: { Content: "xml" },
      }
    ).then(() => {
      setName("");
      setEmail("");
      setNumber("");
      setDescription("");
      setSelected([true, false, false]);
    });
    setRedirect(true);
  };

  const radioHandler = (index) => {
    const sel = [false, false, false];
    sel[index] = true;
    setSelected(sel);
    setFinal(languages[index]);
  };
  return (
    <div className={styles.wrapper}>
      {redirect ? <Redirect path="/freecounseling" /> : null}
      <h1> Peer Counseling </h1>
      <Input
        title="Name*"
        content="(Provide nickname if you wish to be anonymous)"
        placeholder="Name"
        value={name}
        onChangeText={(event) => setName(event.target.value)}
      />
      <Input
        title="Email*"
        placeholder="Email"
        type="Email"
        value={email}
        onChangeText={(event) => setEmail(event.target.value)}
      />
      <Input
        title="Whatsapp Number*"
        content="(Therapy is done over whatsapp and your number is perfectly safe)"
        placeholder="Phone"
        value={number}
        onChangeText={(event) => setNumber(event.target.value)}
      />
      <Input
        title="Description your situation*"
        value={description}
        onChangeText={(event) => setDescription(event.target.value)}
      />
      <div className={styles.radioWrapper}>
        <p className={styles.title}>Preferred language</p>
        {languages.map((ele, index) => (
          <RadioButton
            text={ele}
            selected={selected[index]}
            clickHandler={() => radioHandler(index)}
          />
        ))}
      </div>
      <div className={styles.buttonWrapper} onClick={submitHandler}>
        <p>SEND</p>
      </div>
    </div>
  );
};

export default FreeCounseling;
