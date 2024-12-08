import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import CategoryItem from "../Components/CategoryItem";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Welcome from "../Components/Welcome";
import Discount from "../Components/Discount";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      const response = await fetch(
        "https://a-sports-equipment-store-server.vercel.app/sports"
      );
      const data = await response.json();
      setCardData(data);
      setLoader(false);
    };
    loadAllData();
  }, [loader]);

  return (
    <>
      <Helmet>
        <title>Home | Swift</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-20 font-Roboto w-10/12 mx-auto">
        <Fade direction="down">
          <h1 className="md:text-7xl text-4xl font-Bebas text-center">
            Our New Products
          </h1>
        </Fade>
        <hr />
        <Fade>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20">
            {loader ? (
              <>
                <div className="col-span-3 flex items-center justify-center">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              </>
            ) : (
              cardData.map((singleData) => (
                <Cards key={singleData._id} singleData={singleData}></Cards>
              ))
            )}
          </div>
        </Fade>
        <div className="my-20">
          <Fade direction="up">
            <h1 className="text-center font-Bebas md:text-6xl text-4xl">
              Sports categories
            </h1>
          </Fade>
          <hr className="my-5" />
          <div className="my-5">
            {/* {categoriesData.map((singleData) => <h1>{singleData}</h1>)} */}
            <CategoryItem></CategoryItem>
          </div>
        </div>
        <Welcome></Welcome>
        <Discount></Discount>
      </div>
    </>
  );
};

export default Home;
