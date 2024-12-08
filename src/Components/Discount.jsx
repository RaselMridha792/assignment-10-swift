import React from "react";
import brands1 from "../assets/brands1.jpg";
import brands2 from "../assets/brands2.jpg";
import brands3 from "../assets/brands3.jpg";
import brands4 from "../assets/brands4.jpg";
import brands5 from "../assets/brands6.jpg";
import brands7 from "../assets/brands7.jpg";
import brands8 from "../assets/brands8.jpg";
import brands9 from "../assets/brands9.jpg";
import brands10 from "../assets/brands10.jpg";
import brands11 from "../assets/brands11.jpg";
import { Fade } from "react-awesome-reveal";

const Discount = () => {
  return (
    <>
      <div className="my-20 font-Roboto">
        <div className="py-5">
          <Fade direction="up">
          <h1 className="md:text-6xl text-4xl font-Bebas">our top brands</h1>
            <p className="text-xl text-gray-400">
              Elevating Your Style with the Best: Discover Our Top Brands Today!
            </p>
          </Fade>
        </div>
        <Fade direction="down">
        <div className="my-20 grid lg:grid-cols-5 gap-5 md:grid-cols-3 grid-cols-1 ">
          <div>
            <img src={brands1} alt="" />
          </div>
          <div>
            <img src={brands2} alt="" />
          </div>
          <div>
            <img src={brands5} alt="" />
          </div>
          <div>
            <img src={brands7} alt="" />
          </div>
          <div>
            <img src={brands3} alt="" />
          </div>
          <div>
            <img src={brands4} alt="" />
          </div>
          <div>
            <img src={brands8} alt="" />
          </div>
          <div>
            <img src={brands9} alt="" />
          </div>
          <div>
            <img src={brands10} alt="" />
          </div>
          <div>
            <img src={brands11} alt="" />
          </div>
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Discount;
