import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";
import { formatNumber } from "../../constants";

const ItemCard = ({ item, payment }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        {payment == false ?
          <ImCross
            onClick={() => dispatch(deleteItem(item._id))}
            className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
          />
          : ""
        }

        <img className="w-32 h-32 " src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 max-[450px]:w-1/4 max-[450px]:text-base items-center text-lg font-semibold">
          {formatNumber(item.price)}
        </div>
        <div className="w-1/3 flex max-[450px]:w-1/4 items-center gap-6 text-lg justify-center">
          {payment == false ?
            <span
              onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
              className="w-6 h-6  bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
            >-</span>
            : ""
          }

          <p >{item.quantity}</p>
          {payment == false ?
            <span
              onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
              className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
            >
              +
            </span>
            : ""
          }

        </div>
        <div className="w-1/3 max-[450px]:text-[13px] text-red-700 flex items-center font-titleFont font-bold text-lg">
          <p>{formatNumber(item.quantity * item.price)} (-{item.sale}%)</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
