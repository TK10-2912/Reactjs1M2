import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

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
				<form className="pb-20 px-10 flex gap-10">
				
					<div class="relative overflow-hidden px-10  bg-white rounded-lg shadow-lg flex-1">
						<div class="absolute inset-0 bg-gradient-to-r"></div>
						<div class="relative px-4 py-10 text-center">
							<h1 class="text-3xl font-semibold ">Chăm sóc khách hàng</h1>
							<p class="mt-4 text-lg">Hotline: 0857929124</p>
							<p class="mt-1 text-lg">Email: ledat1st@gmail.com</p>
						</div>
						<div class="relative px-4">
							<p class="mt-1 text-lg">Địa chỉ: 100 Bạch Mai, Hai Bà Trưng, Hà Nội</p>
							<p class="mt-1 text-lg">Tik tok: @skygear</p>
							<p class="mt-1 text-lg">Facebook: SKY Gear</p>
						</div>
						<div class="relative px-4 py-10 text-center">
							<p class="mt-1 text-2xl font-semibold">Quản trị viên</p>
							<p class="mt-1 text-lg font-semibold">Lê Quang Đạt - 1910A04</p>
							<p class="mt-1 text-lg font-semibold">Hoàng Duy - 1910A04</p>
						</div>
					</div>


					<div className="w-[500px] shadow-lg px-10 h-auto py-6 flex flex-col gap-6 flex-1">
						<div className="flex justify-between">

								<input
									onChange={handleName}
									value={clientName}
									className=" py-1 rounded-full border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
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
									className="rounded-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
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
								className="w-full rounded-xl py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
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
			)}
		</div>
	);
};

export default Contact;
