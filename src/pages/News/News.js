import React, { useEffect, useState } from "react";
import { headerNews, hotNews, hotNews1, newsMain1, newsMain2, newsMain3, newsMain4, newsSale1, newsSale2, newsSale3, newsTech1, newsTech2, newsTech3 } from "../../assets/images";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { Col, Row } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
const News = () => {
    const newHeader = {
        img: headerNews,
        title: "Cách tải game Identity V cực nhanh trên PC mà ai cũng làm được",
        desc: "Trải nghiệm game trên PC ngày càng trở nên phổ biến và hấp dẫn hơn bao giờ hết. Trong bài viết này, chúng ta sẽ cùng nhau khám phá cách tải và cài đặt game Identity V - tựa game kinh dị đầy kịch tính trên máy tính một cách nhanh chóng và dễ dàng. Hãy cùng SKY Gear khám phá cách thức thú vị này ngay sau đây! Identity V là..."
    }
    const hotNews = {
        title: "TIN HOT",
        item: [
            {
                img: hotNews1,
                desc: "Cách sử dụng AI voice acting để tạo âm thanh lồng tiếng cho video"
            },
            {
                img: newsMain4,
                desc: "Cách download game Dragon City cực dễ cho PC, laptop"
            },
            {
                img: newsMain3,
                desc: "Disney cho ra mắt HoloTile liệu đây sẽ là cánh cửa mới để vực dậy cho Game thực tế ảo (VR) ?"
            },
        ]
    };

    const newstechnology = {
        title: "TIN CÔNG NGHỆ",
        item: [
            {
                img: newsTech1,
                desc: "Highlights MWC 2024: Tương lai là ưu tiên hàng đầu"
            },
            {
                img: newsTech2,
                desc: "Hướng dẫn tải Zing MP3 nhanh chóng cho máy tính - Download Zing MP3 PC"
            },
            {
                img: newsTech3,
                desc: "Disney cho ra mắt HoloTile liệu đây sẽ là cánh cửa mới để vực dậy cho Game thực tế ảo (VR) ?"
            },
        ]
    };

    const newsPromotion = {
        title: "TIN KHUYẾN MÃI",
        item: [
            {
                img: newsSale1,
                desc: "Mua Nitro V Tiger - Ngập tràn khuyến mãi"
            },
            {
                img: newsSale2,
                desc: "Đặt trước ROG Zephyrus G14/G16 Oled 2024 - Nhận ngay quà tặng giới hạn"
            },
            {
                img: newsSale3,
                desc: "LENOVO sự kiệnTương lai hiện hữu"
            },
        ]
    };

    const news = [hotNews, newstechnology, newsPromotion];
    const newMain = [
        {
            img: newsMain1,
            title: "Monica ứng dụng AI miễn phí đa dụng Game NFT là gì ? Cách kiếm tiền từ game NFT - Xu hướng game 2024",
            dateUpLoad: "27/03/2024"
        },

        {
            img: newsMain2,
            title: "Game NFT là gì ? Cách kiếm tiền từ game NFT - Xu hướng game 2024",
            dateUpLoad: "26/03/2024"
        },
        {
            img: newsMain3,
            title: "Disney cho ra mắt HoloTile liệu đây sẽ là cánh cửa mới để vực dậy cho Game thực tế ảo (VR) ?",
            dateUpLoad: "25/03/2024"
        },
        {
            img: newsMain4,
            title: "Monica ứng dụng AI miễn phí đa dụng Game NFT là gì ? Cách kiếm tiền từ game NFT - Xu hướng game 2024",
            dateUpLoad: "24/03/2024"
        },
    ]
    return (<>
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs prevLocation={"Trang chủ"} title="Tin tức" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 ">
                <div className="h-full xl:col-span-4  bg-white p-4 rounded-xl flex flex-col items-center ">
                    <Row gutter={16} className="border-b-2 border-gray-900 mb-2" >
                        <Col span={16}><img className="rounded-3xl mb-5" src={newHeader.img}></img></Col>
                        <Col span={8}><div>
                            <h2 className="text-xl font-medium">{newHeader.title}</h2>
                            <p className="font-normal">{newHeader.desc}</p>
                            <a href="#">Xem tiếp {">>>"}</a>
                        </div></Col>
                    </Row>
                    {
                        newMain.map(item => (
                            <Row gutter={16} className="my-3 border-b-2 border-gray-900 mb-2">
                                <Col span={8}>
                                    <img className="rounded-3xl w-full mb-5" src={item.img} alt="anh"></img>
                                </Col>
                                <Col span={16}>
                                    <h2 className="text-lg font-medium">{item.title}</h2>
                                    <p>{item.dateUpLoad}</p>
                                </Col>
                            </Row>
                        ))
                    }
                    <button className=" px-2 w-auto text-2xl h-11 font-medium rounded-xl bg-red-600 text-white hover:bg-black duration-300">
                        Xem thêm bài viết <CaretDownOutlined />
                    </button>
                </div>
                <div className="h-full xl:col-span-2 rounded-xl flex flex-col items-center ">
                    {news.map(item => (
                        <div className=" bg-white rounded-xl mb-3 p-2.5">
                            <p className="text-base text-red-700 mb-2 border-b-2 border-gray-900  leading-8 font-semibold">{item.title}</p>
                            {item.item.map(e => (
                                <Row gutter={8} className="pb-2" >
                                    <Col span={6}>
                                    <img className="w-full rounded-lg" src={e.img}></img>
                                    </Col>
                                    <Col span={18} className="font-medium">{e.desc}</Col>
                                </Row>
                            ))}

                        </div>
                    ))}

                </div>
            </div>
        </div>
    </>)
}
export default News