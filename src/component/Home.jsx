import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../images/home1.jpg";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={homeimg}
        visit="/About"
        btnname="Get Started"
      />
    </>
  );
}

export default Home;
