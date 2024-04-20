import React from "react";

const FooterListTitle = ({check, title }) => {
  return <h3 className={`text-xl font-bodyFont font-semibold mb-6 ${check == true && "max-[450px]: border-b  max-[450px]:border-white" }  text-white`}>{title}</h3>;
};

export default FooterListTitle;
