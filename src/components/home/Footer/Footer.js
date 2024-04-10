import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, FacebookOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full bg-[#000000] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <div className="flex flex-col gap-6 items-center">
            <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://s3-alpha-sig.figma.com/img/5831/43e1/2df7503cd78572d094c3be47ad5f2c09?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZd9eFjxj7nB0nqrc3u6Z2Q~FLddPtpIIf6-eJBXQA2dInj2JqU2FCN3bOYYYGfSu8aIjIDDJT~3J8e0~EkrjKmMCAlGGgsZnvX-5n3q59j3NylzKdZLAQCrBu2kaukCl4frXi21FIHuqQPaQsA5Om3DvtjJcCfefk2X4sWESvhoLDFT8HXF6rgodwisQo5~ksH-IeQ2j-X~g0IN4ypnxEADIT2uVknmz6Jnh9rio8pVhk2ndc0GeqFlEvbn74BqvZrHsfMaIFFhnTHrCFAu6pijYy031afXpPpAnvutALSWd5N4RSLIqyReI2HOCqocoEMeIOuNX3gBP9tdZqDtfw__" class="h-20" alt="Flowbite Logo" />
            </a>
            <FooterListTitle title="Sky Gear - No Tech No Life" />
            <h3 className="text-xl font-bodyFont font-semibold mb-2 text-white">{"Liên hệ"}</h3>
            <ul className="flex flex-col gap-2">
              <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                <EnvironmentOutlined />  100 Bạch Mai, quận Hai Bà Trưng,
                thành phố Hà Nội
              </li>
              <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                <PhoneOutlined /> 0857929124
              </li>
              <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                <MailOutlined /> Skygear@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Chính sách" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Điều khoản và điều kiện
            </li>
            <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Chính sách đổi trả
            </li>
            <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Chính sách bảo mật
            </li>
            <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Chính sách giao hàng
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Hướng dẫn" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Hướng dẫn mua hàng
            </li>
            <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Phương thức thanh toán
            </li>
            <li className="font-titleFont text-base text-white hover:text-red-600 text  hover:tracking-wide decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Hướng dẫn trả góp
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-left w-full px-4">
          <FooterListTitle title="Đăng ký nhận tin" />
          <div className="w-full">
            <p className="text-center mb-4">
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-white text-lg placeholder:text-base outline-none border-t-0 border-l-0 border-r-0"
                    type="text"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-12 hover:bg-red-600 hover:text-white duration-300 text-base  hover:tracking-wide"
                >
                  ĐĂNG KÝ
                </button>
              </div>
            )}
            <div className="mb-4">
              <ul className="flex items-center gap-2">
                <a
                  href="https://www.youtube.com/@reactjsBD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-red-600 duration-300">
                    <FaYoutube />
                  </li>
                </a>
                <a
                  href="https://github.com/noorjsdivs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-red-600 duration-300">
                    <FaGithub />
                  </li>
                </a>
                <a
                  href="https://www.facebook.com/Noorlalu143/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-red-600 duration-300">
                    <FaFacebook />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-red-600 duration-300">
                    <FaLinkedin />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
