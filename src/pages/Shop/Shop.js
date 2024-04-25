import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(48);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Sản phẩm" />
      {/* ================= Products Start here =================== */}
      <div className="max-w-container mx-auto px-4 flex justify-center bg-white rounded-xl py-[15px]">
        <div className="w-full  h-full flex flex-col gap-10">
          <SpecialOffers />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
