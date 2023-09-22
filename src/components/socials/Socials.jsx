import React from "react";
import style from "./Socials.module.css";
import linkedin from "./../../assets/icons/linkedin.svg";
import github from "./../../assets/icons/github.svg";
import telegram from "./../../assets/icons/telegram.png";
import leetcode from "./../../assets/icons/leetcode.png";
import instagram from "./../../assets/icons/instagram.svg";

const socials = [
  {
    id: 1,
    name: "linkedin",
    src: linkedin,
    link: "https://www.linkedin.com/in/elshod/",
  },
  {
    id: 2,
    name: "github",
    src: github,
    link: "https://github.com/tukhtamurodov",
  },
  {
    id: 3,
    name: "telegram",
    src: telegram,
    link: "https://t.me/elshodbek_t",
  },
  {
    id: 4,
    name: "leetcode",
    src: leetcode,
    link: "https://leetcode.com/elshodbek/",
  },
  {
    id: 5,
    name: "instagram",
    src: instagram,
    link: "https://www.instagram.com/elshodbek.t/",
  },
];

export const Socials = () => {
  return (
    <div className={style.socials}>
      {socials.length &&
        socials.map((i) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={i.link}
            title={i.name}
            className={style.social}
          >
            <img src={i.src} alt={i.name} />
          </a>
        ))}
    </div>
  );
};
