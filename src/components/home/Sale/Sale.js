import React from "react";
import { Link } from "react-router-dom";
import {
	saleImgOne,
	saleImgTwo,
	saleImgThree,
	slide1,
	slide2,
	slide3,
	slide4,
	slide5,
	slide6,
	slide7,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Banner from "../../Banner/Banner";
import { Carousel, Col, Row } from "antd";
import { cssColResponsiveSpan } from "../../../constants";

const Sale = () => {
	const contentStyle = {
		height: '444px',
		color: '#fff',
		// lineHeight: '160px',
		textAlign: 'center',
		border: "none",
		borderRadius: "50%",
	};
	return (
		<Row style={{ marginTop: "10px", marginBottom: "10px" }} gutter={[8, 8]}>
			<Col {...cssColResponsiveSpan(24, 16, 16, 16, 16, 16)} span={16} className="rounded-xl  max-[450px]:h-[150px]">
				<Carousel style={{ height: "100%" }} className=" max-[450px]:h-[150px]" autoplay >
					<div className=" max-[450px]:h-[150px]">
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full  max-[450px]:h-[150px] "
								imgSrc={slide1}
							/>
						</Link></h3>
					</div>
					<div className=" max-[450px]:h-[150px]">
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full  max-[450px]:h-[150px]"
								imgSrc={slide2}
							/>
						</Link></h3>
					</div>
					<div className=" max-[450px]:h-[150px]">
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full  max-[450px]:h-[150px]"
								imgSrc={slide3}
							/>
						</Link></h3>
					</div >
					<div className=" max-[450px]:h-[150px]">
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full max-[450px]:h-[150px] "
								imgSrc={slide4}
							/>
						</Link></h3>
					</div>
					<div className=" max-[450px]:h-[150px]">
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full max-[450px]:h-[150px]"
								imgSrc={slide7}
							/>
						</Link></h3>
					</div>
				</Carousel>
			</Col>
			<Col {...cssColResponsiveSpan(24, 8, 8, 8, 8, 8)} className="rounded-xl max-[450px]:flex ">
				<Col className="max-[450px]:mb-0">
						<img
							className="h-full w-full "
							src={slide5}
						/>
				</Col>
				<Col >

						<img
							className="h-full w-full "
							src={slide6}
						/>
				</Col>
			</Col>
		</Row>
	);
};

export default Sale;
