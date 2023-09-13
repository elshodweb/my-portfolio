import React from "react";
import style from "./Home.module.css";
import { Socials } from "../../components/socials/Socials";
import { HireMe } from "../../components/HireMe/HireMe";

export const Home = () => {
  const about = [
    {
      id: 1,
      text: "I’m a <strong>Software Engineer</strong> specialising in web apps.",
    },
    {
      id: 2,
      text: " I'm a third-year student at Tashkent University of Information Technologies, passionate about Frontend Development with expertise in React.js.",
    },
    {
      id: 3,
      text: "I thrive on tackling challenging projects and building innovative web applications.",
    },
  ];
  return (
    <div className={style.row}>
      <div className={style.column}>
        <h1 className={style.title}>
          Hi, I'm <strong>Elshod</strong>
        </h1>
        <div className={style.subtitle}>Welcome to my page</div>
        <div className={style.abuot}>
          {about.length &&
            about.map((p) => (
              <p key={p.id} dangerouslySetInnerHTML={{ __html: p.text }} />
            ))}
        </div>
      </div>{" "}
      <div className={style.column}>
        <HireMe />
        <Socials />
      </div>
    </div>
  );
};
