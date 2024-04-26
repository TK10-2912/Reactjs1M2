import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { Col, Row } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

const Contact = () => {
	const location = useLocation();
	const [prevLocation, setPrevLocation] = useState("");
	// useEffect(() => {
	//   setPrevLocation(location.state.data);
	// }, [location]);

	const [clientName, setclientName] = useState("");
	const [email, setEmail] = useState("");
	const [messages, setMessages] = useState("");

	// ========== Error Messages Start here ============
	const [errClientName, setErrClientName] = useState("");
	const [errEmail, setErrEmail] = useState("");
	const [errMessages, setErrMessages] = useState("");
	// ========== Error Messages End here ==============
	const [successMsg, setSuccessMsg] = useState("");

	const handleName = (e) => {
		setclientName(e.target.value);
		setErrClientName("");
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setErrEmail("");
	};
	const handleMessages = (e) => {
		setMessages(e.target.value);
		setErrMessages("");
	};

	// ================= Email Validation start here =============
	const EmailValidation = (email) => {
		return String(email)
			.toLowerCase()
			.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
	};
	// ================= Email Validation End here ===============

	const handlePost = (e) => {
		e.preventDefault();
		if (!clientName) {
			setErrClientName("Enter your Name");
		}
		if (!email) {
			setErrEmail("Enter your Email");
		} else {
			if (!EmailValidation(email)) {
				setErrEmail("Enter a Valid Email");
			}
		}
		if (!messages) {
			setErrMessages("Enter your Messages");
		}
		if (clientName && email && EmailValidation(email) && messages) {
			setSuccessMsg(
				`Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
			);
		}
	};

	return (
		<div className="max-w-container mx-auto px-4">
			<Breadcrumbs title="Liên hệ" prevLocation={prevLocation} />
			{successMsg ? (
				<p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
			) : (
				<div className="flex mb-8 max-[450px]:flex-col ">
					<Row  className="flex-col mr-8 justify-evenly gap-3 w-[50%] bg-white rounded-xl max-[450px]:w-[100%] max-[450px]:mb-5 ">
						<Col className="text-center ">
							<h1 class="text-3xl font-semibold max-[450px]:text-base">Chăm sóc khách hàng</h1>
							<p class="mt-4 text-lg max-[450px]:text-sm">Hotline: 0857929124</p>
							<p class="mt-1 text-lg max-[450px]:text-sm">Email: ledat1st@gmail.com</p>
						</Col>
						<Col className="ml-[20%] ">
							<p class="mt-1 text-lg max-[450px]:text-sm">Địa chỉ: 100 Bạch Mai, Hai Bà Trưng, Hà Nội</p>
							<p class="mt-1 text-lg max-[450px]:text-sm">Tik tok: @skygear</p>
							<p class="mt-1 text-lg max-[450px]:text-sm">Facebook: SKY Gear</p>
						</Col>
						<Col className="text-center ">
							<p class="mt-1 text-2xl max-[450px]:text-base font-semibold">Quản trị viên</p>
							<p class="mt-1 text-lg max-[450px]:text-sm font-semibold">Lê Quang Đạt - 1910A04</p>
							<p class="mt-1 text-lg max-[450px]:text-sm font-semibold">Hoàng Duy - 1910A04</p>
						</Col>
					</Row>
					<form className="flex  w-[50%] max-[450px]:w-[100%]  ">
						<div className=" shadow-lg px-10 bg-white h-auto py-6 flex flex-col gap-6 flex-1 rounded-xl">
							<div class="px-4 py-10 max-[450px]:py-0 text-center">
								<h1 class="text-3xl font-semibold max-[450px]:text-base">Liên hệ chúng tôi</h1>
							</div>
							<div className="flex justify-between max-[450px]:flex-col gap-2 ">

								<input
									onChange={handleName}
									value={clientName}
									className="xl:w-1/2 py-1 max-[450px]:w-full max-[450px]:mb-3 rounded-full border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
									type="text"
									placeholder="Họ tên"
								/>
								{errClientName && (
									<p className="text-red-500 text-sm  font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
										<span className="text-sm italic font-bold">!</span>
										{errClientName}
									</p>
								)}

								<input
									onChange={handleEmail}
									value={email}
									className="xl:w-1/2 max-[450px]:w-full rounded-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
									type="email"
									placeholder="Email"
								/>
								{errEmail && (
									<p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
										<span className="text-sm italic font-bold">!</span>
										{errEmail}
									</p>
								)}

							</div>

							<div>
								<textarea
									onChange={handleMessages}
									value={messages}
									cols="30"
									rows="10"
									className="w-full  rounded-xl py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
									type="text"
									placeholder="Nhập tin nhắn..."
								></textarea>
								{errMessages && (
									<p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
										<span className="text-sm italic font-bold">!</span>
										{errMessages}
									</p>
								)}
							</div>
							<button
								onClick={handlePost}
								className="w-21 bg-red-700 rounded-2xl text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
							>
								Gửi
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default Contact;
