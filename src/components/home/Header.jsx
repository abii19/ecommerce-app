import React from "react";
import * as Images from "../../assets/images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header bg-primary relative">
        <div className="container h-full flex">
          <div className="relative z-10 my-auto pl-20">
            <h1 className=" text-heading text-content-primary mb-9">
              Rocket single
              <br /> seater
            </h1>
            <Link
              to="/shop"
              className="text-subtitle text-content-primary link-btn"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <img src={Images.RocketSingleSeater} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
