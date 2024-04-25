import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import InformationDelivery from "./InformationDelivery";
import ItemCard from "../Cart/ItemCard";
import { useSelector } from "react-redux";
import { formatNumber } from "../../constants";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";
const Payment = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [nhanhang, setNhanHang] = useState(false);
  const [momo, setMoMo] = useState(false);
  const [vnPay, setVNPAY] = useState(false);
  const [qr, setQr] = useState(false);
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
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

  const chooseNhanHang = () => {
    setNhanHang(!nhanhang);
    setMoMo(false)
    setVNPAY(false)
    setQr(false)
  }
  const chooseMOMO = () => {
    setMoMo(!momo);
    setNhanHang(false)
    setVNPAY(false)
    setQr(false)
  }
  const chooseVNPAY = () => {
    setVNPAY(!vnPay);
    setMoMo(false)
    setNhanHang(false)
    setQr(false)
  }
  const chooseQR = () => {
    setQr(!qr);
    setMoMo(false)
    setVNPAY(false)
    setNhanHang(false)
  }
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs prevLocation={"Giỏ hàng"} title="Thanh toán" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 ">
        <div className="h-full xl:col-span-3  bg-white p-4 rounded-xl">
          <InformationDelivery />
        </div>
        <div className="h-full xl:col-span-3   bg-white p-4 rounded-xl">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Sản phẩm</h2>
            <h2>Giá tiền</h2>
            <h2>Số lượng</h2>
            <h2>Tổng tiền</h2>
          </div>
          <p className="text-base hidden max-[450px]:text-sm max-[450px]:block font-semibold ">Giỏ hàng</p>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} payment={true} />
              </div>
            ))}
          </div>
          <hr />
          <div>
            <p className="flex items-center justify-between max-[450px]:text-[10px]   py-1.5 text-lg px-4 font-medium">
              Phí vận chuyển
              <span className="font-semibold tracking-wide font-titleFont">
                {formatNumber(shippingCharge)}
              </span>
            </p>
            <p className="flex items-center justify-between  max-[450px]:text-[10px]  py-1.5 text-lg px-4 font-medium">
              Tổng tiền hàng
              <span className="font-semibold tracking-wide font-titleFont">
                {formatNumber(totalAmt + shippingCharge)}
              </span>
            </p>
          </div>
          <h1 className="text-2xl max-[450px]:text-base">*Phương thức thanh toán</h1>
          <div className="flex flex-col items-center ">
            <div className="flex align-middle w-[410px]">
              <input type="radio" value={"a"} className="mt-5 mr-2" /><div onClick={chooseNhanHang} className={`text-2xl max-[450px]:text-sm max-[450px]:w-[80%] max-[450px]:h-[30px] text-center rounded-md leading-[3rem] w-full border border-slate-800 ${nhanhang == true ? "bg-red-600 text-white" : "bg-white"} hover:bg-red-600 hover:text-white h-1/3`}  >Thanh toán khi nhận hàng</div> <br /></div>
            <div className="flex align-middle w-[410px] mt-3">
              <input type="radio" value={"a"} className="mt-5 mr-2" /><div onClick={chooseMOMO} className={`text-2xl max-[450px]:text-sm max-[450px]:w-[80%] max-[450px]:h-[30px] text-center rounded-md leading-[3rem] w-full border border-slate-800 ${momo == true ? "bg-red-600 text-white" : "bg-white"} hover:bg-red-600 hover:text-white h-1/3`} >Thanh toán qua ví điện tử Momo</div><br />
            </div>
            <div className="flex align-middle w-[410px] mt-3">
              <input type="radio" value={"a"} className="mt-5 mr-2"/><div onClick={chooseVNPAY} className={`text-2xl max-[450px]:text-sm max-[450px]:w-[80%] max-[450px]:h-[30px] text-center rounded-md leading-[3rem] w-full border border-slate-800 ${vnPay == true ? "bg-red-600 text-white" : "bg-white"} hover:bg-red-600 hover:text-white h-1/3`}>Thanh toán qua ví điện tử VNPAY</div><br />
            </div>
            <div className="flex align-middle w-[410px] mt-3 mb-3">
              <input type="radio" value={"a"} className="mt-5 mr-2" /><div onClick={chooseQR} className={`text-2xl max-[450px]:text-sm max-[450px]:w-[80%] max-[450px]:h-[30px] text-center rounded-md leading-[3rem] w-full border border-slate-800 ${qr == true ? "bg-red-600 text-white" : "bg-white"} hover:bg-red-600 hover:text-white h-1/3`}>Quét QR bằng ứng dụng ngân hàng</div><br />
            </div>

            <Link to="/paymentQR">
              <button className="w-52 h-11 font-medium rounded-xl bg-red-700 text-white hover:bg-black duration-300">
                Thanh toán
              </button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;
