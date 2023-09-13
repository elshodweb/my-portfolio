import React from "react";
import style from "./NavBar.module.css";
import { NavList } from "../NavList/NavList";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className={style.nav}>
      <Link to={'/'} className={style.logo}>ELSHODBEK.UZ</Link>
      <NavList />
      <abbr title="Elshod Tukhtamurodov" className={style.author}>2023 © Elshod</abbr>
    </div>
  );
};
