import React from "react";
import { Link } from "react-router-dom";

const MyEquipCard = ({ singleData }) => {
  const {
    itemName,
    category,
    price,
    rating,
    customization,
    ProcessingTime,
    itemImage,
    stockStatus,
    _id,
  } = singleData;
  return (
    <>
      <div className="card bg-base-100 border rounded-none shadow-xl">
        <figure>
          <img
            className="h-72 w-full object-cover"
            src={itemImage}
            alt={category}
          />
        </figure>
        <div className="card-body flex flex-col">
          <h2 className="card-title">{itemName}</h2>
          <div className="font-Roboto text-lg">
            <p>
              <span className="font-bold">category:</span> {category}
            </p>
            <p>
              <span className="font-bold">price:</span> ${price}
            </p>
            <div>
              <span className="font-bold">rating: </span>
              {rating} stars
            </div>
            <p>
              <span className="font-bold">Customization : </span>
              {customization}
            </p>
            <p>
              <span className="font-bold">delivery time: </span>
              {ProcessingTime}
            </p>
            <p>
              <span className="font-bold">Available in Stock: </span>
              {stockStatus}
            </p>
          </div>
          
          <div className="*:w-full grid grid-cols-3 gap-5 mt-auto">
            <button className="btn btn-warning">Edit</button>
            <Link to={`/details/${_id}`} className="btn btn-success">
            view details
          </Link>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEquipCard;
