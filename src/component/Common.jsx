import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg from "../images/home.jpg";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-auto">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> groWwBusineSs</strong>
                  </h1>
                  <p className="my-3">
                    We are the team of talented developers making websites
                  </p>
                  <div className="mt-4">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="about-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
