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
import { Button, Row } from "antd";

const Keyboard = () => {

  return (
    <div className="w-full bg-white mt-5  rounded-lg  pb-16">
      <Heading heading="Bàn Phím" />
      <Row className="grid grid-cols-7 max-[450px]:grid-cols-6 gap-4 ">
        <div className=" p-4 col-span-3 max-[450px]:hidden rounded-xl flex flex-div items-start ">
          <img className="h-[100%] rounded-xl" src={headerKeyBoard}></img>
        </div>
        <div className="p-4 col-span-4 max-[450px]:col-span-6 rounded-xl flex flex-div items-center ">
          <div className="grid grid-cols-3 max-[450px]:grid-cols-2 gap-8">
            <div >
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
                des="Bàn phím siuuu rẻ"
                configuration={[
                  { id:"pr_1",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_2",
                    select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:21890000
                  },
                  {
                    id:"pr_3",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_4",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  }
                ]}
              />
            </div>
            <div >
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
                des="Bàn phím siuuu rẻ"
                configuration={[
                  { id:"pr_1",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_2",
                    select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:21890000
                  },
                  {
                    id:"pr_3",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_4",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  }
                ]}
                inStock={true}
              />
            </div>
            <div >
              <Product
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
                des="Bàn phím siuuu rẻ"
                inStock={true}
                configuration={[
                  { id:"pr_1",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_2",
                    select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:21890000
                  },
                  {
                    id:"pr_3",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_4",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  }
                ]}
              /></div>

            <div >
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
                des="Bàn phím siuuu rẻ"
                inStock={true}
                configuration={[
                  { id:"pr_1",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_2",
                    select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:21890000
                  },
                  {
                    id:"pr_3",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_4",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  }
                ]}
              />
            </div>
            <div className="max-[450px]:hidden" >
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
                des="Bàn phím siuuu rẻ"
                inStock={true}
                configuration={[
                  { id:"pr_1",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_2",
                    select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:21890000
                  },
                  {
                    id:"pr_3",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_4",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  }
                ]}
              /></div>
            <div className="max-[450px]:hidden">
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
                des="Bàn phím siuuu rẻ"
                inStock={true}
                configuration={[
                  { id:"pr_1",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_2",
                    select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:21890000
                  },
                  {
                    id:"pr_3",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  },
                  {
                    id:"pr_4",
                    select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect:18990000
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </Row>
      <Row justify={"center"}>
        <Button className="text-2xl h-1/2 font-semibold text-white border-2 max-[450px]:text-base  bg-red-600 hover:bg-red-500 max-[450px]:text-white max-[450px]:border-none border-black">Xem tất cả {">>"}</Button>
      </Row>
    </div>
  );
};

export default Keyboard;
