import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { anhmaQR, tickSuccess } from "../../assets/images";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { formatNumber } from "../../constants";
const PaymentSuccess = () => {
    const products = useSelector((state) => state.orebiReducer.products);
    const [totalAmt, setTotalAmt] = useState("");
    const [shippingCharge, setShippingCharge] = useState("");
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    useEffect(() => {
        let price = 0;
        products.map((item) => {
            price += item.price * item.quantity;
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
    return (<>
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs prevLocation={"Giỏ hàng"} title="Thanh toán" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 ">
                <div className="h-full xl:col-span-6  bg-white 0 p-4 rounded-xl flex flex-col items-center ">

                    <img className="w-1/12" src={tickSuccess}></img>
                    <p className="font-medium text-2xl max-[450px]:text-base">Giao dịch thành công</p>
                    <p className=" text-lg max-[450px]:text-sm">Cảm ơn vì đã tin tưởng đặt hàng</p>
                    <p className=" text-lg max-[450px]:text-sm">SKY Gear sẽ chuẩn bị đơn hàng cho bạn ngay</p>
                    <p className=" text-lg max-[450px]:text-sm">Bạn sẽ sớm nhận được email thông báo</p>
                    <p className="font-medium text-center text-xl w-full  max-[450px]:text-base max-[450px]:text-left  my-5 ">Thông tin hóa đơn</p>
                    <form className="w-1/3 max-[450px]:w-full mb-4">
                        <Row className="border-b border-b-slate-500">
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50">Mã đơn hàng:</Col>
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50 text-right">342LHJYGKSHJKD</Col>
                        </Row>
                        <Row className="border-b border-b-slate-500">
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50">Thành tiền: </Col>
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50 text-right"> {formatNumber(totalAmt + shippingCharge)}</Col>
                        </Row>
                        <Row className="border-b border-b-slate-500">
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50">Phương thức thanh toán: </Col>
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50 text-right">MOMO QR Code</Col>
                        </Row>
                        <Row className="border-b border-b-slate-500">
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50">Số hóa đơn: </Col>
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50 text-right">2386713489</Col>
                        </Row>
                        <Row className="border-b border-b-slate-500">
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50">Thời gian đặt hàng: </Col>
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50 text-right ">{formattedDate}</Col>
                        </Row>
                        <Row >
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50">Thời gian thanh toán:</Col>
                            <Col span="12" className="text-lg max-[450px]:text-sm font-medium opacity-50 text-right">{formattedDate}</Col>
                        </Row>
                        <Row className="grid grid-cols-2 gap-2 max-[450px]:grid-cols-1 mt-2">
                            <Link to="/chitietdonhang">
                                <button className=" px-2 w-full  max-[450px]:text-sm text-base h-11 font-medium rounded-xl bg-[#1CB246] text-white hover:bg-black duration-300">
                                    Chi tiết đơn hàng
                                </button>
                            </Link>
                            <Link to="/">
                        <button className=" max-[450px]:text-sm w-full text-base h-11 font-medium rounded-xl bg-[#1CB246] text-white hover:bg-black duration-300">
                            Tiếp tục mua hàng -------{">"}
                        </button>
                    </Link>
                        </Row>
                    </form>

                   
                </div>

            </div>
        </div>
    </>)
}
export default PaymentSuccess;
