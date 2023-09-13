import React from "react";
import style from "./About.module.css";
import img from "./../../assets/img/my-picture.jpg";
import { Socials } from "../../components/socials/Socials";
const about = [
  {
    id: 1,
    text: "Hello! I'm a third-year student at Tashkent University of Information Technologies, passionate about <strong>Frontend Development </strong>  with expertise in React.js .",
  },
  {
    id: 2,
    text: "I thrive on tackling challenging projects and building innovative web applications.",
  },
  {
    id: 3,
    text: "I'm eager to connect with like-minded professionals and explore exciting opportunities in the tech industry.",
  },
];
export const About = () => {
  return (
    <div className={style.row}>
      <div className={style.column}>
        <div className={style.img}>
          <img src={img} alt="img" />
        </div>
        <Socials />
      </div>
      <div className={style.column}>
        <h1 className={style.title}>About me</h1>

        <div className={style.abuot}>
          {about.length &&
            about.map((p) => (
              <p key={p.id} dangerouslySetInnerHTML={{ __html: p.text }} />
            ))}
        </div>
      </div>
    </div>
  );
};
