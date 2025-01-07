import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { CardContext } from "../context/CartProvider";

const Details = () => {
  const data = useLoaderData();
  const {addItem, setAddItem} = useContext(CardContext)
  const { user } = useContext(UserContext);
  const {
    itemName,
    category,
    _id,
    price,
    rating,
    customization,
    ProcessingTime,
    itemImage,
    stockStatus,
    description,
  } = data;

  const handleAddToCart = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = form.quantity.value;
    const totalPrice = quantity*price
    const users = user?.email
    const product = {itemImage, itemName, price, id:_id, quantity, totalPrice, users}
    if(user){
      fetch('https://a-sports-equipment-store-server.vercel.app/shopNow/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.acknowledged == true){
          setAddItem(!addItem)
        }
      })
    }
  };

  return (
    <>
      <Helmet>
        <title>Details | Swift</title>
      </Helmet>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-5">
          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-orange-500">
              Product Details
            </h1>
            <p className="text-gray-600 mt-2">
              Find everything about your product here
            </p>
          </div>

          {/* Breadcrumb and Title */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-5">
            <h1 className="text-3xl font-bold text-gray-800">{itemName}</h1>
            <nav className="text-sm text-gray-600 space-x-2">
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
              <span>/</span>
              <span>{category}</span>
            </nav>
          </div>
          <hr className="mb-5" />

          {/* Product Details */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image Section */}
            <div className="lg:w-1/3">
              <img
                className="rounded-lg shadow-md w-full border"
                src={itemImage}
                alt={`${itemName} image`}
              />
              <button className="btn mt-5 w-full bg-red-500 hover:bg-red-600 text-white">
                Add to Wishlist
              </button>
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-5">
              {/* Price and Rating */}
              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold text-orange-500">
                  ${price}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`mask mask-star-2 ${
                        i < rating ? "bg-orange-400" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm">{description}</p>

              {/* Quantity and Add to Cart */}
              <div className="space-y-3">
                <form onSubmit={handleAddToCart} action="">
                  <label className="block">
                    <span className="text-sm font-medium">Quantity</span>
                    <div className="flex gap-3 mt-2">
                      <input
                        type="number"
                        name="quantity"
                        required
                        defaultValue="1"
                        className="input input-bordered w-20"
                      />
                      <button
                        type="submit"
                        className="btn bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </label>
                </form>
              </div>

              {/* Stock and Delivery Info */}
              <div className="text-sm flex flex-wrap gap-5 mt-3">
                <p>
                  <strong>Available Stock:</strong> {stockStatus}
                </p>
                <p>
                  <strong>Delivery In:</strong> {ProcessingTime}
                </p>
              </div>

              {/* Customization */}
              <div className="mt-5">
                <h2 className="text-xl font-medium">
                  Additional Customization
                </h2>
                <p className="text-gray-600 text-sm mt-2">{customization}</p>
              </div>
            </div>
          </div>

          {/* Delivery Information Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              Delivery Information
            </h2>
            <p className="text-gray-600 mb-5">
              Learn about delivery options for this product.
            </p>
            <table className="table-auto w-full border text-left text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border">Type</th>
                  <th className="px-4 py-2 border">How Long</th>
                  <th className="px-4 py-2 border">How Much</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Standard</td>
                  <td className="px-4 py-2 border">3-5 Business Days</td>
                  <td className="px-4 py-2 border">$5.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Express</td>
                  <td className="px-4 py-2 border">1-2 Business Days</td>
                  <td className="px-4 py-2 border">$15.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Overnight</td>
                  <td className="px-4 py-2 border">1 Business Day</td>
                  <td className="px-4 py-2 border">$25.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Share on Social Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              Share on Social
            </h2>
            <p className="text-gray-600 mb-5">
              Share this product with your friends and followers.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="#"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="#"
                className="btn bg-sky-500 hover:bg-sky-600 text-white px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="#"
                className="btn bg-pink-600 hover:bg-pink-700 text-white px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="#"
                className="btn bg-green-600 hover:bg-green-700 text-white px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
