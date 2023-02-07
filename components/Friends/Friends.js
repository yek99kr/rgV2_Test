import AboutDropDown from "../Home/AboutDropDown";
// import { useState } from "react";
import Link from "next/link";

const About = (props) => {
  const madWords1 = [
    "production support",
    "bidding",
    "producing",
    "insurance",
    "payroll",
    "business affair",
    "contract negotiating",
    "agency and brand liason",
  ];
  const madWords2 = ["access"];
  const madWords3 = ["insight"];

  return (
    <>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[64.5%] leading-[2] md:leading-[2.2] lg:leading-[1.9] w-[88vw] sm:w-[85vw] md:w-[85vw] lg:w-[85vw] xl:w-[85vw] 2xl:w-[85vw] text-[3.1vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[19.5px] 2xl:text-[23px] text-center  p-5">
        <div className="flex justify-center items-center ">
          {/* <iframe
            className="w-[43vw] h-[25vw] "
            src="https://player.vimeo.com/video/796660432?h=7ebdbe845e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?loop=1&background=1&autoplay=1&muted=1&controls=0&quality=1080p&transparent=1"
            allowFullScreen
            frameBorder="0"
          ></iframe> */}
          <img
            className="w-[95%] pb-5 sm:pb-8 md:w-[75%] lg:w-[67%] xl:w-[50%] "
            src="/handshakes.png"
          ></img>
        </div>
        <p className="font-[400]">
          We provide <AboutDropDown madWords={madWords1} /> for creators.
        </p>
        <p className="font-[400] pt-[1.8em] sm:pt-[1.5em]">
          We provide <AboutDropDown madWords={madWords2} /> and{" "}
          <AboutDropDown madWords={madWords3} /> to{" "}
          <br className="block sm:hidden" />
          agencies and brands.
        </p>
      </div>
    </>
  );
};

export default About;
