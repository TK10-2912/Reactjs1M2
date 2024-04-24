import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  imprimante1,
  imprimante2,
  imprimante4,
  imprimante5,
  imprimante6,
  imprimante7,
  imprimante8,
  imprimante9,
  encre1,
  encre2,
  encre3,
  encre4,
  ruban1,
  ruban2,
  ruban3,
  ruban4,
  bac1,
  bac2,
  bac3,
  bac4,
  pdf1,
  IMPRIMANTE_PANTUM_CP2200DW,
  IMPRIMANTE_PANTUM_BM5100FDW,
  IMPRIMANTE_PANTUM_M6609N,
  IMPRIMANTE_PANTUM_P3300DN,
  IMPRIMANTE_PANTUM_P3300DW,
  IMPRIMANTE_PANTUM_P2509W,
  IMPRIMANTE_PANTUM_BP5100DN,
  IMPRIMANTE_PANTUM_M6559N,
  IMPRIMANTE_PANTUM_P2509,
  hp1,
  hp2,
  hp3,
  ricoh1,
  ricoh2,
  ricoh3,
  ricoh4,
  ricoh5,
  espson1,
  espson2,
  laptop1,
  laptop2,
  laptop3,
  laptop4,
  laptop5,
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  laptop6,
  screen6,
  keyboard1,
  keyboard2,
  keyboard3,
  keyboard4,
  keyboard5,
  keyboard6,
} from "../assets/images/index";

import "./style.css";

// =================== NavBarList Start here ====================
export const formatNumber = (input) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(input))
}
export const setUserLocalStorage = (key, object) => {
  window.localStorage.setItem(key, JSON.stringify(object))
}
export const getUserLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  const result = data ? JSON.parse(data) : null;
  return result
}

export const removeUserLocalStorage = (user) => {
  localStorage.removeItem(`${user}`);
}
export const cssColResponsiveSpan = (xs, sm, md, lg, xl, xxl) => {
	return {
		xs: { span: xs },
		sm: { span: sm },
		md: { span: md },
		lg: { span: lg },
		xl: { span: xl },
		xxl: { span: xxl },
	};
}
export const navBarList = [
  {
    _id: 1001,
    title: "Sản phẩm",
    link: "/",
  },
  {
    _id: 1002,
    title: "Tin tức",
    link: "/news",
  },
  {
    _id: 1003,
    title: "Giới thiệu",
    link: "/introduce",
  },
  {
    _id: 1004,
    title: "Liên hệ",
    link: "contact",
  },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"

  },
  {
    _id: "202",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"

  },
  {
    _id: "203",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"
  },
  {
    _id: "204",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"
  },
  {
    _id: "205",
    img: laptop5,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"
  },
  {
    _id: "206",
    img: laptop6,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"
  },
  {
    _id: "207",
    img: laptop1,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"
  },
  {
    _id: "208",
    img: laptop3,
    type:"Laptop",
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "laptop"
  },


  {
    _id: "209",
    img: screen1,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "210",
    img: screen2,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "211",
    img: screen3,
   productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "212",
    img: screen4,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "213",
    img: screen5,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "214",
    img: screen6,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "215",
    img: screen1,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "216",
    img: screen2,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "217",
    img: screen5,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "219",
    img: screen2,
    productName:"Màn hình MSI PRO MP275 27",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "manhinh",
  },
  {
    _id: "220",
    img: keyboard1,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
  {
    _id: "221",
    img: keyboard2,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
  {
    _id: "222",
    img: keyboard3,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
  {
    _id: "223",
    img: keyboard4,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
  {
    _id: "224",
    img: keyboard5,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
  {
    _id: "225",
    img: keyboard6,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
  {
    _id: "226",
    img: keyboard1,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
  {
    _id: "227",
    img: keyboard2,
    productName:"Bàn phím Cidoo Không dây ABM084",
    price:2890000,
    priceOriginal:3390000,
    color:"Gray",
    type:"screen",
    prCode:"MSIGS66STEALTH",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    desP:"Màn hình siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Độ phân giải SVGA ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Màn hình HD",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Màn hình HD+",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Màn hình Full HD",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "banphim",
  },
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: "201",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "202",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "203",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "204",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "205",
    img: laptop5,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "206",
    img: laptop6,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "207",
    img: laptop1,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "208",
    img: laptop3,
    type:"Laptop",
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },

  {
    _id: "209",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "210",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "211",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "212",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "213",
    img: laptop5,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "214",
    img: laptop6,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "215",
    img: laptop1,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "216",
    img: laptop3,
    type:"Laptop",
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "217",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "218",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "219",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "220",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "221",
    img: laptop5,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "222",
    img: laptop6,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "223",
    img: laptop1,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "224",
    img: laptop3,
    type:"Laptop",
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "225",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "226",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "227",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "228",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "229",
    img: laptop5,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "230",
    img: laptop6,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "231",
    img: laptop1,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "232",
    img: laptop3,
    type:"Laptop",
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "233",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "234",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "235",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "236",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "237",
    img: laptop5,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "238",
    img: laptop6,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "239",
    img: laptop1,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "240",
    img: laptop3,
    type:"Laptop",
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },

  {
    _id: "241",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "242",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "243",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "244",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "245",
    img: laptop5,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "246",
    img: laptop6,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "247",
    img: laptop1,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "248",
    img: laptop3,
    type:"Laptop",
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "249",
    img:laptop2,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    type:"Laptop",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "250",
    img:laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"

  },
  {
    _id: "251",
    img: laptop3,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    type:"Laptop",
    prCode:"MSP",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
  {
    _id: "252",
    img: laptop4,
    productName:"Laptop gaming ASUS TUF F15",
    price:19490000,
    prCode:"MSP",
    type:"Laptop",
    priceOriginal:20000000,
    color:"Gray",
    brand:"Gigabyte",
    badge:true,
    stars:4,
    sale:7,
    des:"Laptop siuuu rẻ",
    configuration:[
      {
        id: "pr_1",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_2",
        select1: "Core i7-7840HS,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 21890000
      },
      {
        id: "pr_3",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      },
      {
        id: "pr_4",
        select1: "Core i5-13420H,8GB,1TB,RTX3050 6GB,15.6FHD 144Hz ",
        priceSelect: 18990000
      }
    ],
    instock:true,
    cat: "Imprimante"
  },
];
