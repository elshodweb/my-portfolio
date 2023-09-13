import React from "react";
import style from "./Main.module.css";
import { router } from "../../router";
import { Route, Routes } from "react-router-dom";
export const Main = () => {
  return (
    <div className={style.main}>
      <Routes>
        {router.length &&
          router.map((i) => <Route key={i.path} element={i.element} path={i.path} />)}
      </Routes>
    </div>
  );
};
