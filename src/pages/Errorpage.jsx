import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
          <p className="text-2xl py-5">
            page not found. Please try again later.
          </p>
          <NavLink to="/" className="btn btn-warning">
            Go Back
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
