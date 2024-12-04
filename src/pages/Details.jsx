import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    itemName,
    category,
    price,
    rating,
    customization,
    ProcessingTime,
    itemImage,
    stockStatus,
    description,
  } = data;
  return (
    <>
      <div className="font-Roboto w-10/12 mx-auto my-20">
        <h1 className="md:text-6xl text-3xl text-center font-Bebas">
          Product Details
        </h1>
        <div className="border p-5 rounded-lg mt-5">
          <h1 className="font-bold">Category: {category}</h1>
          <div className="grid lg:grid-cols-2 gap-5 py-5">
            <div className="lg:w-3/4 rounded-lg">
              <img className="" src={itemImage} alt="" />
            </div>
            <div className="space-y-4 text-lg">
              <h1 className="text-3xl">Name: {itemName}</h1>
              <p><span className="font-bold">our rating:</span> {rating} stars</p>
              <div className="flex items-center gap-2">
                <span className="font-bold">rate us:</span>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p>
                <span className="font-bold">price:</span> ${price}
              </p>
              <hr />
              <p>
                <span className="font-bold">customization:</span>{" "}
                {customization}
              </p>
              <hr />
              <p>
                <span className="font-bold">delivery time:</span>{" "}
                {ProcessingTime}
              </p>
              <p>
                <span className="font-bold">Available stock: </span>{" "}
                {stockStatus} pcs
              </p>
              <hr />
              <p>
                <span className="font-bold">description: </span> {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
