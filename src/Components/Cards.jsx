import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ singleData }) => {
  const { itemName, category, price, rating, itemImage, _id, description } =
    singleData;
  return (
    <>
      <div className="card bg-white border rounded-lg shadow-md hover:shadow-lg">
        <figure className="w-full h-56 relative">
          <img
            className="scale-50 w-full object-cover"
            src={itemImage}
            alt={category}
          />
          <div className="font-bold text-lg absolute top-2 right-2 bg-orange-500 rounded-sm text-white px-5">${price}</div>
        </figure>
        <div className="card-body flex flex-col">
          <Link to={`/details/${_id}`}>
            <h2 className="font-bold text-lg capitalize hover:text-orange-500">
              {itemName.slice(0, 60)}...
            </h2>
          </Link>
          <div className="*:font-Roboto">
            <p>{description.slice(0, 150)}...</p>
          </div>
          <div className="mt-auto flex items-end justify-end">
            <Link to={`/details/${_id}`} className="btn btn-outline btn-sm">see more</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
