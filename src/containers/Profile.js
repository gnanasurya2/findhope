import React, { useState, useEffect } from "react";

import styles from "../styles/Profile.module.css";
import Details from "../components/Details";
import Data from "../helpers/PeerCounsellor.json";
import { useParams } from "react-router-dom";
import linkedin from "../asset/linkedin.svg";
import mail from "../asset/mail.svg";

const Profile = (props) => {
  const { name } = useParams();
  const [data, setData] = useState(Data.peerCounsellor[0]);
  useEffect(() => {
    window.scroll({ top: 0 });
    setData(Data.peerCounsellor.filter((ele) => ele.url === name)[0]);
  }, [setData, name]);
  return (
    <div className={styles.wrapper}>
      <img
        src={process.env.PUBLIC_URL + `/assest/${data.photo}`}
        alt="profile"
        className={styles.profilePhoto}
      />
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
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.qualification}>{data.qualification}</p>
      <Details title="About" content={data.about} />
      <Details title="Known Languages" content={data.languages} />
    </div>
  );
};

export default Profile;
