import React, { useState, useRef, useEffect } from "react";
import { paginationItems } from "../../../constants";
import Breadcrumbs from "../../pageProps/Breadcrumbs";

const Instruction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs prevLocation={"Trang chủ"} title="Hướng dẫn" />
        <div className="w-full h-[490px] bg-white mb-5 text-primeColor lg:flex flex-col justify-center px-6 text-lg font-titleFont font-semibold rounded-lg ">
          <div className="flex flex-col items-center max-[450px]:pt-3">
            <h2 className="text-5xl font-bold italic mb-4 max-[450px]:text-2xl ">Câu hỏi thường gặp</h2>
          </div>
          <div className="flex flex-col ml-4">
            <a className="text-lg my-4 max-[450px]:text-base " style={{ fontSize: '19px' }}>
              Làm thế nào để mua hàng?
            </a>
            <hr className="mb-4" />
            <a className="text-lg my-4 max-[450px]:text-base " style={{ fontSize: '19px' }}>
              Các phương thức thanh toán?
            </a>
            <hr className="mb-4" />
          </div>
          <div className="flex flex-col ml-4  max-[450px]:text-base">
            <a className="text-lg my-4" style={{ fontSize: '18px' }}>
              Chính sách đổi trả?
            </a>
            <hr className="mb-4" />
            <a className="text-lg my-4  max-[450px]:text-base" style={{ fontSize: '18px' }}>
              Chính sách hậu mãi?
            </a>
            <hr className="mb-4" />
          </div>
        </div>
    </div>
  );
};

export default Instruction;
