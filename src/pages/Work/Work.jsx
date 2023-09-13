import React from "react";
import style from "./Work.module.css";
import { HireMe } from "../../components/HireMe/HireMe";
import { Socials } from "../../components/socials/Socials";
export const Work = () => {
  return (
    <div className={style.work}>
      <HireMe type="work" />
      <div className={style.socials}>
        <Socials />
      </div>
      <div className={style.title}>My experience so far</div>
    </div>
  );
};
