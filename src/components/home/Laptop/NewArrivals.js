import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  headerLaptop,
  laptop1,
  laptop2,
  laptop3,
  laptop4,
  laptop5,
  laptop6,
  newArrOne,
} from "../../../assets/images/index";
import { Button, Col, Row } from "antd";

const Laptop = () => {

  return (
    <div className="w-full bg-white rounded-lg   pb-16">
      <Heading heading="Laptop" />
      <Row className="grid grid-cols-7 max-[450px]:grid-cols-6  gap-4 " >
        <div className=" p-4 col-span-3 rounded-xl flex flex-col items-start max-[450px]:hidden ">
          <img className="h-[100%] rounded-xl " src={headerLaptop}></img>
        </div>
        <div className="p-4 col-span-4 max-[450px]:col-span-6 rounded-xl flex flex-col items-center ">
          <div className="grid grid-cols-3 max-[450px]:grid-cols-2 gap-8">
            <div >
              <Product
                _id="100001"
                img={laptop1}
                productName="Laptop gaming Lenovo LOQ 15IAX9"
                price={18990000}
                priceOriginal={20490000}
                inStock={true}
                type="Laptop"
                prCode="MSP"
                stars={5}
                sale={7}
                badge={true}
                brand="Lenovo"
                des="Laptop siuuu rẻ"
                configuration={[
                  {
                    id: "pr_1",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_2",
                    select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 21890000
                  },
                  {
                    id: "pr_3",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_4",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  }
                ]}
              />
            </div>

            <div >
              <Product
                _id="100002"
                img={laptop2}
                productName="Laptop gaming ASUS TUF F15"
                price={19490000}
                prCode="MSP"
                priceOriginal={20000000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                configuration={[
                  {
                    id: "pr_1",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_2",
                    select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 21890000
                  },
                  {
                    id: "pr_3",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_4",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  }
                ]}
                inStock={true}
              />
            </div>

            <div >
              <Product
                _id="100003"
                img={laptop3}
                prCode="MSP"
                productName="Laptop gaming ASUS ROG G14"
                price={54900000}
                priceOriginal={52990000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                configuration={[
                  {
                    id: "pr_1",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_2",
                    select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 21890000
                  },
                  {
                    id: "pr_3",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_4",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  }
                ]}
                inStock={true}
              />
            </div>
            <div >
              <Product
                _id="100004"
                img={laptop4}
                prCode="MSP"
                productName="Laptop Lenovo V14 G4 IRU"
                price={10790000}
                priceOriginal={11990000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                configuration={[
                  {
                    id: "pr_1",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_2",
                    select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 21890000
                  },
                  {
                    id: "pr_3",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_4",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  }
                ]}
                inStock={true}
              />
            </div>

            <div className="max-[450px]:hidden">
              <Product
                _id="100005"
                img={laptop5}
                prCode="MSP"
                productName="Laptop Asus VivoBook 14"
                price={13790000}
                priceOriginal={17990000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                configuration={[
                  {
                    id: "pr_1",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_2",
                    select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 21890000
                  },
                  {
                    id: "pr_3",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_4",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  }
                ]}
                inStock={true}
              />
            </div>

            <div className="max-[450px]:hidden">
              <Product
                _id="100005"
                img={laptop6}
                prCode="MSP"
                productName="Laptop gaming ASUS ROG Strix G16"
                price={49890000}
                priceOriginal={52990000}
                color="Gray"
                brand="Gigabyte"
                badge={false}
                stars={4}
                sale={7}
                des="Laptop siuuu rẻ"
                configuration={[
                  {
                    id: "pr_1",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_2",
                    select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 21890000
                  },
                  {
                    id: "pr_3",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  },
                  {
                    id: "pr_4",
                    select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
                    priceSelect: 18990000
                  }
                ]}
                inStock={true}
              />
            </div>

          </div>


        </div>
      </Row>
      <Row justify={"center"}>
        <Button className="text-2xl h-1/2  font-semibold border-2 text-white bg-red-600 hover:bg-red-500 max-[450px]:text-base max-[450px]:text-white max-[450px]:border-none border-black">Xem tất cả {">>"}</Button>
      </Row>
    </div>
  );
};

export default Laptop;
