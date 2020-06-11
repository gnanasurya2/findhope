import React, { useState } from "react";

import styles from "../styles/Profile.module.css";
import PrimaryButton from "../components/PrimaryButton";
import Details from "../components/Details";
import Data from "../helpers/PeerCounsellor.json";
import { useParams } from "react-router-dom";
import linkedin from "../asset/linkedin.svg";
import mail from "../asset/mail.svg";

const Profile = (props) => {
  const { id } = useParams();
  const [data, setData] = useState(Data.peerCounsellor[id]);

  return (
    <div className={styles.wrapper}>
      <img
        src={require(`../asset/${data.photo}`)}
        alt="profile"
        className={styles.profilePhoto}
      />
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.qualification}>{data.qualification}</p>
      <PrimaryButton
        title="Book now"
        style={{ backgroundColor: "#4C90C7", width: "80%" }}
      />
      <Details title="About" content={data.about} />
      <Details title="Known Languages" content={data.languages} />
      <div className={styles.media}>
        {data.linkedin ? (
          <a href={data.linkedin}>
            <img src={linkedin} alt="linkedin" />
          </a>
        ) : null}
        <img
          src={mail}
          alt="mail"
          onClick={() => navigator.clipboard.writeText(data.email)}
        />
      </div>
    </div>
  );
};

export default Profile;
