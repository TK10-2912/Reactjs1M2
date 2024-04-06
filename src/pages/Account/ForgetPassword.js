import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer"; import { Button, Col, Row, message } from "antd";
;

const ForgetPasswords = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const submitEmail = (email) => {
        if (email == "admin@gmail.com") {
            navigate("/signup")
        }
        if (email == "") {
            message.warning("Hãy nhập trường email");
        }
        if(email != "" && email != "admin@gmail.com")
        {
            message.error("Email không đúng !");

        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div className=" col-start-1 space-y-4 mx-auto bg-gray-200 p-6 my-20 rounded-3xl h-1/6 w-1/2 ">
                <h1 className="text-center text-xl font-semibold ">Tìm lại mật khẩu</h1>
                <form class="mx-auto">
                    <div class="relative">
                        <div class="absolute inset inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text" id="email-address-icon"
                            onChange={(e) => setEmail(e.target.value)}
                            class="bg-gray-50 border px-10 border-gray-300 text-gray-900 text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email" />
                    </div>
                </form>
                <div className="flex justify-center ">

                    <Button onClick={() => submitEmail(email)} className="text-white w-[175px] text-xl h-1/5 mr-8 bg-red-600 hover:text-red-400">Gửi</Button>
                    <Link to="/signin">
                        <Button className="text-white text-xl h-full  w-[175px]  bg-red-600 hover:text-red-400">Quay lại</Button>

                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ForgetPasswords;
