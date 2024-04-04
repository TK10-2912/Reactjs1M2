import React from "react";
import { Link } from "react-router-dom";
import {
	saleImgOne,
	saleImgTwo,
	saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Banner from "../../Banner/Banner";
import { Carousel, Col, Row } from "antd";

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
			<Col span={16}>
				<Carousel style={{ height: "100%" }} autoplay >
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={saleImgThree}
							/>
						</Link></h3>
					</div>
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={saleImgThree}
							/>
						</Link></h3>
					</div>
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={saleImgThree}
							/>
						</Link></h3>
					</div>
					<div>
						<h3 style={contentStyle}> <Link to="/shop">
							<Image
								className="h-full w-full "
								imgSrc={saleImgThree}
							/>
						</Link></h3>
					</div>
				</Carousel>
			</Col>
			<Col span={8}>
				<Col span={24} style={{ marginBottom: "10px" }}>
					<Link to="/shop">
						<Image
							className="h-full w-full "
							imgSrc={saleImgThree}
						/>
					</Link>
				</Col>
				<Col span={24}>
					<Link to="/shop">
						<Image
							className="h-full w-full "
							imgSrc={saleImgThree}
						/>
					</Link>
				</Col>
			</Col>
		</Row>
	);
};

export default Sale;
