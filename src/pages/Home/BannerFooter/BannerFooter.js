import { Col, Row } from "antd";
import React from "react";
import { bannerFooter1, bannerFooter2 } from "../../../assets/images";
const BannerFooter = () => {

    return (
        <div className="w-full  mt-5 mb-5 h-full rounded-lg pb-16">
            <Row className="grid grid-cols-6 gap-8">
                <div className="col-span-3 max-[450px]:col-span-6 ">
                    <img className="rounded-xl " src={bannerFooter1} />
                </div>
                <div className="col-span-3  max-[450px]:hidden">
                    <img className="rounded-xl" src={bannerFooter2} />
                </div>
            </Row>
        </div>
    );
};

export default BannerFooter;
