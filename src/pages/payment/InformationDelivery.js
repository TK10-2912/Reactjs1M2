import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const InformationDelivery = () => {
    return (
        <>

            <p className="text-xl">Thông tin vận chuyển </p>
            <i className="text-base">Bạn đã có tài khoản? <a href="#" className="text-blue-500">Đăng nhập ngay</a> để tự động điền địa chỉ.</i>

            <form class="max-w-md" autocomplete="off">
                <div class="mb-5">
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="DN">Văn phòng</option>
                        <option value="ND">Nhà riêng</option>
                    </select>
                </div>
                <div class="mb-5">
                    <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Họ và tên" required />
                </div>

                <div class="mb-5">
                    <input type="text" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email" required />
                </div>
                <div class="mb-5">
                    <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Điện thoại" required />
                </div>
                <div class="flex items-start mb-5">
                    <textarea type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Địa chỉ" required />
                </div>
                <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                    <Col span={8}>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Chọn tỉnh/ thành</option>
                            <option value="HN">Hà Nội</option>
                            <option value="TB">Thái Bình</option>
                            <option value="HD">Hải Dương</option>
                            <option value="DN">Đà Nẵng</option>
                            <option value="ND">Nam Định</option>
                        </select>
                    </Col>
                    <Col span={8}>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Chọn quận/ huyện</option>
                            <option value="HN">Hà Nội</option>
                            <option value="TB">Thái Bình</option>
                            <option value="HD">Hải Dương</option>
                            <option value="DN">Đà Nẵng</option>
                            <option value="ND">Nam Định</option>
                        </select>
                    </Col>
                    <Col span={8}>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Chọn phường/ xã</option>
                            <option value="HN">Hà Nội</option>
                            <option value="TB">Thái Bình</option>
                            <option value="HD">Hải Dương</option>
                            <option value="DN">Đà Nẵng</option>
                            <option value="ND">Nam Định</option>
                        </select>
                    </Col>
                </Row>
                <div class="flex items-start mb-5">
                    <textarea type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ghi chú" required />
                </div>
            </form>
            <Link to="/cart"><p className="text-blue-700 hover:text-red-600   " >{`<< Quay lại giỏ hàng`}</p></Link>
        </>)
}
export default InformationDelivery