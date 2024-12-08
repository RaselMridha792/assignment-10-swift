import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateEquipment = () => {
  const { user } = useContext(UserContext);
  const loadedEquipment = useLoaderData();
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
    _id,
  } = loadedEquipment;
  const userName = user.displayName;
  const userEmail = user.email;
  const HandleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.ItemName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const ProcessingTime = form.ProcessingTime.value;
    const itemImage = form.image.value;
    const stockStatus = form.stock.value;
    const description = form.description.value;
    const UpdateEquipment = {
      userName,
      userEmail,
      itemName,
      category,
      price,
      rating,
      customization,
      ProcessingTime,
      itemImage,
      stockStatus,
      description,
    };
    fetch(`https://a-sports-equipment-store-server.vercel.app/sports/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Successfully Updated your Equipments",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update | Swift</title>
      </Helmet>
      <div className="w-10/12 mx-auto font-Roboto my-20 border shadow-lg rounded-lg">
        <h1 className="text-center font-bold text-4xl py-5">
          Update Equipment
        </h1>
        <hr />
        <div className="py-5 md:px-10 px-5">
          <form onSubmit={HandleUpdateProduct} className="gap-5">
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Item Name*</span>
                </div>
                <input
                  type="text"
                  name="ItemName"
                  defaultValue={itemName}
                  placeholder="Item Name"
                  className="input input-bordered w-full "
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category Name*</span>
                </div>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Product Price $*</span>
                </div>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="product price $"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Rating of Your Product*</span>
                </div>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  placeholder="rating"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Customization*</span>
                </div>
                <input
                  type="text"
                  name="customization"
                  defaultValue={customization}
                  placeholder="bat with extra grip, hit paper etc"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Processing Time*</span>
                </div>
                <input
                  type="text"
                  name="ProcessingTime"
                  defaultValue={ProcessingTime}
                  placeholder="Delivery time"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Product photo Url*</span>
                </div>
                <input
                  type="text"
                  name="image"
                  defaultValue={itemImage}
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Stock Status*</span>
                </div>
                <input
                  type="number"
                  name="stock"
                  defaultValue={stockStatus}
                  placeholder="How many stock do you have"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">User Name</span>
                </div>
                <input
                  type="text"
                  value={userName}
                  placeholder="Item Name"
                  className="input text-gray-400 input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">User Email</span>
                </div>
                <input
                  type="text"
                  value={userEmail}
                  placeholder="How many stock do you have"
                  className="input text-gray-400 input-bordered w-full"
                />
              </label>
            </div>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Product Description*</span>
              </div>
              <textarea
                placeholder="write your product description"
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered textarea-lg w-full"
                required
              ></textarea>
            </label>
            <button className="btn col-span-2 btn-success w-full my-5">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEquipment;
