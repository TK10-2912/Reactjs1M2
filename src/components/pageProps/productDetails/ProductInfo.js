import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { Checkbox, Col, Rate, Row, Select, Tag } from "antd";
import { formatNumber } from "../../../constants";
import {
  pig,
  promis,
  ship,
  win,
}from "../../../assets/images/index";
const ProductInfo = ({ productInfo }) => {
  console.log("sản phẩm", productInfo);
  const highlightStyle = {
    color: "#d0121a",
    fontWeight: "bold",
  };

  const renderDescription = () => {
    if (!productInfo.des) {
      return null;
    }

    const description = productInfo.des.split(/:(.*?)-/).map((part, index) => {
      return (
        <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
          {part}
        </span>
      );
    });

    return <>{description}</>;
  };
  const dispatch = useDispatch();

  return (

    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <hr />
      <p>Tình trạng: {productInfo.inStock == true ? <Tag color="green">Còn hàng</Tag> : <Tag color="red">Hết hàng</Tag>}</p>
      <hr />
      <span>
        <Rate disabled={true} value={productInfo.stars} />
        <a href="#"> Xem đánh giá</a>
      </span>
      <hr />
      <Row align={"middle"}>
        <Col span={12}>
          <h2 style={{ fontSize: "25px", color: "red", fontWeight: 'bold' }}>{formatNumber(productInfo.price)}</h2>
        </Col>
        <Col span={6} style={{ justifyContent: 'end', display: 'flex' }}>
          <strike ><h2 style={{ fontSize: "25px" }}>{formatNumber(productInfo.priceOriginal)}</h2></strike>
        </Col>
        &nbsp; &nbsp; &nbsp;
        <Tag color="red" style={{ height: 22 }}>{productInfo.sale}%</Tag>
      </Row>
      <Row>
        <Col span={8} style={{ fontSize: 18, borderRight: "1px solid black" }}>
          Thương hiệu: <span style={{ color: "red" }}>{productInfo.brand}</span>
        </Col>

        <Col span={8} style={{ fontSize: 18, borderRight: "1px solid black", textAlign: 'center' }}>
          Loại: <span style={{ color: "red" }}>{productInfo.type}</span>
        </Col>
        <Col span={8} style={{ fontSize: 18, textAlign: 'center' }}>
          MSP: <span style={{ color: "red" }}>{productInfo.prCode}</span>
        </Col>
      </Row>
    
            <Row gutter={20}>
            {productInfo.configuration !== undefined &&
              productInfo.configuration.map(item => (
                <Col className="rounded-lg xl:m-2 p-3" offset={item.id % 2 === 0 ? 2 : 0} style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",background:"#FFFFFF"}} span={11} key={"pr_" + item.id}>
                  <Checkbox style={{ fontSize: "16px",fontWeight:'600' }} value={item.id}>{item.select1}</Checkbox>
                  <p style={{ fontSize: "14px",textAlign:'center',fontWeight:'bold' }} className="text-red-700">{formatNumber(Number(item.priceSelect))}</p>
                </Col>
              ))}
            </Row>
      <div className="flex justify-between">
        <button
          onClick={() =>
            dispatch(
              addToCart({
                _id: productInfo.id,
                name: productInfo.productName,
                quantity: 1,
                image: productInfo.img,
                badge: productInfo.badge,
                price: productInfo.price,
                colors: productInfo.color,
              })
            )
          }
          className="w-1/3  py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont rounded-md"
        >
          Thêm vào giỏ hàng
        </button>
        <button
          className="bor w-1/3 py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont rounded-md"
        >
          Mua ngay
        </button>
      </div>
      <div className="rounded-lg bg-white "  style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
          <h1 style={{textAlign:"center",color:"white",lineHeight:2,borderTopRightRadius:6,borderTopLeftRadius:6,background:"#D0011A"}}>Yên tâm khi mua hàng tại SKY GEAR</h1>
          <div style={{fontSize:14,fontWeight:"bold"}} className="p-4">
            <Row style={{alignItems:"center"}}><img style={{width:'2.2rem'}} src={promis} />Bảo hành chính hãng</Row>
            <Row style={{alignItems:"center"}}><img style={{width:'2.2rem'}} src={win}></img>Windows bản quyền tích hợp</Row>
            <Row style={{alignItems:"center"}}><img style={{width:'2.2rem'}} src={ship}></img>Miễn phí giao hàng toàn quốc</Row>
            <Row style={{alignItems:"center"}}><img style={{width:'2.2rem'}}src={pig}></img>Hỗ trợ trả góp</Row>
          </div>
      </div>
    </div>
  );
};

export default ProductInfo;
