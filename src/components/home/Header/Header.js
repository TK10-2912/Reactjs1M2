import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaMap } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserLocalStorage, paginationItems, removeUserLocalStorage } from "../../../constants";
import { BsSuitHeartFill } from "react-icons/bs";
import { logo, logoHeader, screen1 } from "../../../assets/images";

const Header = () => {
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

  const checkUser = getUserLocalStorage("loginUser")
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
    <div className="w-full bg-[#d0021b] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col max-[450px]:items-center max-[450px]:flex-row lg:flex-row items-start lg:items-center justify-between w-full px-4 max-[450px]:px-1 pb-4  max-[450px]:py-2  lg:pb-0 h-full lg:h-24">
          <Link to="/">
            <img src={logoHeader} class="h-[100px] max-[450px]:h-[50px] p-[10px]" alt="Flowbite Logo" />
          </Link>

          <div className="relative w-full  max-[450px]:h-[35px]   max-[450px]:w-[200px] lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full  max-[450px]:w-full  outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] border-none"
              type="text"
              // onChange={handleSearch}
              // value={searchQuery}
              placeholder="Tìm kiếm sản phẩm của bạn tại đây"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">
                          {item.des.length > 100
                            ? `${item.des.slice(0, 100)}...`
                            : item.des}
                        </p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <FaMap style={{ color: "white" }} className="text-xl mr-5  max-[450px]:hidden" />
            <BsSuitHeartFill className="text-2xl mr-5  max-[450px]:hidden" style={{ color: "white" }} />


            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-2xl" color="white" />
                {products.length > 0 ? (
                  <span className="absolute font-titleFont top-3 right-[-0.5rem] text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                    {products.length}
                  </span>
                ) : null}
              </div>
            </Link>
            <div onClick={() => setShowUser(true)}
              className="flex mr-5">
              {checkUser != undefined && checkUser != null ?
                <img className="w-7 rounded-full " src={screen1}></img> : <FaUser className="text-white text-[20px]" style={{ color: "white" }} />
              }

            </div>
            {showUser && (
              <div onClick={() => setShowUser(false)} className="fixed inset-0 z-40"></div>
            )}
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                {checkUser != undefined && checkUser != null ? "" :
                  <>
                    <Link to="/signin">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Đăng nhập
                      </li>
                    </Link>
                    <Link onClick={() => setShowUser(false)} to="/signup">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Đăng ký
                      </li>
                    </Link>
                  </>
                }

                {checkUser != undefined && checkUser != null ?
                  <>
                    <Link to="/account">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Tài khoản
                      </li>
                    </Link>
                    <Link onClick={() => removeUserLocalStorage("loginUser")} to="/">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Đăng xuất
                      </li>
                    </Link></> : ""
                }

              </motion.ul>
            )}
          </div>
        </Flex>
      </div >
    </div >
  );
};

export default Header;
