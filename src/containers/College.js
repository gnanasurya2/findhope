import React, { useState, useEffect } from "react";
import styles from "../styles/College.module.css";
import Photo from "../components/Photo";
import Accordion from "../components/Accordion";
import RoadMap from "../components/RoadMap";
import Faq from "../components/Faq";
import { useParams, Redirect } from "react-router-dom";

const College = (props) => {
  const [data, setData] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const { name } = useParams();
  useEffect(() => {
    import(`../helpers/colleges/${name}.json`)
      .then(({ default: final }) => {
        setData(final);
      })
      .catch(() => {
        setRedirect(true);
      });
  }, [name]);
  return (
    <div className={styles.outerWrapper}>
      {redirect ? <Redirect to="/" /> : null}
      {data ? (
        <>
          <div className={styles.wrapper}>
            <h1 className={styles.collegeName}>{data.name}</h1>
          </div>
          <Photo photo={data.founder.photo} />
          <p className={styles.founderContent}>
            Mental health is highly ignored and neglected, In fact its
            stigmatised and seen as a negative stereotype. With findhope{" "}
            {data.url.toLocaleUpperCase()} we want to change this attitude, We
            want to bring free, accessible and quality mental health care to our
            campus.
          </p>
          <h1 className={styles.subtitle}>
            Transforming the future of mental wellness
          </h1>
          <Accordion
            title="Recognition"
            content=" Although mental health is a fundamental component of health, recognition of mental health disorders and its importance is limited, with Awareness Campaign we promote the symptoms and risk factors of common mental health struggles."
          />
          <Accordion
            title="Stigma"
            content=" Stigma associated with mental health can stop people from reaching out for help, because of the negative stereotypes it imparts on people. Remember your mental health issue doesn't define you."
          />
          <Accordion
            title="Self help"
            content="Just like Health Literacy , mental health literacy refers to recognition, management and prevention of mh disorders by learning self help techniques and understanding when to seek professional help."
          />
          <RoadMap />
          <h1 style={{ fontSize: "36px" }}>Founding members</h1>
          {data.members.map((ele) => (
            <Photo name={ele.name} photo={ele.photo} />
          ))}
          <Faq
            title="What is findhope.in?Why is it doing this program?"
            content="Findhope is a student centric mental wellness startup ( findhope.in). We provide free peer counselling, free mental wellness tests like depression and anxiety tests. Findhope has started the youth advocate program to bring leaders in mental health from universities across India and equip students with free and authentic resources. "
          />
          <Faq
            title="What should I do as a youth advocate?"
            content={[
              "If you are a founder",
              "1) Build a team of at least 2 members ( steps & resources will be given in awareness playbook )",
              "2) Coordinate with co-founders to run 3 campaigns by taking resources from playbook and sharing it via social media.",
              "If you are a co-founder",
              "1) Coordinate with co-founders to run 3 campaigns by taking resources from playbook and sharing it via social media and take an emotional first aid course worth 99. ",
            ]}
            special
          />
          <Faq
            title="How much time should a youth advocate spend ?"
            content="We have stitched the program to leverage impact with minimum time, typically a Y.A will spend 3 hours for successful completion of the program. "
          />
          <Faq
            title="What are campaigns ? How will it help others?"
            content={[
              "A youth advocate either a co-founder or founder will run 3 digital campaigns to promote and equip fellow students with enough knowledge and free resources to tackle common mental health struggles.",
              "1) Awareness Campaign- We face a lot of mental health struggles for the very first time in our lives, but very few of us recognise it and take action, through this campaign we focus on recognising common mental health struggles. ( 1 hour of work) ",
              "2) Literacy Campaign- Recognising or just being aware that we have encountered a mental health problem is just the first step towards a solution, Through Literacy campaign we focus on promoting self-help techniques & free resources to tackle them. ( 1 hour of work) ",
              "3) Stigma Campaign - Not many can openly talk about their mental health problems, many still consider mental health problems as a shameful integrity or an intrinsic defect in a person or any other negative stereotype. Reality is just the opposite of these negative attributes and these stop people from reaching out and getting help. Stigma campaign aims in changing these behaviours.( 1 hour of work) ",
            ]}
            special
          />
          <Faq
            title="What is an Emotional First Aid course?
  Is it compulsory for the Youth Advocate Program?"
            content="Emotional first aid akin to physical first aid is a self help strategy deployed to stop damage from an emotional wound like loneliness, rejection, failure, low self esteem etc. Yes, It is compulsory for every Youth Advocate to take up the course, it helps them treat themselves and their peers, It costs 99 rs and is a part of the Literacy Campaign. "
          />
          <Faq
            title="What are the Incentives for Youth Advocates?"
            content={[
              "- Become a certified changemaker",
              "- Work reference for a career opportunity ( LOR, SOP , References etc for abroad studies/placements)",
              "- Transform into a entrepreneur leader ",
              "- Launch disruptive Products that bring social change ",
              "- A personal University website as a digital portfolio",
            ]}
            special
          />
          <Faq
            title="Why did we start a mental health startup ?"
            content="India looses one student every hour to suicide and more than 20% of indian students are affected by some level of mental health disorder, but how many can actually recognise their problems ? and how many have the resources to treat them ?. W.H.O says that 90 % of the youth never take treatment for their mental health issue. We want to decrease this treatment gap ,so we have built free counselling services, free tests and most importantly a community of young leaders who are forging teams and educating their campuses on mental health awareness, literacy and stigma. "
          />{" "}
        </>
      ) : null}
    </div>
  );
};

export default College;
