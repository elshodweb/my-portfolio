import React, { useState } from "react";
import style from "./NavBar.module.css";
import { NavList } from "../NavList/NavList";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`${style.nav}`}>
      <Link to={"/"} className={style.logo}>
        ELSHODBEK.UZ
      </Link>
      <div className={`${style.open} ${isActive?style.active:''}`} onClick={() => setIsActive(!isActive)}>
        <span></span>
      </div>

      <NavList isActive={isActive} setIsActive={setIsActive} />
      <abbr title="Elshod Tukhtamurodov" className={style.author}>
        2023 © Elshod
      </abbr>
    </div>
  );
};
