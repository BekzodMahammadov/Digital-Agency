import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "../../../assets/img/hero.png";

export default () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="header w-full h-auto py-[150px] px-[20px] lg:py-[250px] bg-[#6222CC] grid grid-cols-1 lg:grid-cols-2 lg:px-[40px]  xl:px-[90px]">
        <div
          data-aos="fade-down"
          className="text-center md:text-center md:px-[20px] lg:text-left lg:w-[400px] mx-auto xl:w-[500px]"
        >
          <div className="text-[38px] font-bold text-white ">
            A Digital Agency Of Inteligents & Creative People
          </div>
          <div className="text-[17px] text-white mt-[20px]">
            Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
            dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
            sit justo amet ipsum vero ipsum clita lorem
          </div>
          <div className="flex gap-[20px] mt-[20px] justify-center lg:justify-start mb-[40px]">
            <button className="w-[103px] h-[38px] md:w-[175px] md:h-[58px] bg-[#fba504] rounded-full text-[16px] font-semibold">
              Read More
            </button>
            <button className="w-[103px] h-[38px] md:w-[175px] md:h-[58px] bg-[#f6f4f9] rounded-full text-[16px] font-semibold">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex lg:justify-end mx-auto " data-aos="zoom-in">
          <img src={Img} className="lg:w-[500px]" alt="" />
        </div>
      </div>
    </div>
  );
};
