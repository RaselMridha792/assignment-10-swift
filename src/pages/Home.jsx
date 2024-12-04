import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      const response = await fetch("http://localhost:5000/sports");
      const data = await response.json();
      setCardData(data);
    };
    loadAllData();
  }, []);
  console.log(cardData)
  return (
    <>
      <Banner></Banner>
      <div className="my-20 font-Roboto w-10/12 mx-auto">
        <h1 className="text-7xl font-Bebas text-center">Our New Products</h1>
        <hr />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20">
            {cardData.map(singleData => <Cards key={singleData._id} singleData={singleData}></Cards>)}
        </div>
      </div>
    </>
  );
};

export default Home;
