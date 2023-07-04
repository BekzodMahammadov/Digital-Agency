import React from "react";
import { FaEye, FaLink } from "react-icons/fa";

export default ({ img, duration }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration={duration}
        className="project_card overflow-hidden  bg-[#f6f4f9] mb-[20px] lg:mb-[0px] mx-auto rounded-lg text-left w-[385px] md:w-[330px] lg:w-[265px] xl:w-[320px]"
      >
        <div className="relative overflow-hidden">
          <img src={img} className="w-full  rounded-t-lg" alt="" />
          <div className="portfolio-overlay project_card_btn">
            <a href="#">
              <FaEye />
            </a>
            <a href="#">
              <FaLink />
            </a>
          </div>
        </div>
        <div className="p-[30px]">
          <div className="text-[17px] font-[600] text-[#6222cc]">
            UI / UX Design
          </div>
          <div className="text-[20px] font-semibold ">
            Digital Agency Website Design And Development
          </div>
        </div>
      </div>
    </div>
  );
};
