import React, { useState, useEffect } from "react";

import styles from "../styles/Profile.module.css";
import Details from "../components/Details";
import Data from "../helpers/PeerCounsellor.json";
import { useParams } from "react-router-dom";
import linkedin from "../asset/linkedin.svg";
import Capsule from "../components/Capsule";
import Loader from "../components/Loader";

const Profile = (props) => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scroll({ top: 0 });
    setData(Data.peerCounsellor.filter((ele) => ele.url === name)[0]);
  }, [setData, name]);
  return (
    <>
      {data ? (
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
          </div>
          <h1 className={styles.name}>{data.name}</h1>
          <p className={styles.qualification}>{data.qualification}</p>
          <Details title="About" content={data.about} />
          <Details title="Known Languages" content={data.languages} />
          {data.interest.length ? (
            <Details title="Interests">
              <div className={styles.capsuleWrapper}>
                {data.interest.map((ele) => (
                  <Capsule>{ele}</Capsule>
                ))}
              </div>
            </Details>
          ) : null}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Loader style={{ width: "30vw", height: "30vw" }} />
        </div>
      )}
    </>
  );
};

export default Profile;
