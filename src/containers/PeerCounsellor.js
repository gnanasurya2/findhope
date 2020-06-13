import React, { useEffect, useState } from "react";
import styles from "../styles/PeerCounsellor.module.css";

import CounsellingHero from "../asset/couneslling Hero Illustration.svg";
import PeerCounselling from "../asset/counselling Second Illustration (1).svg";
import Counsellor from "../components/Counsellor";
import PrimaryButton from "../components/PrimaryButton";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import { Link } from "react-router-dom";
import Data from "../helpers/PeerCounsellor.json";
import Arrow from "../asset/arrow.svg";

const PeerCounsellor = (props) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const changeCounsellor = (direction) => {
    const length = Data.peerCounsellor.length - 1;
    if (index === 0 && direction === -1) {
      setIndex(length);
    } else if (index === length && direction === 1) {
      setIndex(0);
    } else {
      setIndex((state) => state + direction);
    }
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Relax, We've Got You</h1>
        <p className={styles.content}>
          We all need someone to talk to, someone who listen, someone who
          understands.
        </p>
        <div className={styles.buttonWrapper}>
          <Link to="/freecounseling">
            <PrimaryButton title="Free counseling" />
          </Link>
        </div>
        <img
          src={CounsellingHero}
          alt="counseling hero"
          className={styles.image}
        />
      </div>
      <img
        src={PeerCounselling}
        alt="peer counsellor"
        className={styles.image}
      />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        You are in safe hands
      </h1>
      <p className={styles.counsellingTitle}>
        Our Peer counselors are empathetic, non-judgmental friends with
        extensive psychology background who will help you deal with whatever is
        troubling you
      </p>

      <div className={styles.counsellorWrapper}>
        <div className={styles.controls} onClick={() => changeCounsellor(-1)}>
          <img src={Arrow} alt="left arrow" />
        </div>
        <Counsellor
          name={Data.peerCounsellor[index].name}
          qualification={Data.peerCounsellor[index].qualification}
          src={
            process.env.PUBLIC_URL +
            `/assest/${Data.peerCounsellor[index].photo}`
          }
          id={Data.peerCounsellor[index].url}
        />
        <div className={styles.controls} onClick={() => changeCounsellor(1)}>
          <img
            src={Arrow}
            alt="right arrow"
            style={{ transform: "rotateZ(180deg)" }}
          />
        </div>
      </div>
      <div className={styles.sessionWrapper}>
        <p className={styles.sessionTitle}>Wellbeing is just a click away</p>
        <PrimaryButton title="Free Counseling" />
      </div>
      <h1 className={styles.title}>Hear from Hundreds of Happy Users</h1>
      <Testimonial />
      <div className={styles.assessmentWrapper}>
        <h1 className={styles.assessmentTitle}>
          Not Sure if you need counseling
        </h1>
        <Link to="/test">
          <PrimaryButton title="Free Assessment" />
        </Link>
      </div>
      <div className={styles.faqWrapper}>
        <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
        <Faq
          title="Is peer Counseling completely free ?"
          content="Yes, There are no charges. "
        />
        <Faq
          title="Is Peer Counseling effective ? "
          content="It is highly subjective to your case, take our free mental wellness test to know more about the cause, severity and treatment about your case."
        />
        <Faq
          title="Why should I mention my WhatsApp number ?"
          content="You can connect with a peer Counselor through whatsapp and proceed further via phone. "
        />
        <Faq
          title="Does findhope record/use any of my personal information ?"
          content=" No we do not record/save any of the users personal issue but we end the Counselling session with a feedback , this is the only information we save. "
        />
        <Faq
          title="Does findhope have Psychologists ?"
          content="Yes, we work with Psychologists.Infact, a peer Counselor may recommend professional intervention depending on a user's case. "
        />
        <Faq
          title="How can I be a peer Counselor ?"
          content="Anyone can be a Peer Counselors given that they are passionate about Counselling , while not expecting a fee and can go through a training session."
        />
      </div>
    </div>
  );
};

export default PeerCounsellor;
