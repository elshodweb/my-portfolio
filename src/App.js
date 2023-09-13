import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Main } from "./components/Main/Main";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
