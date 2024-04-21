import React, { useEffect, useState } from "react";
import { SlUser } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Col, Row } from "antd";

import { FaKey } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import ItemCard from "../Cart/ItemCard";
const Account = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    const [thongtincanhan, setThongtincanhan] = useState(true)
    const [acount, setAcount] = useState(false)
    const [address, setAddress] = useState(false)
    const [bill, setBill] = useState(false)
    const dispatch = useDispatch();
    const products = useSelector((state) => state.orebiReducer.products);
    const [totalAmt, setTotalAmt] = useState("");
    const [shippingCharge, setShippingCharge] = useState("");
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

    const changeThongtin = () => {
        setThongtincanhan(true);
        setAcount(false);
        setAddress(false);
        setBill(false);
    }
    const changeAcount = () => {
        setThongtincanhan(false);
        setAcount(true);
        setAddress(false);
        setBill(false);
    }
    const changeAddress = () => {
        setThongtincanhan(false);
        setAcount(false);
        setAddress(true);
        setBill(false);
    }
    const changeBill = () => {
        setThongtincanhan(false);
        setAcount(false);
        setAddress(false);
        setBill(true);
    }

    return (

        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="" prevLocation={prevLocation} />
            <Row className="grid grid-cols-4 gap-8 sml:px-9 max-[450px]:grid-cols-1  max-[450px]:gap-0">

                {/* Cột bên trái*/}
                <div className=" col-span-1 lg:w-auto h-fit bg-white rounded-lg shadow-lg mb-4 lg:mb-0">
                    {/* Danh sách các mục */}
                    <div className=" max-[450px]:hidden">
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => scrollToContent('thong-tin-ca-nhan')}>
                            <span className="material-icons mr-2"><SlUser /></span>
                            <span className="uppercase">Thông tin cá nhân</span>
                        </div>
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => scrollToContent('tai-khoan')}>
                            <span className="material-icons mr-2"><FaKey /></span>
                            <span className="uppercase">Tài khoản và bảo mật</span>
                        </div>
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => scrollToContent('dia-chi')}>
                            <span className="material-icons mr-2"><MdLocationOn /></span>
                            <span className="uppercase">Địa chỉ</span>
                        </div>
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => scrollToContent('don-mua')}>
                            <span className="material-icons mr-2"><FaWallet />
                            </span>
                            <span className="uppercase">Đơn mua</span>
                        </div>
                    </div>

                    {/* Man hinh 450px */}
                    <div className="  bg-white rounded-lg hidden max-[450px]:block">
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => changeThongtin()}>
                            <span className="material-icons mr-2"><SlUser /></span>
                            <span className="uppercase max-[450px]:text-xs">Thông tin cá nhân</span>
                        </div>
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => changeAcount()}>
                            <span className="material-icons mr-2"><FaKey /></span>
                            <span className="uppercase max-[450px]:text-xs" >Tài khoản và bảo mật</span>
                        </div>
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => changeAddress()}>
                            <span className="material-icons mr-2"><MdLocationOn /></span>
                            <span className="uppercase max-[450px]:text-xs">Địa chỉ</span>
                        </div>
                        <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-red-600 flex items-center" onClick={() => changeBill()}>
                            <span className="material-icons mr-2"><FaWallet />
                            </span>
                            <span className="uppercase max-[450px]:text-xs">Đơn mua</span>
                        </div>
                    </div>
                </div>

                {/* Cột bên phải */}
                <div className="w-full col-span-3 lg:w-3/4 ">
                    {/* Nội dung tương ứng với từng mục */}
                    <div id="thong-tin-ca-nhan" className={`py-4  ${thongtincanhan == false ? "max-[450px]:hidden" : " max-[450px]:block"} block max-[450px]: px-8 bg-white rounded-lg shadow-lg mb-4`}>
                        <div className="text-center text-2xl font-bold max-[450px]:text-sm mb-4 uppercase">Thông tin cá nhân</div>
                        <div>

                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col w-1/4 ">
                                <span className="border-b-2 border-white mb-4 ">Họ:</span>
                                <span className="border-b-2 border-white mb-4">Tên:</span>
                                <span className="border-b-2 border-white mb-4">Email:</span>
                                <span className="border-b-2 border-white mb-4">Số điện thoại:</span>
                                <span className="border-b-2 border-white mb-4">Ngày sinh:</span>
                                <span className="border-b-2 border-white mb-4">Giới tính:</span>
                            </div>
                            <div className="flex flex-col w-3/4 gap-x-8">
                                <div className="ml-2 border-b-2 border-black mb-4 flex justify-between">
                                    <span>Lê</span>
                                    <IoIosArrowForward />
                                </div>
                                <div className="ml-2 border-b-2 border-black mb-4 flex justify-between">
                                    <span>Quang Đạt</span>
                                    <IoIosArrowForward />
                                </div>
                                <div className="ml-2 border-b-2 border-black mb-4 flex justify-between">
                                    <span>ledat1st@gmail.com</span>
                                    <IoIosArrowForward />
                                </div>
                                <div className="ml-2 border-b-2 border-black mb-4 flex justify-between">
                                    <span>0857929125</span>
                                    <IoIosArrowForward />
                                </div>
                                <div className="ml-2 border-b-2 border-black mb-4 flex justify-between">
                                    <span>08/07/2001</span>
                                    <IoIosArrowForward />
                                </div>
                                <div className="ml-2 border-b-2 border-black max-[450px]:mt-4 flex justify-between">
                                    <span className="italic font-light">Thiết lập ngay</span>
                                    <IoIosArrowForward />
                                </div>

                            </div>
                        </div>

                        {/* Thêm thông tin cá nhân khác tại đây */}
                    </div>
                    <div id="tai-khoan" className={`py-4 px-8 ${acount == false ? "max-[450px]:hidden" : " max-[450px]:block"} block bg-white rounded-lg shadow-lg mb-4`}>
                        <div className="text-center text-2xl font-bold mb-4 max-[450px]:text-sm uppercase">Tài khoản và bảo mật</div>
                        <div>

                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col w-1/4 max-[450px]:w-1/3 max-[450px]:mt-2 ">
                                <span className="border-b-2 border-white mb-4 max-[450px]:text-xs">Tên người dùng:</span>

                            </div>
                            <div className="flex flex-col w-3/4 gap-x-8 max-[450px]:w-2/3 ">
                                <div className="ml-2 border-b-2 border-black mb-4 flex justify-between">
                                    <span>Lê Đạt</span>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-2xl font-bold mb-4 max-[450px]:text-sm uppercase">Đổi mật khẩu</div>
                        <form className="space-y-4 flex flex-col justify-end">
                            <input
                                type="password"
                                placeholder="Mật khẩu hiện tại"
                                className="border border-gray-300 rounded-full px-4 py-2 w-full"
                            />
                            <input
                                type="password"
                                placeholder="Mật khẩu mới"
                                className="border border-gray-300 rounded-full px-4 py-2 w-full"
                            />
                            <input
                                type="password"
                                placeholder="Xác nhận mật khẩu mới"
                                className="border border-gray-300 rounded-full px-4 py-2 w-full"
                            />
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-red-600 h-8 rounded-full w-1/4 text-white"
                                >
                                    Lưu thay đổi
                                </button>
                            </div>
                        </form>
                    </div>
                    <div id="dia-chi" className={`py-4 px-8 ${address == false ? "max-[450px]:hidden" : " max-[450px]:block"} block bg-white rounded-lg shadow-lg mb-4`}>
                        <div className="text-center text-2xl font-bold mb-4 max-[450px]:text-sm uppercase">Địa chỉ</div>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="max-[450px]:hidden text-black mb-3 border-solid border-slate-400 border-[3px] hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-2 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">Địa chỉ 1<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        <textarea
                            className="border border-gray-400 px-4 py-2 rounded-md w-full resize-none mb-3"
                            rows="4"
                            placeholder="Địa chỉ"
                        ></textarea>
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
                    </div>
                    <div id="don-mua" className={`py-4 px-8 ${bill == false ? "max-[450px]:hidden" : " max-[450px]:block"} block bg-white rounded-lg shadow-lg mb-4`}>
                        <div className="text-center text-2xl font-bold mb-4 max-[450px]:text-sm uppercase">Đơn mua</div>
                        <Col span={24} style={{ border: "1px solid black" }} className='rounded-2xl'>
                            <div className="p-4">
                                {products.map((item) => (
                                    <div key={item._id}>
                                        <div className="flex col-span-5 mdl:col-span-3  items-center gap-4 ml-4 justify-between border-b-2 mt-1 border-black">
                                            <img className="w-32 h-32 text-base " src={item.image} alt={item.name} />
                                            <div className="flex flex-col">
                                                <div className="font-titleFont font-bold max-[450px]:text-xs">{item.name}</div>
                                                <div className="rounded-lg bg-slate-300 max-[450px]:text-xs shadow-lg max-[450px]:w-full w-1/2 p-1">
                                                    Core i5-12450HX, 12GB, 512GB,  RTX 3050 6GB, 15.6" FHD 144Hz
                                                </div>
                                            </div>
                                            <p className="my-4"> X{item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div class="md:flex md:justify-between m-2 " style={{ borderTop: '1px solid black' }}>
                                <div>
                                    <div class="mb-2 md:mb-0 text-base max-[450px]:text-xs ">Thành tiền:
                                        &nbsp;
                                        <span className="text-red-700 ">
                                            {Intl.NumberFormat('vi-VN').format(totalAmt)}<u>đ</u>
                                        </span>
                                    </div>
                                    <div class="mb-2 md:mb-0 text-base max-[450px]:text-xs " >Phương thức thanh toán: Thanh toán qua ví điện tử Momo</div>
                                    <div className=" text-base max-[450px]:text-xs ">
                                        Tình trạng:
                                        &nbsp;
                                        <span className="text-green-600">
                                            Đã giao hàng
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Row justify={"space-between"}>
                                <button className="m-2 border-2 border-yellow-300 text-yellow-300 rounded-md p-2 max-[450px]:text-sm text-base">
                                    Đánh giá ngay
                                </button>
                                <button className="m-2 bg-blue-500 text-white rounded-md p-2 max-[450px]:text-sm text-base">
                                   Chi tiết đơn hàng
                                </button>
                            </Row>

                        </Col>
                    </div>
                </div>
            </Row>
        </div >
    );
    function scrollToContent(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

};

export default Account;
