import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { anhmaQR } from "../../assets/images";
import { Link } from "react-router-dom";
const PaymentQR = () => {
    return (<>
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs prevLocation={"Giỏ hàng"} title="Thanh toán" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 ">
                <div className="h-full xl:col-span-6  bg-gray-100 p-4 rounded-xl flex flex-col items-center ">
                    <p className="font-semibold text-2xl">Quét mã QR dưới đây bằng ứng dụng MOMO để thanh toán</p>
                    <img className="w-1/3" src={anhmaQR}></img>
                    <p className=" text-2xl">Lưu ý: Mã QR này sẽ hết hạn sau 24h kể từ lúc tạo</p>
                    <p className="text-2xl">Số hóa đơn: 2386713489</p>
                    <p className=" text-2xl">Sau khi thanh toán, hãy nhấp vào nút bên dưới </p>
                    <Link to="/paymentSuccess">
                        <button className=" px-2 w-full text-2xl h-11 font-medium rounded-xl bg-red-600 text-white hover:bg-black duration-300">
                            Tôi đã hoàn tất thanh toán trên App
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    </>)
}
export default PaymentQR;