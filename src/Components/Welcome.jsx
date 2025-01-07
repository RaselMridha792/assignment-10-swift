import React from "react";
import { Fade } from "react-awesome-reveal";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="font-Roboto">
        <div
          style={{
            backgroundImage: 'url("https://i.ibb.co.com/FJ6b2YQ/gym.jpg")',
          }}
        >
          <div className="md:py-32 py-20 flex items-center justify-center flex-col">
            <h1 className="text-white text-center font-Bebas md:text-4xl text-2xl">
              Get Upto <br />
              <span className="lg:text-9xl md:text-6xl text-4xl">50% Discount </span>
              <br />
              For Your First Order</h1>
              <Link to="/all-equipment" className="btn">Order Now</Link>
          </div>
        </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-black text-white">
            <div className="p-10 flex flex-col items-center justify-center">
              <p className="text-9xl ">
                <FaShippingFast />
              </p>
              <h1 className="text-3xl font-Bebas ">
                Free shiping
              </h1>
              <p>free shiping of all order over $100</p>
            </div>
            <div className="p-10 flex flex-col items-center justify-center">
              <p className="text-9xl ">
                <BsPersonLinesFill />
              </p>
              <h1 className="text-3xl font-Bebas ">
                Online support
              </h1>
              <p>Service support fast 24/7</p>
            </div>
            <div className="p-10 flex flex-col items-center justify-center">
              <p className="text-9xl ">
                <IoDiamond />
              </p>
              <h1 className="text-3xl font-Bebas">
                Money Back
              </h1>
              <p>100% money back guarantee</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Welcome;
