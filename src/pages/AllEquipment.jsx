import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tabledata from "../Components/Tabledata";
import { Helmet } from "react-helmet";
import { GrSort } from "react-icons/gr";

const AllEquipment = () => {
  const Loadedsports = useLoaderData();
  const [sports, setSports] = useState(Loadedsports);

  const handleSort = () =>{
    const shortedProducts = [...Loadedsports].sort((a, b)=> b.price -a.price)
    setSports(shortedProducts);
    console.log(sports)
  }
  return (
    <>
        <Helmet>
      <title>All Equipments | Swift</title>
    </Helmet>
      <div>
        <h1 className="md:text-6xl font-3xl font-Bebas text-center py-10">
          All Sports Equipments
        </h1>
        <div className="w-10/12 text-xl font-Roboto mx-auto flex justify-between items-center">
          <p className="text-xl">short by price</p>
          <button onClick={handleSort} className="btn bg-gray-700 text-white">Sort <GrSort /></button>
        </div>
      </div>
      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table">
          {/* head */}
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
            {/* row 1 */}
            {sports.map((sport) => (
              <Tabledata key={sport._id} sport={sport}></Tabledata>
            ))}
          </tbody>
          {/* foot */}
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
      </div>
    </>
  );
};

export default AllEquipment;
