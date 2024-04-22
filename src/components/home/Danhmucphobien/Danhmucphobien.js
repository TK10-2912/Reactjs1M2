import React from "react";
import { Button, Col, Row } from "antd";
import { chuot, keyboard1, laptop1, screen1, tainghe } from "../../../assets/images";
import Heading from "../Products/Heading";
import { cssColResponsiveSpan } from "../../../constants";

const Danhmucphobien = () => {
    return (
        <div className="w-full bg-white rounded-lg  mb-5 max-[450px]:pb-3  pb-16 ">
            <Heading heading="Danh mục phổ biến" />
            <div className="grid grid-cols-5 gap-4 px-3 max-[450px]:overflow-x-auto  whitespace-nowrap">
                    <div className="rounded-xl border  border-slate-800 ">
                        <img className="rounded-xl" src={laptop1} />
                        <p className="text-2xl max-[450px]:text-xs  font-medium text-center">Laptop</p>
                    </div>
                    <div  className="rounded-xl border border-slate-800 ">
                        <img className="rounded-xl" src={screen1} />
                        <p className="text-2xl max-[450px]:text-xs font-medium text-center">Màn hình</p>
                    </div>
                    <div  className="rounded-xl border border-slate-800 ">
                        <img className="rounded-xl v h-[232px] max-[450px]:h-[60px] w-full" src={keyboard1} />
                        <p className="text-2xl max-[450px]:text-xs  font-medium text-center">Bàn phím</p>
                    </div>
                    <div  className="rounded-xl border border-slate-800 ">
                        <img className="rounded-xl" src={chuot} />
                        <p className="text-2xl max-[450px]:text-xs  font-medium text-center">Chuột</p>
                    </div>
                    <div  className="rounded-xl border border-slate-800 ">
                        <img className="rounded-xl" src={tainghe} />
                        <p className="text-2xl max-[450px]:text-xs  font-medium text-center">Tai nghe</p>
                    </div>

            </div>
        </div>
    )
}
export default Danhmucphobien;