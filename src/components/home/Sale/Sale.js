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
		<Row style={{ marginTop: "10px", marginBottom: "10px" }}   gutter={[8, 8]}>
			<Col {...cssColResponsiveSpan(24,16,16,16,16,16)} span={16} className="rounded-xl">
				<Carousel style={{ height: "100%", }} className="max-[450px]:h-[300px] max-[450px]:w-[100%] " autoplay >
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full  "
								imgSrc={slide1}
							/>
						</Link></h3>
					</div>
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={slide2}
							/>
						</Link></h3>
					</div>
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={slide3}
							/>
						</Link></h3>
					</div>
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={slide4}
							/>
						</Link></h3>
					</div>
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={slide7}
							/>
						</Link></h3>
					</div>
				</Carousel>
			</Col>
			<Col {...cssColResponsiveSpan(24,8,8,8,8,8)} span={8} className="rounded-xl">
				<Col span={24} style={{ marginBottom: "10px" }}>
					<Link to="/shop">
						<Image
							className="h-full w-full "
							imgSrc={slide5}
						/>
					</Link>
				</Col>
				<Col span={24}>
					<Link to="/shop">
						<Image
							className="h-full w-full "
							imgSrc={slide6}
						/>
					</Link>
				</Col>
			</Col>
		</Row>
	);
};

export default Sale;
