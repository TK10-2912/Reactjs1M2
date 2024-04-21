import React, { useEffect, useState } from "react";
import { SlUser } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Col, Row } from "antd";

import { FaKey } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import Breadcrumbs from "../../../pageProps/Breadcrumbs";
import { introImage, introImageComment } from "../../../../assets/images";
const Introduction = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    const dispatch = useDispatch();
    const products = useSelector((state) => state.orebiReducer.products);
    const [totalAmt, setTotalAmt] = useState("");
    const [shippingCharge, setShippingCharge] = useState("");
    useEffect(() => {
        let price = 0;
        products.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price);
    }, [products]);
    useEffect(() => {
        if (totalAmt <= 200) {
            setShippingCharge(30);
        } else if (totalAmt <= 400) {
            setShippingCharge(25);
        } else if (totalAmt > 401) {
            setShippingCharge(20);
        }
    }, [totalAmt]);
    return (

        <div className="max-w-container mx-auto px-4">
            <div>
                <Breadcrumbs title="Giới thiệu" prevLocation={prevLocation} />
            </div>

            <div className="md:block lg:flex justify-center bg-black rounded-lg shadow-lg mb-4">
                <div className="sm:w-full md:w-full w-1/2">
                    <div className="p-8">
                        <h2 className="text-white text-2xl font-semibold mb-4 uppercase text-center">VỀ SKY GEAR</h2>
                        <p className="text-white mb-4">
                            Chào mừng quý khách đến với SKY Gear-điểm đến lý tưởng cho những người đam mê công nghệ và đang tìm kiếm sự hoàn hảo trong thiết bị điện tử. Tại cửa hàng của chúng tôi, chúng tôi tự hào mang đến cho khách hàng sự đa dạng và chất lượng trong sản phẩm công nghệ hàng đầu từ các thương hiệu uy tín trên thị trường.
                        </p>
                        <p className="text-white mb-4">
                            Với một bộ sưu tập đa dạng của các sản phẩm từ Laptop, màn hình, đến các phụ kiện công nghệ như chuột, bàn phím, tai nghe. Chúng tôi cam kết mang lại cho bạn trải nghiệm mua sắm đầy thú vị và hài lòng.
                        </p>
                        <p className="text-white mb-4">
                            Chúng tôi hiểu rằng công nghệ luôn tiến bộ và thay đổi mỗi ngày, vì vậy chúng tôi luôn cập nhật những xu hướng mới nhất và sản phẩm tiên tiến nhất để đáp ứng nhu cầu của khách hàng. Đội ngũ nhân viên tận tình và am hiểu sẵn lòng hỗ trợ bạn trong việc chọn lựa sản phẩm phù hợp nhất với nhu cầu và ngân sách của bạn.
                        </p>
                        <p className="text-white mb-4">
                            Hãy đến và khám phá SKY Gear để trải nghiệm không gian mua sắm tiện lợi và đẳng cấp, nơi mà công nghệ đẳng cấp và dịch vụ chuyên nghiệp đều được đặt lên hàng đầu. Chúng tôi rất mong được đón tiếp và phục vụ quý khách!
                        </p>
                    </div>
                </div>
                <div className=" md:w-full sm:w-full h-full w-1/2">
                    <img src={introImage} alt="Sky Gear" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            </div>
            <div className="grid grid-cols-3 max-[450px]:grid-cols-1 gap-5 bg-white rounded-xl mb-5">
                <div className="w-full  p-4 max-[450px]:w-full">
                    <div className=" p-6 text-center">
                        <img src={introImageComment}  className="mx-auto rounded-xl mb-4 max-[450px]:w-[70%]" style={{border:"1px solid black"}}/>
                        <p className="font-extrabold text-2xl max-[450px]:text-sm ">Anh Quang Hải (Hà Nội)</p>
                        <p className="font-extrabold text-2xl max-[450px]:text-sm"> "Không gian quán rất rộng rãi, nhân viên tư vấn rất nhiệt tình. Tôi đã mua 2 lần ở đây và sẽ còn quay lại"</p>
                    </div>
                </div>
                <div className="w-full  p-4 max-[450px]:w-full">
                    <div className=" p-6 text-center">
                        <img src={introImageComment}  className="mx-auto rounded-xl mb-4 max-[450px]:w-[70%]" style={{border:"1px solid black"}}/>
                        <p className="font-extrabold text-2xl max-[450px]:text-sm">Anh Văn Ngọc (Quảng Ninh)</p>
                        <p className="font-extrabold text-2xl max-[450px]:text-sm"> “Chất lượng dịch vụ rất tốt, đa dạng mẫu mã. Tôi sẽ giới thiệu cho bạn bè và người thân”</p>
                    </div>
                </div>
                <div className="w-full  p-4 max-[450px]:w-full">
                    <div className=" p-6 text-center">
                        <img src={introImageComment}  className="mx-auto rounded-xl mb-4 max-[450px]:w-[70%]" style={{border:"1px solid black"}}/>
                        <p className="font-extrabold text-2xl max-[450px]:text-sm">Anh Minh Vương (Thái Bình)</p>
                        <p className="font-extrabold text-2xl max-[450px]:text-sm"> "Tôi thật sự rất hài lòng về chất lượng và dịch vụ tại đây. Tôi chắc chắn sẽ quay lại đây và mua hàng"</p>
                    </div>
                </div>
            </div>

        </div >
    );
    function scrollToContent(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

};

export default Introduction;
