import React from "react";

const NoPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[61%] leading-[2] md:leading-[2.2] lg:leading-[1.9] w-[85vw] sm:w-[85vw] md:w-[85vw] lg:w-[75vw] xl:w-[63vw] 2xl:w-[60vw] text-[3.1vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[19.5px] 2xl:text-[23px] text-center bg-[#e9ebf0]/40 p-5">
      <p className="font-[400]">404</p>
      {/* <p className="font-[400] pt-5">Page not founded</p> */}
    </div>
  );
};

export default NoPage;
