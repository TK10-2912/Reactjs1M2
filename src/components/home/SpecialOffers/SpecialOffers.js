import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { SplOfferData } from "../../../constants";
import { useParams } from "react-router-dom";
import { FilterOutlined } from "@ant-design/icons";
import { Col, Row, Select } from "antd";

const SpecialOffers = () => {
  const { category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SplOfferData);
  }, [data]);

  const hang = [
    {value: 'MSI',
      label: 'MSI',
    },
    {value: 'Lenovo',
      label: 'Lenovo',
    },
    {value: 'Asus',
      label: 'Asus',
    },
    {value: 'Acer',
      label: 'Acer',
    },
    {value: 'Dell',
      label: 'Dell',
    },
    {value: 'HP',
      label: 'HP',
    },
  ];

  const gia= [
    {value: 'Dưới 10 triệu',
    label: 'Dưới 10 triệu',
  },
    {value: '10 - 15 triệu',
    label: '10 - 15 triệu',
  },
    {value: '15 - 20 triệu',
    label: '15 - 20 triệu',
  },
    {value: '20 - 25 triệu',
    label: '20 - 25 triệu',
  },
    {value: '25 - 30 triệu',
    label: '25 - 30 triệu',
  },
    {value: 'Trên 30 triệu',
    label: 'Trên 30 triệu',
  },
  ];
  const mahinh= [
    {value: '13 inch',
    label: '13 inch',
  },
    {value: '13-15 inch',
    label: '13-15 inch',
  },
    {value: '15-17 inch',
    label: '15-17 inch',
  },
    {value: '17 inch',
    label: '17 inch',
  }];
  const CPU= [
    {value: 'Intel core i3',
    label: 'Intel core i3',
  },
    {value: 'Intel core i5',
    label: 'Intel core i5',
  },
    {value: 'Intel core i7',
    label: 'Intel core i7',
  },
    {value: 'ADM Ryzen  ',
    label: 'ADM Ryzen ',
  }];
  const ocung= [
    {value: '128Gb',
    label: '128Gb',
  },
    {value: '256Gb',
    label: '256Gb',
  },
    {value: '512Gb',
    label: '512Gb',
  },
    {value: '1T  ',
    label: '1T ',
  }];
  const ram= [
    {value: '4Gb',
    label: '4Gb',
  },
    {value: '8Gb',
    label: '8Gb',
  },
    {value: '16Gb',
    label: '16Gb',
  },
    {value: '32Gb  ',
    label: '32Gb ',
  },
    {value: '64Gb  ',
    label: '64Gb ',
  },
]
  const catData = data.filter((item) => item.cat === category);
  return (
    <div className="w-full pb-20">
      <Row gutter={16} className="pl-3" >
        <>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid  border-[1px] dark:hover:text-white rounded-lg px-3 py-2 dark:bg-blue-600 dark:focus:ring-blue-800 " type="button">
            <FilterOutlined />
            Bộ lọc
          </button>
        </>
        <Col>
          <Select
            className="h-full font-semibold text-xl"
            defaultValue="Hãng"
            style={{ width: 120 }}
            options={hang}
          />
        </Col>
        <Col>
          <Select
          className="h-full font-semibold text-xl"
            defaultValue="Giá"
            style={{ width: 120 }}
            options={gia}
          />
        </Col>
        <Col>
          <Select className="h-full font-semibold text-xl"
            defaultValue="Màn hình"
            style={{ width: 120 }}
            options={mahinh}
          />
        </Col>
        <Col>
          <Select className="h-full font-semibold text-xl"
            defaultValue="CPU"
            style={{ width: 120 }}
            options={CPU}
          />
        </Col>
        <Col>
          <Select className="h-full font-semibold text-xl"
            defaultValue="Ổ cứng"
            style={{ width: 120 }}
            options={ocung}
          />
        </Col>
        <Col>
          <Select className="h-full font-semibold text-xl"
            defaultValue="Ram"
            style={{ width: 120 }}
            options={ram}
          />
        </Col>
        <>

          {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-solid border-slate-400 border-[3px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 font-semibold text-xl" type="button">Giá
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
          </button> */}

        </>
      </Row>

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
