import React from "react";
import style from "./Expreriences.module.css";
export const Expreriences = () => {
  const expreinces = [
    {
      id: 1,
      company: "Freelance",
      duration: "8 mos",
      position: "Full-stack",
      date: "JAN 2023 - AUG 2023",
      descr:
        "I have hands-on experience with React.js and Express.js, working with databases like MongoDB and PostgreSQL. My skill set includes popular libraries such as Redux, JWT, Bcrypt, Swagger, and React Router DOM.",
    },
    {
      id: 2,
      company: "Najot Ta'lim",
      duration: "2+ mos",
      position: "Front-End(support Techer)",
      date: "AUG 2023 - Present",
      descr:
        "I possess a strong command of HTML5 and CSS3, with a proven track record of creating responsive and cross-browser compatible layouts. My expertise extends to developing web applications using React.js with React Router Dom for efficient routing and Next.js for server-side rendering. I leverage TypeScript for robust type-checking and Redux for state management.",
    },
  ];
  return (
    <div className={style.row}>
      <div className={style.title}>My experience so far</div>
      {expreinces.length &&
        expreinces.map((i) => (
          <div className={style.wrapper}>
            <div className={style.rowName}>
              <h3 className={style.name}>{i.company}</h3>
              <span className={style.duration}>({i.duration})</span>
            </div>
            <div className={style.body}>
              <h4 className={style.position}>{i.position}</h4>
              <date className={style.date}>{i.date}</date>
              <p className={style.descr}>{i.descr}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
