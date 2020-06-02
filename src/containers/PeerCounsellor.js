import React from "react";
import styles from "../styles/PeerCounsellor.module.css";

import CounsellingHero from "../asset/couneslling Hero Illustration.svg";
import PeerCounselling from "../asset/counselling Second Illustration.svg";
import Counsellor from "../components/Counsellor";
import PrimaryButton from "../components/PrimaryButton";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";

const PeerCounsellor = (props) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Relax, We've Got You</h1>
        <p className={styles.content}>
          We all need someone to talk to, someone who listen, someone who
          understands.
        </p>
        <img
          src={CounsellingHero}
          alt="counseling hero"
          className={styles.image}
        />
      </div>
      <h1 className={styles.counsellingTitle}>
        Our Peer counselor are empathetic, non-judgmental friends with extensive
        psychology background who will help you deal with whatever is troubling
        you
      </h1>
      <img
        src={PeerCounselling}
        alt="peer counsellor"
        className={styles.image}
      />
      <Counsellor />
      <div className={styles.sessionWrapper}>
        <p className={styles.sessionTitle}>Wellbeing is just a click away</p>
        <PrimaryButton title="Peer Session" />
      </div>
      <h1 className={styles.title}>Hear from Hundreds of Happy Users</h1>
      <Testimonial />
      <div className={styles.assessmentWrapper}>
        <h1 className={styles.assessmentTitle}>
          Not Sure if you need counseling
        </h1>
        <PrimaryButton title="Free Assessment" />
      </div>
      <div className={styles.faqWrapper}>
        <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
        <Faq
          title="lorem ipsum dolor"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        ipsa recusandae suscipit unde amet tenetur est aliquid placeat veniam
        saepe?"
        />
        <Faq
          title="lorem ipsum dolor"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      ipsa recusandae suscipit unde amet tenetur est aliquid placeat veniam
      saepe?"
          closed
        />
      </div>
    </div>
  );
};

export default PeerCounsellor;
