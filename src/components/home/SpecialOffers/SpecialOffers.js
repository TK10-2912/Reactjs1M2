import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { SplOfferData } from "../../../constants";
import { useParams } from "react-router-dom";

const SpecialOffers = () => {
  const { category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SplOfferData);
  }, [data]);

  const catData = data.filter((item) => item.cat === category);
  return (
    <div className="w-full pb-20">
      <div class="grid grid-cols-7 gap-3">
        <>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-3 py-2 dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">Bộ lọc
          </button>
        </>

        <>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">Hãng<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">HP</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lenovo</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dell</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asus</a>
              </li>
            </ul>
          </div>
        </>
        <>

          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">Giá
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
        </>

        <>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-2 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">Màn hình<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
        </>

        <>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">CPU<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
        </>
        <>


          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">RAM<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
        </>
        <>


          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">Ổ cứng<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

        </>
      </div>

      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-3 gap-10">
        {catData.map((data) => (
          <Product
            key={data._id}
            _id={data._id}
            img={data.img}
            productName={data.productName}
            price={data.price}
            currentPrice={data.currentPrice}
            color={data.color}
            badge={true}
            des={data.des}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
