import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import CategoryItem from "../Components/CategoryItem";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Welcome from "../Components/Welcome";
import Discount from "../Components/Discount";
import Review from "../Components/Review";
import { Link } from "react-router-dom";

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
        <div className="my-10">
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <div
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/gwW79f0/young-man-playing-sports-european-city-sports-urban-environments.jpg")',
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundPosition: "center", // Center the image
              }}
              className="w-full"
            >
              <Link to={`/shopnow/men`} className="w-full bg-black bg-opacity-40 hover:bg-opacity-70 hover:text-orange-500 duration-300 cursor-pointer flex items-center justify-center text-white flex-col  py-40   text-3xl font-bold">
                <h1 className="md:text-5xl">FOR MEN</h1>
                <p>NEW COLLECTION</p>
              </Link>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://i.ibb.co.com/zmp4Gzr/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall.jpg")',
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundPosition: "center", // Center the image
              }}
              className="w-full"
            >
              <Link to={`/shopnow/Women`} className="w-full bg-black bg-opacity-40 hover:bg-opacity-70 hover:text-orange-500 duration-300 cursor-pointer flex items-center justify-center text-white flex-col  py-40   text-3xl font-bold">
                <h1 className="md:text-5xl">FOR WOMEN</h1>
                <p>BEST TREND</p>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full mt-5">
            <div
              style={{
                backgroundImage:
                  'url("https://i.ibb.co.com/r6MZT5x/modern-sport-composition-with-gym-elements.jpg")',
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundPosition: "center", // Center the image
              }}
              className="w-full"
            >
              <Link to={`/shopnow/best-selling`} className="w-full bg-black bg-opacity-40 hover:bg-opacity-70 hover:text-orange-500 duration-300 cursor-pointer flex items-center justify-center text-white flex-col  py-32   text-3xl font-bold">
                <h1>2024</h1>
                <p className="md:text-5xl">BEST SELLING</p>
              </Link>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://i.ibb.co.com/0mL95m0/pexels-wendywei-2820819.jpg")',
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundPosition: "center", // Center the image
              }}
              className="w-full"
            >
              <Link to={`/shopnow/summer-trend`} className="w-full bg-black bg-opacity-40 hover:bg-opacity-70 hover:text-orange-500 duration-300 cursor-pointer flex items-center justify-center text-white flex-col  py-32   text-3xl font-bold">
                <h1 className="md:text-5xl">SUMMER TREND</h1>
                <p>NEW ARRIVALS</p>
              </Link>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://i.ibb.co.com/LJ1xpkX/pexels-julia-kuzenkov-442028-2996262.jpg")',
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundPosition: "center", // Center the image
              }}
              className="w-full"
            >
              <Link to={`/shopnow/big-sale`} className="w-full bg-black bg-opacity-40 hover:bg-opacity-70 hover:text-orange-500 duration-300 cursor-pointer flex items-center justify-center text-white flex-col  py-32   text-3xl font-bold">
                <h1 className="md:text-5xl">BIG SALE</h1>
                <p>SUMMER TREND</p>
              </Link>
            </div>
          </div>
        </div>
        <Fade direction="down">
          <h1 className="text-4xl font-Bebas text-center">Our New Products</h1>
          <hr className="border-2 w-16 mx-auto border-orange-500" />
        </Fade>
        <Fade>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
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
        <Fade direction="down">
          <h1 className="md:text-6xl text-4xl font-Bebas">our happy clients</h1>
          <Review></Review>
        </Fade>
      </div>
    </>
  );
};

export default Home;
