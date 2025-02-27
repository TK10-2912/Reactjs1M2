import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { Col, Row } from "antd";
import { formatNumber } from "../../constants";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    console.log("aaa", products);
    let price = 0;
    products.map((item) => {
      const piceSale = item.price - (item.price * item.sale) / 100;
      price += piceSale * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Giỏ hàng" />
      {products.length > 0 ? (
        <Row className="mb-5 grid grid-cols-3">
          <div className="bg-white col-span-2 max-[450px]:col-span-3 rounded-lg">
            <div className=" w-full h-20 bg-white text-primeColor   hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
              <h2 className="col-span-2">Sản phẩm</h2>
              <h2>Giá tiền</h2>
              <h2>Số lượng</h2>
              <h2>Tổng tiền</h2>
            </div>
            <div className="mt-5">
              {products.map((item) => (
                <div key={item._id}>
                  <ItemCard item={item} payment={false} />
                </div>
              ))}
            </div>

            <button
              onClick={() => dispatch(resetCart())}
              className="py-2 px-10  max-[450px]:ml-2 rounded-xl bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
            >
              Reset cart
            </button>
          </div>


          <div className="col-span-1 max-[450px]:col-span-3 ">
            <div class="block max-w-7xl gap-4 justify-end p-6 max-[450px]:mx-0 max-[450px]:mt-4 bg-white border mx-5 rounded-lg ">
              <div className="w-96 flex flex-col gap-4">
                <h1 className="text-2xl max-[450px]:text-sm font-semibold border-b-2 border-x-stone-800">Tóm tắt đơn hàng</h1>
                <div>
                  <p className="flex items-center justify-between  max-[450px]:justify-start max-[450px]:text-[10px] py-1.5 text-lg px-4 font-medium">
                    Tổng tiền hàng:
                    <span className="font-semibold tracking-wide  max-[450px]:ml-3 font-titleFont">
                      {formatNumber(totalAmt)}
                    </span>
                  </p>
                  <p className="flex items-center justify-between max-[450px]:justify-start max-[450px]:text-[10px]   py-1.5 text-lg px-4 font-medium">
                    Phí vận chuyển:
                    <span className="font-semibold tracking-wide max-[450px]:ml-3 font-titleFont">
                      {formatNumber(shippingCharge)}
                    </span>
                  </p>
                  <p className="flex items-center border-b-2 max-[450px]:justify-start max-[450px]:text-[10px] border-x-stone-800 justify-between  py-1.5 text-lg px-4 font-medium">
                    Tổng tạm tính:
                    <span className="font-bold tracking-wide text-lg text-red-700 max-[450px]:ml-3 font-titleFont">
                      {formatNumber(totalAmt + shippingCharge)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-96 flex flex-col gap-4">
                <h1 className="text-xl font-semibold max-[450px]:text-sm">Vocher</h1>
                <div>

                  <form>
                    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                      <input type="search" id="search" class="block w-full max-[450px]:w-[90%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập mã giảm giá" required />
                      <button type="submit" class=" text-white absolute end-2.5 max-[450px]:right-[13%] bottom-2.5 bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Áp dụng</button>
                    </div>
                  </form>

                </div>
                <p className="text-base max-[450px]:text-sm font-semibold ">TỔNG THANH TOÁN: <span className="text-red-700">{formatNumber(totalAmt + shippingCharge)}</span></p>
                <div className="flex justify-end  max-[450px]:justify-center ">
                  <button className="w-full h-11 font-medium max-[450px]:text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-5   duration-300">
                    <Link to="/paymentgateway">
                      Tiến hành thanh toán
                    </Link>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </Row>

      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>

        </motion.div>
      )
      }
    </div >
  );
};

export default Cart;
