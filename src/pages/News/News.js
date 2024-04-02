import React, { useEffect, useState } from "react";
import { bestSellerOne } from "../../assets/images";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { Col, Row } from "antd";
const News = () => {
    const newHeader = {
        img: bestSellerOne,
        title: "Cách tải game Identity V cực nhanh trên PC mà ai cũng làm được",
        desc: "Trải nghiệm game trên PC ngày càng trở nên phổ biến và hấp dẫn hơn bao giờ hết. Trong bài viết này, chúng ta sẽ cùng nhau khám phá cách tải và cài đặt game Identity V - tựa game kinh dị đầy kịch tính trên máy tính một cách nhanh chóng và dễ dàng. Hãy cùng SKY Gear khám phá cách thức thú vị này ngay sau đây! Identity V là..."
    }
    const hotNews = {
        title: "TIN HOT",
        item: [
            {
                img: bestSellerOne,
                desc: "Cách sử dụng AI voice acting để tạo âm thanh lồng tiếng cho video"
            },
            {
                img: bestSellerOne,
                desc: "Cách download game Dragon City cực dễ cho PC, laptop"
            },
            {
                img: bestSellerOne,
                desc: "Disney cho ra mắt HoloTile liệu đây sẽ là cánh cửa mới để vực dậy cho Game thực tế ảo (VR) ?"
            },
        ]
    };

    const newstechnology = {
        title: "TIN CÔNG NGHỆ",
        item: [
            {
                img: bestSellerOne,
                desc: "Highlights MWC 2024: Tương lai là ưu tiên hàng đầu"
            },
            {
                img: bestSellerOne,
                desc: "Hướng dẫn tải Zing MP3 nhanh chóng cho máy tính - Download Zing MP3 PC"
            },
            {
                img: bestSellerOne,
                desc: "Disney cho ra mắt HoloTile liệu đây sẽ là cánh cửa mới để vực dậy cho Game thực tế ảo (VR) ?"
            },
        ]
    };

    const newsPromotion = {
        title: "TIN KHUYẾN MÃI",
        item: [
            {
                img: bestSellerOne,
                desc: "Mua Nitro V Tiger - Ngập tràn khuyến mãi"
            },
            {
                img: bestSellerOne,
                desc: "Đặt trước ROG Zephyrus G14/G16 Oled 2024 - Nhận ngay quà tặng giới hạn"
            },
            {
                img: bestSellerOne,
                desc: "LENOVO sự kiệnTương lai hiện hữu"
            },
        ]
    };

    const news = [hotNews, newstechnology, newsPromotion];
    const newMain = [
        {
            img: bestSellerOne,
            title: "Monica ứng dụng AI miễn phí đa dụng",
            dateUpLoad: "27/03/2024"
        },
        {
            img: bestSellerOne,
            title: "Game NFT là gì ? Cách kiếm tiền từ game NFT - Xu hướng game 2024",
            dateUpLoad: "26/03/2024"
        },
        {
            img: bestSellerOne,
            title: "Disney cho ra mắt HoloTile liệu đây sẽ là cánh cửa mới để vực dậy cho Game thực tế ảo (VR) ?",
            dateUpLoad: "25/03/2024"
        },
        {
            img: bestSellerOne,
            title: "Cách download game Dragon City cực dễ cho PC, laptop",
            dateUpLoad: "24/03/2024"
        },
    ]
    return (<>
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs prevLocation={"Trang chủ"} title="Tin tức" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 ">
                <div className="h-full xl:col-span-4  bg-gray-100 p-4 rounded-xl flex flex-col items-center ">
                    <Row className="border-b-2 border-gray-900 mb-2" >
                        <Col span={16}><img className="rounded-3xl" src={newHeader.img}></img></Col>
                        <Col span={8}><div>
                            <h2 className="text-xl font-medium">{newHeader.title}</h2>
                            <p>{newHeader.desc}</p>
                            <a href="#">Xem tiếp {">>>"}</a>
                        </div></Col>
                    </Row>
                    {
                        newMain.map(item => (
                                <Row className="mx-3    ">
                                    <Col span={12}>
                                        <img src={item.img} alt="anh"></img>
                                    </Col>
                                    <Col span={12}>
                                        <h2 className="text-lg font-medium">{item.title}</h2>
                                        <p>{item.dateUpLoad}</p>
                                    </Col>
                                </Row>
                        ))
                    }
                </div>

            </div>
        </div>
    </>)
}
export default News