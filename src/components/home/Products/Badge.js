import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-Discounts w-[60px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-red duration-300 cursor-pointer border rounded">
      {text}
    </div>
  );
};

export default Badge;
