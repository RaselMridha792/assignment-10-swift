import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyEquipCard from "../Components/MyEquipCard";
import { Helmet } from "react-helmet";

const MyEquipments = () => {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  return (
    <>
      <Helmet>
        <title>My equipments | Swift</title>
      </Helmet>
      <div className="w-10/12 mx-auto my-20">
        <h1 className="text-6xl font-Bebas text-center mb-5">
          {" "}
          my equipments{" "}
        </h1>
        <hr />
        <div className="grid my-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data.length > 0 ? (
            data.map((singleData) => (
              <MyEquipCard
                key={singleData._id}
                singleData={singleData}
                data={data}
                setData={setData}
              ></MyEquipCard>
            ))
          ) : (
            <h1 className="text-center col-span-3 text-red-500 font-bold font-Roboto text-3xl">
              You don't add any equipments. please add equipments
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default MyEquipments;
