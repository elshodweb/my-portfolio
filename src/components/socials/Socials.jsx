import React from "react";
import style from './Socials.module.css'
import linkedin from "./../../assets/icons/linkedin.svg";
import github from "./../../assets/icons/github.svg";
import telegram from "./../../assets/icons/telegram.png";
import leetcode from "./../../assets/icons/leetcode.png";


export const Socials = () => {
  return (
    <div className={style.socials}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/elshod/"
        title="linkedin"
        className={style.social}
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/tukhtamurodov"
        title="github"
        className={style.social}
      >
        <img src={github} alt="github" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://t.me/elshodbek_t"
        title="telegram"
        className={style.social}
      >
        <img src={telegram} alt="telegram" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://leetcode.com/elshodbek/"
        title="leetcode"
        className={style.social}
      >
        <img src={leetcode} alt="leetcode" />
      </a>
    </div>
  );
};
