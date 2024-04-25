import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductDescrible from "./ProductDescribe";
import ThongSoKyThuat from "../../components/pageProps/productDetails/ThongSoKyThuat";
import DanhGia from "../../components/pageProps/productDetails/DanhGia";
import { laptop1, laptop2, laptop3, laptop4, laptop5, laptop6 } from "../../assets/images";
import Slider from "react-slick";
import Product from "../../components/home/Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const tabs = [
	{
		id: "Fiche Technique",
		label: "Fiche Technique",
	},
	{
		id: "Description",
		label: "Description",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
	},
	{
		id: "Video",
		label: "Video",
		content: (
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/watch?v=6e0yIRDVPlA&list=RD6e0yIRDVPlA&start_radio=1"
				title="YouTube Video"
				frameBorder="0"
				allowFullScreen
			></iframe>
		),
	},
	// Add more tabs as needed
];

const ProductDetails = () => {
	const location = useLocation();
	const [prevLocation, setPrevLocation] = useState("");
	const [productInfo, setProductInfo] = useState([]);
	const [activeTab, setActiveTab] = useState(tabs[0].id);
	const [imgHeader, setImgHeader] = useState(null);
	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};


	useEffect(() => {
		setProductInfo(location.state.item);
		setPrevLocation(location.pathname);
		setImgHeader(productInfo.img)
	}, [location, productInfo.ficheTech]);

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow className={"z-50"} />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	const listImage = [
		{ img: laptop1,id:1},
		{ img: laptop2,id:2 },
		{ img: laptop3,id:3 },
		{ img: laptop4,id:4 },
		{ img: laptop5,id:5 },
	]
	const setSelectImgHeader = (img) => {
		setImgHeader(img);
	  };
	return (

		<div className="w-full mx-auto border-b-[1px] border-b-gray-300">
			<div className="max-w-container mx-auto px-4">
				<div className="xl:-mt-10 -mt-7">

					<Breadcrumbs title="" prevLocation={prevLocation} />
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
					<div className="h-full xl:col-span-3">
						<div className="grid grid-cols-5 gap-3 bg-white px-4 pb-3">
							<div className="col-span-5 ">
								<img
									className="w-full h-full "
									src={imgHeader}
									alt={imgHeader}
								/>
							</div>
							{listImage.map(item => (
								<div className={`border rounded-md border-slate-500 opacity-50 ${item.img === imgHeader ? "opacity-100":"opacity-50" }`} >
									<img className="rounded-md cursor-pointer " src={item.img} onClick={()=>setSelectImgHeader(item.img)}>
									</img>
								</div>
							))}
						</div>


					</div>
					<div className="h-full w-full md:col-span-2 xl:col-span-3 xl:px-4 bg-white flex flex-col gap-6 justify-center">
						<ProductInfo productInfo={productInfo} />
					</div>
					<div className="h-full xl:col-span-3 bg-white">
						<ProductDescrible />
					</div>
					<div className="h-full w-full md:col-span-2 xl:col-span-3  flex flex-col gap-6 justify-center">
						<ThongSoKyThuat />
					</div>
					<div className="h-full w-full md:col-span-2 xl:col-span-6 pb-3 flex flex-col gap-6 justify-center">
						<DanhGia productInfo={productInfo} />
					</div>
					<div className="h-full p-6 bg-white w-full md:col-span-2 xl:col-span-6 flex flex-col gap-6 justify-center">
						<h1 className="text-2xl font-semibold text-center">SẢN PHẨM LIÊN QUAN</h1>
						<Slider {...settings}>
							<div className="px-2">
								<Product
									_id="100005"
									img={laptop6}
									productName="Laptop gaming ASUS ROG Strix G16"
									price={49890000}
									priceOriginal={52990000}
									color="Gray"
									brand="Gigabyte"
									badge={false}
									stars={4}
									sale={7}
									des="Laptop siuuu rẻ"
									inStock={true}
								/>
							</div>
							<div className="px-2">
								<Product
									_id="100005"
									img={laptop5}
									productName="Laptop Asus VivoBook 14"
									price={13790000}
									priceOriginal={17990000}
									color="Gray"
									brand="Gigabyte"
									badge={false}
									stars={4}
									sale={7}
									des="Laptop siuuu rẻ"
									inStock={true}
								/>
							</div>
							<div className="px-2">
								<Product
									_id="100004"
									img={laptop4}
									productName="Laptop Lenovo V14 G4 IRU"
									price={10790000}
									priceOriginal={11990000}
									color="Gray"
									brand="Gigabyte"
									badge={false}
									stars={4}
									sale={7}
									des="Laptop siuuu rẻ"
									inStock={true}
								/>
							</div>
							<div className="px-2">
								<Product
									_id="100003"
									img={laptop3}
									productName="Laptop gaming ASUS ROG G14"
									price={54900000}
									priceOriginal={52990000}
									color="Gray"
									brand="Gigabyte"
									badge={false}
									stars={4}
									sale={7}
									des="Laptop siuuu rẻ"
									inStock={true}
								/>
							</div>
							<div className="px-2">
								<Product
									_id="100003"
									img={laptop2}
									productName="Laptop gaming ASUS ROG G14"
									price={54900000}
									priceOriginal={52990000}
									color="Gray"
									brand="Gigabyte"
									badge={false}
									stars={4}
									sale={7}
									des="Laptop siuuu rẻ"
									inStock={true}
								/>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
