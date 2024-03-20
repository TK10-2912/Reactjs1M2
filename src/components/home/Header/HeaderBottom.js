import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { BsSuitHeartFill } from "react-icons/bs";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

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


    <nav class="bg-black border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div onClick={() => setShow(!show)} ref={ref} className="flex h-14 cursor-pointer items-center gap-2 text-primeColor">
          <HiOutlineMenuAlt4 className="w-5 h-5" style={{ color: "white" }} />
          <p className="text-[14px] font-normal text-white whitespace-nowrap tracking-wider">Danh mục sản phẩm</p>
          {show && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
            >
              <Link to={"category/imprimante"}>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Imprimante
                </li>
              </Link>
              <Link to={"category/ancre"}>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  ancre
                </li>
              </Link>
              <Link to={"category/Ruban"}>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  ruban
                </li>
              </Link>
              <Link to={"category/Bac"}>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Bac de dechet
                </li>
              </Link>
            </motion.ul>
          )}
        </div>
        <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="#" class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 whitespace-nowrap tracking-wider" aria-current="page">Giới thiệu</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 whitespace-nowrap tracking-wider" aria-current="page">Liên hệ</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 whitespace-nowrap tracking-wider" aria-current="page">Chính sách bảo hành</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 whitespace-nowrap tracking-wider" aria-current="page">Hướng dẫn</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default HeaderBottom;
