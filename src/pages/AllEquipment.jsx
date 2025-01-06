import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tabledata from "../Components/Tabledata";
import { Helmet } from "react-helmet";
import { GrSort } from "react-icons/gr";
import Cards from "../Components/Cards";

const AllEquipment = () => {
  const Loadedsports = useLoaderData();
  const [sports, setSports] = useState(Loadedsports);
  const handleSort = () => {
    const shortedProducts = [...Loadedsports].sort((a, b) => b.price - a.price);
    setSports(shortedProducts);
    console.log(sports);
  };
  return (
    <>
      <Helmet>
        <title>All Equipments | Swift</title>
      </Helmet>
      <section className="my-16">
        <div>
          <h1 className="md:text-6xl font-3xl font-Bebas text-center pt-10">
            All Campaign
          </h1>
          <div className="w-10/12 text-xl font-Roboto mx-auto flex justify-between items-center">
            <p className="text-xl">short by price</p>
            <button onClick={handleSort} className="btn bg-gray-700 text-white">
              Sort <GrSort />
            </button>
          </div>
        </div>
        <hr className="my-5" />
        <div className="my-20 w-10/12 px-5 mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
            {sports.map((singleData) => (
              <Cards key={singleData._id} singleData={singleData}></Cards>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {sports.map((sport) => (
              <Tabledata key={sport._id} sport={sport}></Tabledata>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Product Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Details</th>
            </tr>
          </tfoot>
        </table>
      </div> */}
    </>
  );
};

export default AllEquipment;
