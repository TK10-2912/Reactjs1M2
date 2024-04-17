import { Col, Row } from "antd";
import React from "react";
import { bannerFooter1, bannerFooter2 } from "../../../assets/images";
const BannerFooter = () => {

    return (
        <div className="w-full  mt-5 mb-5 h-full rounded-lg pb-16">
            <Row gutter={32}>
                <Col span={12}>
                    <img className="rounded-xl" src={bannerFooter1} />
                </Col>
                <Col span={12}>
                    <img className="rounded-xl" src={bannerFooter2} />
                </Col>
            </Row>
        </div>
    );
};

export default BannerFooter;
