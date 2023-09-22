import React from "react";
import style from "./Work.module.css";
import { HireMe } from "../../components/HireMe/HireMe";
import { Socials } from "../../components/socials/Socials";
import { Expreriences } from "../../components/Expreriences/Expreriences";
export const Work = () => {
  return (
    <div className={style.work}>
      <HireMe type="work" />
      <Socials />
      <Expreriences />
    </div>
  );
};
