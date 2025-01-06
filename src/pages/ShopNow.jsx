import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";
import { Helmet } from "react-helmet";

const ShopNow = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Helmet>
        <title>shop now | Swift</title>
      </Helmet>
      <div className="w-10/12 mx-auto my-16">
        <h1 className="text-4xl font-Bebas text-center py-5">Shop Now</h1>
        <hr />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-20">
          {data.length <= 0 ? (
            <>
              <h1 className="text-center font-bold text-xl col-span-4">
                no data found in this category. item added very soon
              </h1>
            </>
          ) : (
            data.map((singleData) => (
              <Cards singleData={singleData} key={singleData.id}></Cards>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ShopNow;
