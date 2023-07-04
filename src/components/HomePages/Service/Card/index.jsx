import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default (props) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration={props.duration}
        className="service_card text-center w-auto bg-[#f6f4f9] rounded-xl p-[50px] lg:p-[35px] mb-[30px] md:mb-0 relative"
      >
        <div className="flex justify-center items-center  ">
          <div className="text-center service_card_icon text-[32px] text-white w-[100px] h-[82px] flex justify-center items-center">
            {props.icon}
          </div>
        </div>
        <div className="service_card_title text-[22px] font-semibold mt-[15px]">
          {props.title}
        </div>
        <div className="service_card_about text-[17px] text-[#726d78] mt-[15px]">
          {props.about}
        </div>
        <div>
          <button className="service_card_btn absolute ml-[-20px]">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
