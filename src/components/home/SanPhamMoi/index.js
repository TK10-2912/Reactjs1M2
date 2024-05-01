import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { keyboard5, keyboard6, laptop4, laptop5, laptop6 } from "../../../assets/images";
import { Button, Row } from "antd";


const SanPhamMoi = () => {
    return (
        <div className="my-8 bg-blue-900 ">
            <div className="max-w-container mx-auto px-4 py-4">
                <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 pt-3">
                    <li class="me-2">
                        <a href="#" class="inline-block px-4 py-3 max-[450px]:text-sm text-xl text-yellow-300 rounded-lg active" aria-current="page">Sản phẩm mới</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block px-4 py-3 max-[450px]:text-sm text-xl text-white rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-yellow-300">Bán chạy</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block px-4 py-3 max-[450px]:text-sm  text-xl text-white rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-yellow-300">Khuyến mãi</a>
                    </li>
                </ul>
                <div className="grid grid-cols-5 max-[450px]:grid-cols-2 gap-8 mb-2">
                    <div className="bg-white rounded-xl">
                        <Product
                            _id="100004"
                            img={laptop4}
                            prCode="MSP"
                            productName="Laptop Lenovo V14 G4 IRU"
                            price={10790000}
                            priceOriginal={11990000}
                            color="Gray"
                            type="Laptop"
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
                    <div className="bg-white rounded-xl">
                        <Product
                            _id="100005"
                            img={laptop5}
                            type="Laptop"
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
                    <div className="bg-white rounded-xl max-[450px]:hidden">
                        <Product
                            _id="100005"
                            type="Laptop"
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
                    <div className="bg-white rounded-xl max-[450px]:hidden">
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

                    <div className="bg-white rounded-xl max-[450px]:hidden">
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
                </div>
                <Row justify={"center"}>
                    <Button className="text-2xl h-1/2  font-semibold text-white bg-red-600 hover:bg-red-500 max-[450px]:text-base max-[450px]:text-white border-none  ">Xem tất cả {">>"}</Button>
                </Row>
            </div>

        </div>
    )
}
export default SanPhamMoi;
