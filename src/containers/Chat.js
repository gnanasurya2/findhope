import React, { useState, useRef } from "react";
import styles from "../styles/Chat.module.css";
import Capsule from "../components/Capsule";
import Message from "../components/Message";
import UserMessage from "../components/UserMessage";
import Button from "../components/PrimaryButton";
import Send from "../asset/send-button.svg";
import { useEffect } from "react";
import Result from "../components/Result";
import ReactGA from "react-ga";

const content = {
  length: 10,
  q0: "Hello",
  a0: ["How can I help you", "Hello", "Hello . How are you ."],
  q1: ["I want to feel good", "Hi", "I am fine but I feel low and depressed "],
  a1: [
    "Can you tell me what are you feeling now",
    " what are u feeling exactly",
    "Okay , can you go in detail about how you are feeling and can you tell me since when are you feeling like this ?",
  ],
  q2: [
    "I am feeling tireless and very moody",
    "I am feeling tireless and very moody",
    "I have been feeling dull and worthless from past 15 days. I do not feel like doing anything and tired.",
  ],
  a2: [
    "why are you feeling so ?",
    "what is the reason behind this ?",
    "Okay, I understand that you feel like you have no energy to do anything and can you tell me if anything happened that made you feel sad and worthless.",
  ],
  q3: [
    "I had a fight with my sister a couple of a days ago.",
    "I had a fight with my sister a couple of a days ago.",
    "I had a fight with my sister a couple of a days ago she said I did not achieve anything in my life .",
  ],
  a3: [
    "Okay that seems normal . can you tell me why that is making you depressed.",
    "okay , so you are saying that you had a fight with your sister and that is making you depressed ?",
    "Can you tell what exactly she told and Do you think what she told you is true ?",
  ],
  q4: [
    "The fight with my sister and some things that she said like I did not achieve anything in life .",
    "yes . she tells I havent achieved anything",
    "I am not sure about it , but she tells I have not achieved anything in my whole life",
  ],
  a4: [
    "Okay , why did your sister say that you did not achieve anything ?",
    "Okay , but fights happen between siblings and that should not be the reason for depression .",
    "Okay  , can you give me some examples and remind yourself of some of your achievements ?",
  ],
  q5: [
    "I am not sure of it .",
    "Okay .",
    "I have a job that pays well and makes me happy . I have good grades in my schooling days .",
  ],
  a5: [
    "Okay . do you think what your sister said is true ?",
    "Is there anything that is bothering you or making you depressed ?",
    "So do you still think what your sister said is true?",
  ],
  q6: ["No", "No", "No"],
  a6: [
    "Okay why do you think that it is not true",
    "Okay so the fight is the only reason right ?",
    "That is good to hear . Why do you think your sister said those words ?",
  ],
  q7: [
    "because I think I have achieved few things in my life",
    "Yes she said that I did not achieve anything in my life",
    "We had a fight and I shouted at her and we exchanged some harsh words and when she said that ,  I felt very bad and I stopped talking to her since then",
  ],
  a7: [
    "Okay that is good",
    "Okay . do you feel the same",
    "Okay and I am sorry that you had a fight with your sister . Did you communicate with her about your feelings",
  ],
  q8: [
    "okay. but she said those words that hurt me",
    "No",
    "No , I did not speak with her after she said those words and I do not think she will listen to me",
  ],
  a8: [
    "I understand that , but can you control what she says ?",
    "Did you tell her that you achieved things in your life ?",
    "Okay , I understand how you feel , but I suggest you to tell her how you feel because she might not be aware of the fact that you are hurt by her words and if you tell her about your feelings there are chances that she will understand you and not repeat it again . Can you do that ?",
  ],
  q9: [
    "No",
    "No",
    "Ya , I think I can try that , but why do you think she said those words ?",
  ],
  a9: [
    "So I suggest you go communicate with her",
    "So , why do you take it to heart ?",
    "as you said you were in a fight and had a heated argument and sometimes words come out of the mouth by the heat of the moment , that must have happened here as well . So clarifying the same with your sister will be helpful .",
  ],
  q10: [
    "okay . I will",
    "okay . I will not",
    "Okay . I remember I said some stuff to her as well . I will make things okay with her . Thank you",
  ],
  a10: ["that is good .", "that is good .", "My pleasure "],
};
const Chat = (props) => {
  const [number, setNumber] = useState(0);
  const [messages, setMessages] = useState([content.q0]);
  const [options, setOptions] = useState([...content.a0]);
  const [results, setResults] = useState(false);
  const [selected, setSelected] = useState([false, false, false]);
  const messageRef = useRef(null);
  useEffect(() => {
    if (messageRef) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  const optionClicked = (index) => {
    const data = [false, false, false];
    data[index] = true;
    setSelected(data);
  };
  const sendHandler = () => {
    const index = selected.findIndex((ele) => ele === true);
    if (index !== -1) {
      if (number - 1 !== content.length) {
        setSelected([false, false, false]);
        setMessages((state) => [...state, content["a" + number][index]]);
        setTimeout(() => {
          if (number + 1 <= content.length) {
            setMessages((state) => [
              ...state,
              content["q" + (number + 1)][index],
            ]);
            setOptions([...content["a" + (number + 1)]]);
            setNumber((state) => state + 1);
          }
        }, 1000);
      } else {
        setOptions([]);
      }
    }
  };

  return (
    <div>
      {results ? (
        <div className={styles.resultsWrapper}>
          <h1>Results:</h1>
          <h1>Skill set:</h1>
          <Result title="Opening" width="60" />
          <Result title="Open Questions" width="70" />
          <Result title="Feelings Reflection" width="55" />
          <Result title="Rephrasing" width="50" />
          <Result title="Affirmation" width="45" />
          <Result title="Empathy" width="60" />
          <h1 className={styles.resultContent}>
            This is a prototype only,
            <br /> for more details about the final product and for pre ordering
            it ,<br /> Visit the following link.
          </h1>
          <Button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScgkUX3xGZLdqhuWU5LiCLvza8JlY8uaheCN_omnVFGPl9gmg/viewform"
              className={styles.link}
              target="__blank"
              onClick={() => {
                ReactGA.event({
                  category: "Chat_bot",
                  action: "click",
                  label: "CHAT_BOT",
                });
              }}
            >
              Click to Preorder
            </a>
          </Button>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div>
            <div className={styles.messages} ref={messageRef}>
              {messages.map((ele, index) => {
                if (index % 2 === 0) {
                  return <Message content={ele} />;
                } else {
                  return <UserMessage content={ele} />;
                }
              })}
            </div>
            {messages.length !== (content.length + 1) * 2 ? (
              <div>
                <div className={styles.optionsBox}>
                  {options.map((ele, index) => (
                    <Capsule
                      clicked={() => optionClicked(index)}
                      selected={selected[index]}
                    >
                      {ele}
                    </Capsule>
                  ))}
                  <div className={styles.space}></div>
                </div>
                <button className={styles.button} onClick={sendHandler}>
                  <img src={Send} alt="send" className={styles.image} />
                </button>
              </div>
            ) : (
              <div className={styles.results}>
                <Capsule clicked={() => setResults(true)}>
                  Check your results
                </Capsule>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
