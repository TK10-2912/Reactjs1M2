import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-Discounts w-[60px] max-[450px]:w-[40px] max-[450px]:h-[25px] max-[450px]:rounded-lg h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-red duration-300 cursor-pointer border rounded-xl">
      {text}
    </div>
  );
};

export default Badge;
