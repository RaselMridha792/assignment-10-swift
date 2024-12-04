import React from "react";
import { Link } from "react-router-dom";

const Tabledata = ({ sport }) => {
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
  } = sport;
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-32 w-32">
                <img src={itemImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{category}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
          {itemName}
          <br />
        </td>
        <td>${price}</td>
        <th>
          <div className="font-bold">{stockStatus}</div>
        </th>
        <th>
          <Link to={`/details/${_id}`} className="btn btn-warning mt-auto">
            details
          </Link>
        </th>
      </tr>
    </>
  );
};

export default Tabledata;
