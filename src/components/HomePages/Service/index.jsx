import React from "react";
import { BsSearch, BsAndroid2 } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import {
  FaFacebookF,
  FaDigitalTachograph,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import Card from "./Card";

const data = [
  {
    id: 1,
    title: "SEO Optimization",
    about:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    icon: <BsSearch />,
    duration: "400",
  },
  {
    id: 2,
    title: "SEO Optimization",
    about:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    icon: <MdOutlineComputer />,
    duration: "700",
  },
  {
    id: 3,
    title: "SEO Optimization",
    about:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    icon: <FaFacebookF />,
    duration: "1000",
  },
  {
    id: 4,
    title: "SEO Optimization",
    about:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    icon: <FaDigitalTachograph />,
    duration: "400",
  },
  {
    id: 5,
    title: "SEO Optimization",
    about:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    icon: <AiFillLike />,
    duration: "700",
  },
  {
    id: 6,
    title: "SEO Optimization",
    about:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    icon: <BsAndroid2 />,
    duration: "1000",
  },
];

export default () => {
  return (
    <div>
      <div className="service mt-[150px]">
        <div className="service_cards">
          <div className="text-[17px] font-semibold text-center text-[#fba504]">
            OUR SERVICES
          </div>
          <div className="text-[#04000b] text-[40px] font-bold text-center">
            What Solutions We Provide
          </div>
          <div className="container mt-[40px] grid grid-cols-1 px-[20px] md:grid-cols-2 md:px-[40px] md:gap-[30px] lg:grid-cols-3 lg:px-[90px] xl:px-[160px]">
            {data.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                about={item.about}
                icon={item.icon}
                duration={item.duration}
              />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="service_input text-center w-full h-auto bg-[#6222CC] py-[70px] mt-[150px] px-[20px]"
        >
          <div className="text-[17px] font-semibold text-white">NEWSLETTER</div>
          <div className="text-[40px] font-bold text-white mt-[20px]">
            Stay Always In Touch
          </div>
          <div className="text-[16px] text-[#fff] mt-[20px]">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat <br /> ipsum et lorem et sit sed stet lorem sit
            clita duo justo
          </div>
          <div className="mt-[20px] flex items-center justify-center">
            <input
              type="text"
              className="w-[380px] md:w-[500px] h-[50px] rounded-full py-[6px] px-[24px] outline-none"
              placeholder="Enter Your Email"
            />
            <button className=" text-[28px] text-[#6222CC] ml-[-40px]">
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
