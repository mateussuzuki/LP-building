import React from "react";
import "../src/css/home.scss";
import { Navbar } from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="imageHome">
        <Navbar />
        <div className="backLettersHome">
          <div className="backLettersHomeFlex">
            <h1 className="text-center">
              " whatever good things we build end up building us "
            </h1>
            <p className="mt-4">BY JIM RHON</p>
            <button className="btn px-4 py-2 mt-4">GET A QUOTES</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
