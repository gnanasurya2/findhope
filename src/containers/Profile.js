import React from "react";

import styles from "../styles/Profile.module.css";
import defaultImage from "../asset/fbmale.png";
import PrimaryButton from "../components/PrimaryButton";
import Details from "../components/Details";

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={defaultImage} alt="profile" className={styles.profilePhoto} />
      <h1 className={styles.name}>Gnanasurya</h1>
      <p className={styles.qualification}>B.Tech</p>
      <PrimaryButton
        title="Book now"
        style={{ backgroundColor: "#4C90C7", width: "80%" }}
      />
      <Details
        title="About"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium beatae eligendi ratione ipsum hic. Temporibus doloremque maiores velit beatae?"
      />
      <Details title="Known Languages" content="English, Tamil" />
      <Details
        title="Areas of Expertise"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium beatae "
      />
    </div>
  );
};

export default Profile;
