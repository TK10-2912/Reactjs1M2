import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { translate } from "../../constants/translate";

const Breadcrumbs = ({ prevLocation, title }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
      <h1 className="text-5xl text-primeColor font-titleFont font-bold">
        {title}
      </h1>
      <p className="text-base font-normalcapitalize flex items-center text-blue-600">
        <span> {prevLocation === "" ? "Trang chủ" : prevLocation}</span>

        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className=" text-base capitalize font-semibold text-primeColor">
          {translate(locationPath)}
        </span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
