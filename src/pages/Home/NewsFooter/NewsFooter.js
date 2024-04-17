import { Col, Row } from "antd";
import React from "react";
import { bannerFooter1, bannerFooter2, newsFooter3, newsMain2, newsMain3, newsTech1 } from "../../../assets/images";
import Heading from "../../../components/home/Products/Heading";
import { Link } from "react-router-dom";
const NewsFooter = () => {

    return (
        <div className="w-full  mb-5 bg-white h-full rounded-lg ">
            <Heading heading="Tin tức" />
            <Row gutter={16} className="px-5">
                <Col span={8}>
                    <img className="rounded-xl" src={newsMain3} />
                    <p className="text-xl font-semibold">Disney cho ra mắt HoloTile liệu đây sẽ là cánh cửa mới để vực dậy cho Game thực tế ảo (VR) ?</p>
                </Col>
                <Col span={8}>
                    <img className="rounded-xl" src={newsMain2} />
                    <p className="text-xl font-semibold">Game NFT là gì ? Cách kiếm tiền từ game NFT - Xu hướng game 2024</p>
                </Col>
                <Col span={8}>
                    <img className="rounded-xl h-[77%] w-full" src={newsFooter3} />
                    <p className="text-xl font-semibold">Highlights MWC 2024: Tương lai là ưu tiên hàng đầu</p>
                </Col>
            </Row>
            <Row justify={"end"}>
                <Link to="/news">
                    <p className="text-xl font-medium">Xem thêm {`>>`} </p>
                </Link>
            </Row>
        </div>
    );
};

export default NewsFooter;
