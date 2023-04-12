import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Foter from "./components/Foter/Foter";

const App = () => {
  return (
    <div className="">
      <div className="">
        <Header />
        <Outlet />
        <Foter/>
      </div>
    </div>
  );
};

export default App;
// md:mx-20 lg:mx-36
