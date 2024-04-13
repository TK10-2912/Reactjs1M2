import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useParams } from "react-router-dom";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Offer = () => {
  const [prevLocation] = useState("");
  const { category } = useParams();

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 ">
        <div className="h-full xl:col-span-6  bg-white p-4 rounded-xl flex flex-col items-center ">  
            <SpecialOffers />
          </div>
      </div>
    </div>
  );
};

export default Offer;
