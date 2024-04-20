import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { Checkbox, Col, Rate, Row, Select, Tag } from "antd";
import { cssColResponsiveSpan, formatNumber } from "../../../constants";
import {
	pig,
	promis,
	ship,
	win,
} from "../../../assets/images/index";
import ThongSoKyThuat from "./ThongSoKyThuat";
const ProductInfo = ({ productInfo }) => {
	console.log("sản phẩm", productInfo);
	const highlightStyle = {
		color: "#d0121a",
		fontWeight: "bold",
	};


	const dispatch = useDispatch();

	return (
			<div className="flex flex-col gap-5">
				<h2 className="text-4xl max-[450px]:text-xl font-semibold">{productInfo.productName}</h2>
				<hr />
				<p>Tình trạng: {productInfo.inStock == true ? <Tag color="green">Còn hàng</Tag> : <Tag color="red">Hết hàng</Tag>}</p>
				<hr />
				<span>
					<Rate className="text-sm" disabled={true} value={productInfo.stars} />
					<a href="#" className="text-sm"> Xem đánh giá</a>
				</span>
				<hr />
				<Row align={"middle"}>
					<Col {...cssColResponsiveSpan(7, 12, 12, 12, 12, 12)} >
						<h2 className="text-[25px] text-red-600 font-semibold max-[450px]:text-base max-[450px]:text-center">{formatNumber(productInfo.price)}</h2>
					</Col>
					<Col {...cssColResponsiveSpan(7, 6, 6, 6, 6, 6)} className="flex justify-end max-[450px]:justify-start">
						<strike ><h2 className="text-[25px] max-[450px]:text-base ">{formatNumber(productInfo.priceOriginal)}</h2></strike>
					</Col>
					&nbsp; &nbsp; &nbsp;
					<Tag color="red" style={{ height: 22 }}>{productInfo.sale}%</Tag>
				</Row>
				<Row>
					<Col  {...cssColResponsiveSpan(7, 8, 8, 8, 8, 8)} span={8} className="text-[18px] border-r  border-black max-[450px]:text-[10px] max-[450px]:text-center">
						<span className="font-semibold">Thương hiệu:</span> <span style={{ color: "red" }}>{productInfo.brand}</span>
					</Col>

					<Col {...cssColResponsiveSpan(7, 8, 8, 8, 8, 8)} span={8} className="text-[18px] text-center border-r  border-black max-[450px]:text-[10px]">
						<span className="font-semibold">Loại</span>: <span style={{ color: "red" }}>{productInfo.type}</span>
					</Col>
					<Col className="text-[18px]  max-[450px]:text-[10px]">
						<span className="font-semibold">MSP</span>: <span style={{ color: "red" }}>{productInfo.prCode}</span>
					</Col>
				</Row>

				<Row gutter={10} className=" justify-evenly">
					{productInfo.configuration !== undefined &&
						productInfo.configuration.map(item => (
							<Col {...cssColResponsiveSpan(10, 11, 11, 11, 11, 11)} className="rounded-lg  m-2 p-3" offset={item.id % 2 === 0 ? 2 : 0} style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", background: "#FFFFFF" }} key={"pr_" + item.id}>
								<Checkbox className="text-[16px] font-semibold max-[450px]:text-[10px]" value={item.id}>{item.select1}</Checkbox>
								<p className="text-sm text-center font-bold text-red-700 max-[450px]:text-[10px]" >{formatNumber(Number(item.priceSelect))}</p>
							</Col>
						))}
				</Row>
				<div className="grid grid-cols-2 gap-3">
					<div className="col-span-2">
						<button
							onClick={() =>
								dispatch(
									addToCart({
										_id: productInfo.id,
										name: productInfo.productName,
										quantity: 1,
										image: productInfo.img,
										badge: productInfo.badge,
										price: productInfo.price,
										colors: productInfo.color,
									})
								)
							}
							className=" py-4 w-full max-[450px]:text-base max-[450px]:bg-yellow-400  max-[450px]:hover:bg-yellow-300 bg-blue-500  hover:bg-blue-600 duration-300 text-white text-lg font-titleFont rounded-md"
						>
							Thêm vào giỏ hàng
							
						</button>
					</div>
					<div>
						<button
							className=" py-4 max-[450px]: p-2 max-[450px]:bg-red-700 w-full max-[450px]:text-base bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont rounded-md"
						>
							Mua ngay
							<p className="text-[8px]">Giao tận nơi hoặc nhận tại shop</p>
							
						</button>
					</div>
					<div>
						<button
							className=" py-4 max-[450px]: p-2 w-full max-[450px]:text-base bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont rounded-md"
						>
							Trả góp qua thẻ
							<p className="text-[8px]">Visa, Master, JCB</p>
						</button>
					</div>

				</div>
				<div className="rounded-lg bg-white " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
					<h1 style={{ textAlign: "center", color: "white", lineHeight: 2, borderTopRightRadius: 6, borderTopLeftRadius: 6, background: "#D0011A" }}>Yên tâm khi mua hàng tại SKY GEAR</h1>
					<div style={{ fontSize: 14, fontWeight: "bold" }} className="p-4">
						<Row style={{ alignItems: "center" }}><img style={{ width: '2.2rem' }} src={promis} />Bảo hành chính hãng</Row>
						<Row style={{ alignItems: "center" }}><img style={{ width: '2.2rem' }} src={win}></img>Windows bản quyền tích hợp</Row>
						<Row style={{ alignItems: "center" }}><img style={{ width: '2.2rem' }} src={ship}></img>Miễn phí giao hàng toàn quốc</Row>
						<Row style={{ alignItems: "center" }}><img style={{ width: '2.2rem' }} src={pig}></img>Hỗ trợ trả góp</Row>
					</div>
				</div>
			</div>
	);
};

export default ProductInfo;