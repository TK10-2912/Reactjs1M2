import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  newArrOne,
  headerLaptop,
  manhinh,
} from "../../../assets/images/index";
import { Button, Col, Row } from "antd";

const Screen = () => {

  return (
    <div className="w-full bg-white mt-5  h-full rounded-lg pb-16">
      <Heading heading="Màn Hình" />
      <Row >
        <Col span={10} className=" p-4 rounded-xl flex flex-col items-center ">
          <img className="h-full" src={manhinh}></img>
        </Col>
        <Col span={14} className="h-full p-4 rounded-xl flex flex-col items-center ">
          <Row gutter={32} className="mb-8">
            <Col span={8}>
              <Product
                _id="100001"
                img={screen1}
                productName="Màn hình ASUS ROG Strix XG249CM"
                price={7490000}
                priceOriginal={10490000}
                inStock={true}
                type="screen"
                prCode="MSIGS66STEALTH"
                stars={5}
                sale={29}
                badge={true}
                brand="Lenovo"
                des="Màn hình siuuu rẻ"
              />
            </Col>
            <Col span={8}>
              <Product
                _id="100002"
                img={screen2}
                productName="Màn hình LG 22MR410-B 22"
                price={2090000}
                priceOriginal={2490000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={16}
                des="Màn hình siuuu rẻ"
                inStock={true}
              />
            </Col>
            <Col span={8}><Product
              _id="100003"
              img={screen3}
              productName="Màn hình Viewsonic VA2432-H 24"
              price={2190000}
              priceOriginal={4550000}
              color="Gray"
              brand="Gigabyte"
              badge={false}
              stars={4}
              sale={52}
              des="Màn hình siuuu rẻ"
              inStock={true}
            /></Col>
          </Row>
          <Row gutter={32} className="mb-8">
            <Col span={8}>
              <Product
                _id="100004"
                img={screen4}
                productName="Màn hình ViewSonic VX2428J 24"
                price={3390000}
                priceOriginal={4490000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={24}
                des="Màn hình siuuu rẻ"
                inStock={true}
              />
            </Col>
            <Col span={8}>
              <Product
                _id="100005"
                img={screen5}
                productName="Màn hình AOC 24G4E 24"
                price={3390000}
                priceOriginal={3590000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={6}
                des="Màn hình siuuu rẻ"
                inStock={true}
              /></Col>
            <Col span={8}>
              <Product
                _id="100005"
                img={screen6}
                productName="Màn hình MSI PRO MP275 27"
                price={2890000}
                priceOriginal={3390000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Màn hình siuuu rẻ"
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

export default Screen;
