import React from "react";
import { SplOfferData } from "../../../constants";
import { Button, Col, Rate, Row } from "antd";

const DanhGia = (productInfo) => {
    console.log("hiihihih",productInfo);
    return (
        <>
            <div className="max-w-full overflow-x-auto bg-white rounded-xl">
                <Row>
                    <Col span={5}></Col>
                    <Col span={14}>
                        <div >
                            <p className="font-semibold text-xl text-center my-4">ĐÁNH GIÁ SẢN PHẨM LAPTOP {productInfo.productName}</p>
                            <span className="font-semibold text-xl">
                                ĐÁNH GIÁ CỦA BẠN VỀ SẢN PHẨM
                                <Rate disabled={true} value={5} />
                            </span>
                        </div>


                        <form>
                            <input className="text-base leading-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 my-4" placeholder="Nhập họ tên của bạn"></input>
                            <input className="text-base leading-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 my-4"  placeholder="Nhập email của bạn"></input>
                            <textarea className="text-base leading-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 my-4"  placeholder="Nhập đánh giá của bạn"></textarea>
                            <Row justify={"end"}>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gửi đánh giá</button>
                            </Row>
                        </form>
                    </Col>
                    <Col span={5}></Col>
                </Row>



            </div>
        </>
    )
}
export default DanhGia;