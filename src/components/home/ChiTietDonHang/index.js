import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Breadcrumbs from "../../pageProps/Breadcrumbs";
import { useSelector } from "react-redux";
import { formatNumber } from "../../../constants";

const ChiTietDonHang = () => {
    const products = useSelector((state) => state.orebiReducer.products);
    const [totalAmt, setTotalAmt] = useState("");
    useEffect(() => {
        let price = 0;
        products.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price);
    }, [products]);

    return (
        <div className="max-w-screen-lgl mx-auto">
            <Breadcrumbs prevLocation={"Giỏ hàng"} title="Chi tiết đơn hàng" />
            <div className=" mx-auto px-4 bg-white py-5 mb-4" >

                <p className="text-center text-3xl font-medium mb-2">Chi tiết đơn hàng </p>
                <div className="grid grid-cols-2 gap-3 w-[75%] m-auto">
                    <p className=" text-lg max-[450px]:text-sm font-medium">Mã đơn hàng:</p> <p className="text-center text-lg max-[450px]:text-sm font-medium">342LHJASHDJAAW</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Số hóa đơn:</p> <p className="text-center text-lg max-[450px]:text-sm font-medium">2386713489</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Tình trạng đơn hàng:</p> <p className="text-center text-green-400">Đơn hàng đã hoàn thành</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Phương thức thanh toán:</p> <p className="text-center text-lg max-[450px]:text-sm font-medium">MOMO QR code</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Thời gian đặt hàng:</p> <p className="text-center text-lg max-[450px]:text-sm font-medium">15:09 22-03-2024</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Thời gian thanh toán:</p> <p className="text-center text-lg max-[450px]:text-sm font-medium">15:10 22-03-2024</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Thời gian giao hàng cho vận chuyển:</p> <p className="text-center max-[450px]:text-sm font-medium text-base">07:32 23-03-2024</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Thời gian hoàn thành:</p> <p className="text-center max-[450px]:text-sm font-medium text-base">17:35 24-03-2024</p>
                </div>
                <br />
                <div className="w-[75%] m-auto">
                    <p className=" text-xl max-[450px]:text-sm font-medium">Địa chỉ nhận hàng</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Lê Quang Đạt</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">0857982126</p>
                    <p className=" text-lg max-[450px]:text-sm font-medium">Số 34 ngách 44 ngõ 124 Bạch Mai, phường Bạch Mai.  quận Hai Bà Trưng, Hà Nội</p>
                    <div id="don-mua" className={`py-4 px-8  block bg-white rounded-lg shadow-lg mb-4`}>
                        <div className="text-center text-2xl font-bold mb-4 max-[450px]:text-sm uppercase">Đơn mua</div>
                        <Col span={24} >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div key={item._id}>
                                        <div className="flex col-span-5 mdl:col-span-3  items-center gap-4 ml-4 justify-between border-b mt-1k border-black">
                                            <img className="w-32 h-32 text-base " src={item.image} alt={item.name} />
                                            <div className="flex flex-col">
                                                <div className="font-titleFont font-bold max-[450px]:text-xs">{item.name}</div>
                                                <div className="rounded-lg bg-slate-200 max-[450px]:text-xs shadow-lg max-[450px]:w-full w-1/2 p-1">
                                                    Core i5-12450HX, 12GB, 512GB,  RTX 3050 6GB, 15.6" FHD 144Hz
                                                </div>
                                            </div>
                                            <p className="my-4"> X{item.quantity}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </Col>
                        <div className="grid grid-cols-2 gap-3 ">
                            <p className="text-lg max-[450px]:text-sm font-medium">Thành tiền:</p>
                            <p className="text-lg max-[450px]:text-sm font-medium text-right text-red-500">{formatNumber(totalAmt)}</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default ChiTietDonHang;