import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  headerKeyBoard,
  keyboard1,
  keyboard2,
  keyboard3,
  keyboard4,
  keyboard5,
  keyboard6,

  
} from "../../../assets/images/index";
import { Button, Col, Row } from "antd";

const Keyboard = () => {

  return (
    <div className="w-full bg-white mt-5 h-full rounded-lg  pb-16">
      <Heading heading="Bàn Phím" />
      <Row >
        <Col span={10} className=" p-4 rounded-xl flex flex-col items-center ">
          <img className="h-full" src={headerKeyBoard}></img>
        </Col>
        <Col span={14} className="h-full p-4 rounded-xl flex flex-col items-center ">
          <Row gutter={32} className="mb-8">
            <Col span={8}>
              <Product
                _id="100001"
                img={keyboard1}
                productName="Bàn phím cơ AKKO 3108 RF World Tour"
                price={1490000}
                priceOriginal={1990000}
                inStock={true}
                type="Laptop"
                prCode="MSIGS66STEALTH"
                stars={5}
                sale={7}
                badge={true}
                brand="Lenovo"
                des="Laptop siuuu rẻ"
              />
            </Col>
            <Col span={8}>
              <Product
                _id="100002"
                img={keyboard2}
                productName="Bàn phím Cidoo Không dây ABM084"
                price={1890000}
                priceOriginal={2090000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                inStock={true}
              />
            </Col>
            <Col span={8}><Product
              _id="100003"
              img={keyboard3}
              productName="Bàn phím Cidoo Không dây V87 Pro"
              price={3190000}
              priceOriginal={3490000}
              color="Gray"
              brand="Gigabyte"
              badge={false}
              stars={4}
              sale={7}
              des="Laptop siuuu rẻ"
              inStock={true}
            /></Col>
          </Row>
          <Row gutter={32} className="mb-8">
            <Col span={8}>
              <Product
                _id="100004"
                img={keyboard4}
                productName="Bàn phím Leopold FC750RBT"
                price={1690000}
                priceOriginal={3390000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                inStock={true}
              />
            </Col>
            <Col span={8}>
              <Product
                _id="100005"
                img={keyboard5}
                productName="Bàn phím Corsair K65 Plus "
                price={590000}
                priceOriginal={990000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                inStock={true}
              /></Col>
            <Col span={8}>
              <Product
                _id="100005"
                img={keyboard6}
                productName="Bàn phím FL-FL980 SAM"
                price={590000}
                priceOriginal={990000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                inStock={true}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Button className="text-2xl h-1/2">Xem tất cả {">>"}</Button>
      </Row>
    </div>
  );
};

export default Keyboard;
