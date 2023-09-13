import React from "react";
import message from "./../../assets/icons/message.svg";
import style from "./HireMe.module.css";
export const HireMe = ({type}) => {
  console.log(type);
  return (
    <div className={style[type]}>
      <h2 className={style.titleRigth}>Want to hire me?</h2>
      <div className={style.subtitleRigth}>I strive to reply within a day.</div>
      <button className={style.btn}>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:elshodtukhtamurodov13@gmail.com"
        >
          {" "}
        </a>
        <img src={message} alt="message" />
        <span>EMAIL</span>
      </button>
      <div className={style.line}>
        <span>or</span>
      </div>
    </div>
  );
};
