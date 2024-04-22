import React from "react";
import Sale from "../../components/home/Sale/Sale";
import Laptop from "../../components/home/Laptop/NewArrivals";
import Screen from "../../components/home/Screen/Screen";
import Keyboard from "../../components/home/Keyboard/Keyboard";
import Danhmucphobien from "../../components/home/Danhmucphobien/Danhmucphobien";
import BannerFooter from "./BannerFooter/BannerFooter";
import NewsFooter from "./NewsFooter/NewsFooter";
import NavbarFooter from "./NavbarFooter";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <Danhmucphobien />
        <Laptop />
        <Screen />
        <Keyboard />
        <BannerFooter />
        <NewsFooter />
      </div>
    </div>
  );
};

export default Home;
