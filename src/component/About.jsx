import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg from "../images/home.jpg";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={aboutimg}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
}

export default About;
