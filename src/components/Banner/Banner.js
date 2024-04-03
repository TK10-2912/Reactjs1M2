import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    style={{
      position: "relative",
      backgroundColor: "#F5F5F3", // Gray background color
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center vertically
    }}
  >
    <div
      style={{
        maxWidth: "450px", // Adjust the maxWidth as needed
        marginRight: "100px", // Add margin between text/button and image
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem", // Adjust the font size as needed
          color: "#000", // Black color
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem", // Adjust the font size as needed
          color: "#666", // Gray color
        }}
      >
        {Subtext}
      </p>

      <Link to="/about">
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    <div style={{ marginLeft: "100px" }}>
      <Image imgSrc={imgSrc} />
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "30px",
              color: "#262626",
              borderRight: "3px #262626 solid",
              padding: "8px 0",
              cursor: "pointer",
            }
            : {
              width: "30px",
              color: "transparent",
              borderRight: "3px white solid",
              padding: "8px 0",
              cursor: "pointer",
            }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                    width: "25px",
                    color: "#262626",
                    borderRight: "3px #262626 solid",
                    cursor: "pointer",
                    fontSize: "12px",
                  }
                  : {
                    width: "25px",
                    color: "transparent",
                    borderRight: "3px white solid",
                    cursor: "pointer",
                    fontSize: "12px",
                  }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Enhance Your Printing Experience",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonLink: "/offer",
      buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgOne,
      text: "Quality Printing Solutions",
      Subtext:
        "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/shop",
      buttonText: "About-us",
    },
    {
      imgSrc: bannerImgOne,
      text: "Efficiency Redefined",
      Subtext:
        "Maximize productivity with our advanced printers and high-quality consumables. ",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },

    // Add more slides as needed
  ];
  return (
    <div id="indicators-carousel" class="relative w-full" data-carousel="static">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>);
};

export default Banner;
