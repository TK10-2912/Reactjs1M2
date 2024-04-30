import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { BsSuitHeartFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from '@fortawesome/fontawesome-svg-core';

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
      <div class="flex flex-wrap justify-between items-center mx-auto max-w w-[1440px] p-4">
        <div onClick={() => setShow(!show)} ref={ref} className="flex h-8 max-[450px]:h-6 cursor-pointer items-center gap-2 text-primeColor">
          <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>

          <p className=" max-[450px]:text-sm font-normal text-white whitespace-nowrap tracking-wider">Danh mục sản phẩm</p>
          {show && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-36 z-50 bg-white w-auto text-[#767676] h-auto p-4 pb-6"
            >
              <Link to={"category/laptop"}>
                <li className="text-gray-400 justify-between px-4 py-1 max-[450px]:text-sm hover:bg-slate-500 hover:text-white inline  duration-300 cursor-pointer">
                  Laptop
                </li>
              </Link>
              <Link to={"category/manhinh"}>
                <li className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:bg-slate-500 hover:text-white  duration-300 cursor-pointer">
                  Màn hình
                </li>
              </Link>
              <Link to={"category/banphim"}>
                <li className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:bg-slate-500 hover:text-white  duration-300 cursor-pointer">
                  Bàn phím
                </li>
              </Link>
              <Link to={"category/manhinh"}>
                <li className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:bg-slate-500 hover:text-white  duration-300 cursor-pointer">
                  Chuột
                </li>
              </Link>
              <Link to={"category/laptop"}>
                <li className="text-gray-400 px-4 py-1  max-[450px]:text-sm hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
                  Tai nghe
                </li>
              </Link>
              <div className="hidden max-[450px]:block">
                <Link to="/shop">
                  <p className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:bg-slate-500 hover:text-white font-semibold  duration-300 cursor-pointer">Sản phẩm</p>
                </Link>
                <Link to="/introduction">
                  <p className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:bg-slate-500  hover:text-white font-semibold duration-300 cursor-pointer">Giới thiệu</p>
                </Link>
                <Link to="/contact">
                  <p className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:bg-slate-500 hover:text-white font-semibold duration-300 cursor-pointer">Liên hệ</p>
                </Link>

                <Link to="/news">
                  <p className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:bg-slate-500  hover:text-white font-semibold duration-300 cursor-pointer">Tin tức</p>
                </Link>
                <Link to="/instruction">
                  <p className="text-gray-400 px-4 py-1 max-[450px]:text-sm hover:text-white duration-300 cursor-pointer">Hướng dẫn</p>
                </Link>
              </div>

            </motion.ul>
          )}
        </div>
        <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <Link to="/shop">
              <p className="text-white hover:text-red-600">Sản phẩm</p>
            </Link>
            <Link to="/introduction">
              <p className="text-white hover:text-red-600">Giới thiệu</p>
            </Link>
            <Link to="/contact">
              <p className="text-white hover:text-red-600">Liên hệ</p>
            </Link>

            <Link to="/news">
              <p className="text-white hover:text-red-600">Tin tức</p>
            </Link>
            <Link to="/instruction">
              <p className="text-white hover:text-red-600">Hướng dẫn</p>
            </Link>

          </ul>
        </div>
      </div>
    </nav>

  );
};

export default HeaderBottom;
