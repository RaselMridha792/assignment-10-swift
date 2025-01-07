import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipCard = ({ singleData, setData, data }) => {
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://a-sports-equipment-store-server.vercel.app/sports/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((datas) => {
            if (datas.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = data.filter(sports => sports._id !== _id)
              setData(remaining);
            }
          });
      }
    });
  };
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
            <p>
              {ProcessingTime} Delivery
            </p>
          </div>

          <div className="*:w-full grid grid-cols-3 gap-5 mt-auto">
            <Link to={`/updateEquipment/${_id}`} className="btn btn-warning">Edit</Link>
            <Link to={`/details/${_id}`} className="btn btn-success">
              view details
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEquipCard;
