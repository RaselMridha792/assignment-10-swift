import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import errorImage from "../assets/signup/errorPage.png"

const Errorpage = () => {
  return (
    <>
        <Helmet>
      <title>errorpage | Swift</title>
    </Helmet>
      <div className="flex items-center justify-center flex-col-reverse lg:flex-row min-h-screen px-5">
        <div className="flex flex-col items-center text-center">
          <h1 className="lg:text-9xl text-6xl font-bold text-red-500">Oooops!</h1>
          <p className="text-xl py-5">
            We Can't seem to find a page you are looking for
          </p>
          <NavLink to="/" className="btn btn-warning">
            Go To Home
          </NavLink>
        </div>
        <div className="w-2/4">
          <img src={errorImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Errorpage;
