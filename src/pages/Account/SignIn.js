import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
import { Col, Row, message } from "antd";
import { setUserLocalStorage } from "../../constants";
import { logo } from "../../assets/images";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = (email, password) => {

    if (email != "" && password != "") {
      if (email === "admin@gmail.com" && password === "qazwsxedc@123A") {
        const user = {
          usEmail: email,
          usPassword: password,
          avatar: logo,
        }
        setUserLocalStorage("loginUser", user)
        navigate("/")
      } else {
        message.warning("Mật khẩu hoặc tên đăng nhập không đúng!");
      }
    } else {
      message.warning("Vui lòng nhập email và mật khẩu!");
    }
  }


  return (
    <div  className=" flex flex-col  bg-gray-100  max-[450px]:bg-white  ">
      <Header />
      <div className=" col-start-1 space-y-4 mx-auto  bg-white p-6 my-20 rounded-3xl max-[450px]:w-[95%] h-1/6 w-1/2 ">
        <h1 className="text-center text-xl font-semibold ">ĐĂNG NHẬP NGƯỜI DÙNG </h1>
        <p className="text-center">Bạn chưa có tài khoản, đăng ký &nbsp;
          <Link to="/signup">
            <span className="text-red-500 hover:text-red-400">tại đây</span>

          </Link>
        </p>
        <form class="mx-auto">
          <div class="relative">
            <div class="absolute inset inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
              </svg>
            </div>
            <input
              onChange={(e) => { setEmail(e.target.value) }}
              type="text" id="email-address-icon"
              class="bg-gray-50 border px-10 border-gray-300 text-gray-900 text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email" />
          </div>
        </form>

        <form class=" mx-auto">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
              </svg>
            </div>
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type="password" id="email-address-icon"
              class="bg-gray-50 border px-10 border-gray-300 text-gray-900 text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mật khẩu" />
          </div>
        </form>
        <div class="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="ms-2 max-[450px]:text-base text-xl font-medium text-gray-900 dark:text-gray-300">Nhớ mật khẩu</label>
        </div>
        <div className="text-center">
          <div >
            <button onClick={() => login(email, password)} type="button" class="max-w-lg max-[450px]:w-[100%] py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Đăng nhập</button>
          </div>
          <Link to="/forgetpassword">
            <p className="text-blue-500"><i>Quên mật khẩu</i></p>

          </Link>

          <p>Hoặc đăng nhập bằng</p>
          <Row gutter={16}>
            <Col span={12}>
              <button type="button" class="text-white   bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
               Đăng nhập bằng Facebook
              </button>
            </Col>

            <Col span={12}>
              <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                </svg>
                Đăng nhập bằng Google
              </button>
            </Col>

          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
