import React from "react";
import { useLoaderData } from "react-router-dom";
import Tabledata from "../Components/Tabledata";
import { Helmet } from "react-helmet";

const AllEquipment = () => {
  const sports = useLoaderData();
  return (
    <>
        <Helmet>
      <title>All Equipments | Swift</title>
    </Helmet>
      <div>
        <h1 className="md:text-6xl font-3xl font-Bebas text-center py-10">
          All Sports Equipments
        </h1>
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
