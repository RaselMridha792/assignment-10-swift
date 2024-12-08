import React from "react";
import { Fade } from "react-awesome-reveal";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

const Welcome = () => {
  return (
    <>
      <div className="font-Roboto">
        <div className="my-10">
          <Fade direction="up">
            <h1 className="md:text-6xl text-4xl font-Bebas font-bold">
              Welcome to <span className="text-orange-500">Swift</span>
            </h1>
            <p className="text-lg text-gray-400">
              Welcome to Our Sports Store – Where Swift Service Meets Endless
              Smiles!
            </p>
          </Fade>
        </div>
        <Fade direction="down">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="border shadow-lg p-10 flex flex-col items-center justify-center">
              <p className="text-9xl text-orange-500">
                <FaShippingFast />
              </p>
              <h1 className="text-3xl font-Bebas text-orange-500">
                Free shiping
              </h1>
              <p>free shiping of all order over $100</p>
            </div>
            <div className="border shadow-lg p-10 flex flex-col items-center justify-center">
              <p className="text-9xl text-orange-500">
                <BsPersonLinesFill />
              </p>
              <h1 className="text-3xl font-Bebas text-orange-500">
                Online support
              </h1>
              <p>Service support fast 24/7</p>
            </div>
            <div className="border shadow-lg p-10 flex flex-col items-center justify-center">
              <p className="text-9xl text-orange-500">
                <IoDiamond />
              </p>
              <h1 className="text-3xl font-Bebas text-orange-500">
                Money Back
              </h1>
              <p>100% money back guarantee</p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Welcome;
