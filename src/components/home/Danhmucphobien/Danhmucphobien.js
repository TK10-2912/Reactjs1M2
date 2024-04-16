import React from "react";
import { Button, Col, Row } from "antd";
import { chuot, keyboard1, laptop1, screen1, tainghe } from "../../../assets/images";
import Heading from "../Products/Heading";

const Danhmucphobien = () => {
    return(
        <div className="w-full bg-white rounded-lg  h-full mb-5  pb-16">
            <Heading heading="Danh mục phổ biến" />
            <Row justify={"space-around"}>
                <Col span={4} className="rounded-xl border ">
                    <img  className="rounded-xl" src={laptop1}/>
                    <p className="text-2xl font-normal text-center">Laptop</p>
                </Col>
                <Col span={4} className="rounded-xl border ">
                    <img  className="rounded-xl" src={screen1}/>
                    <p className="text-2xl font-normal text-center">Màn hình</p>
                </Col>
                <Col span={4} className="rounded-xl border ">
                    <img  className="rounded-xl h-[232px] w-full" src={keyboard1}/>
                    <p className="text-2xl font-normal text-center">Bàn phím</p>
                </Col>
                <Col span={4} className="rounded-xl border ">
                    <img  className="rounded-xl" src={chuot}/>
                    <p className="text-2xl font-normal text-center">Chuột</p>
                </Col>
                <Col span={4} className="rounded-xl border ">
                    <img  className="rounded-xl" src={tainghe}/>
                    <p className="text-2xl font-normal text-center">Tai nghe</p>
                </Col>
            </Row>
        </div>
    )
}
export default Danhmucphobien;