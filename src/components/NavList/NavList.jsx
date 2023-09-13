import React from "react";
import { Link, useLocation } from "react-router-dom";
import home from "./../../assets/icons/home.svg";
import blog from "./../../assets/icons/blog.svg";
import about from "./../../assets/icons/about.svg";
import work from "./../../assets/icons/work.svg";
import style from "./NavList.module.css";
const menuList = [
  { id: 1, src: home, path: "/", name: "Home" },
  { id: 2, src: about, path: "/about", name: "About" },
  { id: 3, src: work, path: "/work", name: "Work" },
  { id: 4, src: blog, path: "/blog", name: "Blog" },
];
export const NavList = () => {
  const { pathname } = useLocation();
  return (
    <ul>
      {menuList.length &&
        menuList.map((i) => (
          <li className={`${style.li}`} key={i.id}>
            <Link
              className={`${pathname === i.path ? style.active : ""} ${
                style.link
              }`}
              to={i.path}
            >
              <img src={i.src} alt={i.name} />
              <strong>{i.name}</strong>
            </Link>
          </li>
        ))}
    </ul>
  );
};
