import React, { useEffect } from "react";
import styles from "../styles/Blogger.module.css";
import { useParams } from "react-router-dom";
import data from "../helpers/Blogger.json";
import { useState } from "react";
import mail from "../asset/mail.svg";
const Blogger = (props) => {
  const { name } = useParams();
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setProfile(data.blogger.filter((ele) => ele.url === name)[0]);
  }, [name]);
  return (
    <div>
      {profile ? (
        <div className={styles.wrapper}>
          <div className={styles.profileWrapper}>
            <img
              src={process.env.PUBLIC_URL + `/assest/${profile.photo}`}
              alt="profile"
              className={styles.image}
            />
            <div>
              <h1 className={styles.name}>{profile.name}</h1>
              <a href={`mailto:${profile.email}`}>
                <img src={mail} alt="mail" className={styles.mail} />
              </a>
            </div>
          </div>
          {profile.content.map((con) => (
            <p className={styles.content}>{con}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Blogger;
