import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

export default ({ img, name, job, duration }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration={duration}
        className="our_team_card w-[385px] md:w-[325px] lg:w-[265px] xl:w-[320px]  rounded-lg bg-[#F6F4F9] mx-auto mb-[20px]"
      >
        <div className="p-[24px]">
          <div>
            <img src={img} className="rounded-full" alt="" />
          </div>
          <div className="text-[20px] font-semibold text-center mt-[15px]">
            {name}
          </div>
          <div className="text-[17px] text-[#726d7b] text-center mt-[10px]">
            {job}
          </div>
        </div>
        <hr />
        <div className="p-[24px] our_link">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};
