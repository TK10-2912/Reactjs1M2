import React from "react";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import Laptop from "../../components/home/Laptop/NewArrivals";
import Screen from "../../components/home/Screen/Screen";
import Keyboard from "../../components/home/Keyboard/Keyboard";
import Danhmucphobien from "../../components/home/Danhmucphobien/Danhmucphobien";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <Danhmucphobien />
        <Laptop />
        <Screen />
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;
