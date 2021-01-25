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
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const [visible, setVisible] = useState([true, false, false]);
  const [age, setAge] = useState();
  const changeVisible = (index) => {
    const vis = [false, false, false];
    vis[index] = true;
    setVisible(vis);
  };
  const submitHandler = () => {
    if (name === "") {
      alert("Name should not be empty");
      return;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      alert("Enter a valid email");
      return;
    }
    if (!number.match(/^[0]?[6789]\d{9}$/)) {
      alert("Enter a valid number");
      return;
    }
    if (description === "") {
      alert("describe your situation");
      return;
    }
    if (visible[0]) {
      changeVisible(1);
    }
    if (visible[1]) {
      changeVisible(2);
      fetch(
        `https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/3/d/e/1FAIpQLScLp0GxKSMF9I9b2rhlU-BCBmGAm9QVfcsiBA-fChOk19N5_w/formResponse?entry.455918560=${name}&entry.2020669080=${email}&entry.1690252233=${number}&entry.1628414300=${final}&entry.788657994=${description}`,
        {
          type: "POST",
          headers: { Content: "xml" },
        }
      )
        .then(() => {
          console.log("submited");
          setName("");
          setEmail("");
          setNumber("");
          setDescription("");
          setSelected([true, false, false]);
          setTimeout(() => setRedirect(true), 300);
        })
        .catch(() => {
          alert("Can't able to sumbit your request. Please try again");
          changeVisible(0);
        });
    }
    console.log(visible);
  };
  const radioHandler = (index) => {
    const sel = [false, false, false];
    sel[index] = true;
    setSelected(sel);
    setFinal(languages[index]);
  };
  const checkboxHandler = (index) => {
    const check = [...checkboxes];
    check[index] = !check[index];
    setCheckboxes(check);
  };
  return (
    <div className={styles.wrapper}>
      {redirect ? <Redirect path="/freecounseling" /> : null}

      {visible[0] ? (
        <React.Fragment>
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
            title="Age"
            placeholder="Age"
            value={age}
            onChangeText={(event) => setAge(event.target.value)}
          />
          <Input
            title="Whatsapp Number*"
            content="(Therapy is done over whatsapp and your number is perfectly safe)"
            placeholder="Phone"
            value={number}
            onChangeText={(event) => setNumber(event.target.value)}
          />
          <Input
            title="Describe your situation*"
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
        </React.Fragment>
      ) : null}
      {visible[1] ? (
        <React.Fragment>
          <h1 className={styles.finalTitle}>Please note</h1>
          <div className={styles.checkboxDiv}>
            <label htmlFor="one">
              The conversation b/w you and peer counselor is confidential. We
              are not accountable for any and all consequences that are
              directly/indirectly the result of conversation.
            </label>
          </div>
          <div className={styles.checkboxDiv}>
            <label htmlFor="second">
              Any misconduct towards a peer counselor will not be tolerated and
              will lead to disciplinary actions viz a permanent ban from
              services, lawsuit, FIR depending on the severity of offence.
            </label>
          </div>
          <div className={styles.checkboxDiv}>
            <label htmlFor="third">
              findhope does not provide any kind of professional aid, This is a
              safe space for people irrespective of gender, caste, ethnicity etc
              to vent out and get help.
            </label>
          </div>
        </React.Fragment>
      ) : null}
      {visible[2] ? (
        <h1 className={styles.finalTitle}>Your response has been recorded</h1>
      ) : null}
      {!visible[2] ? (
        <div className={styles.buttonWrapper} onClick={submitHandler}>
          <p>SEND</p>
        </div>
      ) : null}
    </div>
  );
};

export default FreeCounseling;
