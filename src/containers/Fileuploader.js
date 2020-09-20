import React, { useEffect } from "react";
import firebase from "../helpers/firebase";
import { useState } from "react";

const Fileuploader = (props) => {
  const [data, setData] = useState();
  const [members, setMembers] = useState([]);

  const db = firebase.firestore();

  useEffect(() => {
    // import("../helpers/colleges/srm.json").then(({ default: data }) => {
    //   setData(data);
    //   console.log(data);
    // });
  }, []);
  useEffect(() => {
    if (data?.members) {
      let length = data.members.length + 1;
      if (data.cofounder) {
        length += data.cofounder.length;
      }
      console.log(length, members.length);
      if (members.length === length) {
        console.log(members);
        db.collection("safespace").doc(data.url).set({
          members: members,
          name: data.name,
        });
      }
    }
  }, [members, data, db]);
  const datauploader = (url, name, role) => {
    console.log(name);
    const val = {
      name: name,
      url: url,
      role: role,
    };
    setMembers((state) => [...state, val]);
  };
  const imageUploader = (name, url, type) => {
    const imageRef = firebase.storage().ref().child(url);
    fetch(process.env.PUBLIC_URL + `/assest/${url}`)
      .then((response) => {
        response.blob().then((blob) => {
          console.log(blob);
          imageRef.put(blob).then(() => {
            db.collection("safespace").doc();
            imageRef
              .getDownloadURL()
              .then((url) => datauploader(url, name, type));
          });
        });
      })
      .catch((err) => console.log(err));
  };
  const uploadHandler = () => {
    imageUploader(data.founder.name, data.founder.photo, "Founder");
    if (data.cofounder) {
      data.cofounder.forEach((member) => {
        imageUploader(member.name, member.photo, "Founder");
      });
    }
    data.members.forEach((member) => {
      imageUploader(member.name, member.url, "Member");
    });
  };

  return (
    <div style={{ width: "100%", height: "100vh", paddingTop: "60px" }}>
      <button onClick={uploadHandler}>upload</button>
    </div>
  );
};

export default Fileuploader;
