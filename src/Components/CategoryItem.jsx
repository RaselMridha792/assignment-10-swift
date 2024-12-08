import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryItem = () => {
  const [allSports, setAllSports] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        "https://a-sports-equipment-store-server.vercel.app/allSports"
      );
      const data = await response.json();
      setAllSports(data);
    };
    loadData();
  }, []);
  const categoriesData = [...new Set(allSports.map((item) => item.category))];
  return (
    <>
      <div className="font-Roboto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5  font-bold text-xl py-5">
        {categoriesData.map((category) => (
          <Link key={category} className="border p-5 rounded-lg hover:text-red-500" to={`/shopnow/${category}`}>{category}</Link>
        ))}
      </div>
    </>
  );
};

export default CategoryItem;
