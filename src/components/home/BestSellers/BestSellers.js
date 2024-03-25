import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Laptop gaming Lenovo LOQ 15IAX9"
          price={20490000}
          priceOriginal={25000000}
          inStock ={true}
          type="Laptop"
          prCode="MSIGS66STEALTH"
          stars={5}
          sale ={7}
          badge={true}
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
          brand="Lenovo"
          des="Laptop siuuu rẻ"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Laptop Apple MacBook Pro 13"
          price={18990000}
          priceOriginal={20000000}
          color="Gray"
          brand="Gigabyte"  
          badge={false}
          stars={4}
          sale ={7}

          inStock ={true}
          configuration={[
            {
              id:"pr_5",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            },
            {
              id:"pr_6",
              select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:21890000
            },
            {
              id:"pr_7",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            },
            {
              id:"pr_8",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            }
          ]}
          prCode="MSIGS66STEALTH"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="PC Gigabyte BRIX"
          price={18990000}
          priceOriginal={20000000}
          color="Mixed"
          badge={true}
          prCode="MSIGS66STEALTH"
          brand="Gigabyte"  
          stars={4}
          sale ={7}

          inStock ={true}
          configuration={[
            {
              id:"pr_9",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            },
            {
              id:"pr_10",
              select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:21890000
            },
            {
              id:"pr_11",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            },
            {
              id:"pr_12",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            }
          ]}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Laptop Samsung Galaxy Book Pro 360"
          prCode="MSIGS66STEALTH"
          price={18990000}
          priceOriginal={20000000}
          brand="Samsung"  
          color="Black"
          stars={5}
          sale ={7}
          inStock ={true}
          badge={false}
          configuration={[
            {
              id:"pr_13",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            },
            {
              id:"pr_14",
             
              select1:"Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:21890000
            },
            {
              id:"pr_15",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            },
            {
              id:"pr_16",
              select1:"Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
              priceSelect:18990000
            }
          ]}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
