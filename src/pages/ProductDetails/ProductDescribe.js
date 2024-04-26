import { Button, Row } from "antd";
import React from "react";
import { laptop2 } from "../../assets/images";
const ProductDescrible = () => {

    return (
    <>
        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
                <li class="me-2">
                    <a href="#" className="inline-block p-4 text-lg text-black   border-b-2 font-bold border-red-600 rounded-t-lg " aria-current="page">Mô tả sản phẩm</a>
                </li>
            </ul>
        </div>
        <div className="p-2 px-4">
            <h1 className="text-xl font-semibold">LENOVO LOQ 2024: THIẾT KẾ MỚI, HIỆU NĂNG LIỆU CÓ THAY ĐỔI?</h1>
            <hr />
            <p>
                Dòng Lenovo Legion được biết đến với hiệu suất cao và thiết kế cao cấp, nhưng lại đi kèm với mợt mức giá đắt đỏ. Trong khi đó, dòng LOQ mưới dự kiến sẽ là một lựa chọn hợp lý hơn dành cho những game thủ muốn một thiết bị mạng mẽ mà không làm "thủng túi" của họ.
            </p>
            <hr/>
            <h1 className="text-xl font-semibold">
                Thiết kế
            </h1>
            <img src={laptop2} />

        </div>
        <Row justify={"center"} className="mb-2">
            <Button>Xem thêm</Button>
        </Row>
    </>)
}
export default ProductDescrible;