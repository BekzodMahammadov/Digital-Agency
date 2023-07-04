import React, { useState, useEffect } from "react";
import { FaDigitalTachograph } from "react-icons/fa";
import { BsSearch, BsCheck } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import Img from "../../../assets/img/about.png";
import { FaCertificate, FaUsers } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
// import { AnimationOnScroll } from "react-animation-on-scroll";

export default () => {
  const [state, setState] = useState(0);

  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        setState(count);
      }, 6000);
    }
  };
  useEffect(() => {
    counter(0, 1234);
  }, []);

  return (
    <div>
      <div className="about pt-[150px]">
        <div className="about_top px-[20px] text-center grid grid-cols-1 md:px-[40px] lg:grid-cols-3 lg:px-[90px] lg:gap-[30px] xl:px-[150px]">
          <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="about_top_card p-[24px] w-auto bg-[#F6F4F9] rounded-xl mx-auto mb-[20px]"
          >
            <div className="flex justify-center items-center text-[54px] text-[#6222cc]">
              <FaDigitalTachograph />
            </div>
            <div className="text-[20px] font-semibold text-[#04000b] mt-[10px]">
              Digital Marketing
            </div>
            <div className="text-[17px] text-[#726d7b] mt-[10px]">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem.
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="about_top_card p-[24px] w-auto bg-[#F6F4F9] rounded-xl mx-auto mb-[20px]"
          >
            <div className="flex justify-center items-center text-[54px] text-[#6222cc]">
              <BsSearch />
            </div>
            <div className="text-[20px] font-semibold text-[#04000b] mt-[10px]">
              Digital Marketing
            </div>
            <div className="text-[17px] text-[#726d7b] mt-[10px]">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem.
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="about_top_card p-[24px] w-auto bg-[#F6F4F9] rounded-xl mx-auto mb-[20px]"
          >
            <div className="flex justify-center items-center text-[54px] text-[#6222cc]">
              <MdComputer />
            </div>
            <div className="text-[20px] font-semibold text-[#04000b] mt-[10px]">
              Digital Marketing
            </div>
            <div className="text-[17px] text-[#726d7b] mt-[10px]">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem.
            </div>
          </div>
        </div>
        <div className="about_bottom mt-[150px] grid grid-cols-1 lg:grid-cols-2 px-[20px] md:px-[40px] lg:px-[90px]">
          <div
            data-aos="fade-up"
            ata-aos-duration="500"
            className="about_bottom_left w-[385px] md:w-full lg:w-[416px] mx-auto mb-[40px]"
          >
            <div className="text-[17px] text-[#fba504] font-semibold">
              About Us
            </div>
            <div className="text-[40px] text-[#04000b] font-bold">
              #1 Digital solution with 10 years of experience
            </div>
            <div className="text-[17px] text-[#726d7b] mt-[30px]">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
              labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
              sit clita duo justo eirmod magna dolore erat amet
            </div>
            <div className="flex flex-col gap-[20px] mt-[30px]">
              <div className="flex flex-col gap-[15px]">
                <div className="flex justify-between">
                  <p className="text-[17px] text-[#726d7b]">
                    Digital Marketing
                  </p>
                  <p className="text-[17px] text-[#726d7b]">85%</p>
                </div>
                <div className="w-full h-[5px] bg-[#fba504] rounded-full progress overflow-hidden">
                  {/* <span className="w-[85%] md:w-[85%] lg:w-[380px] bg-[#fba504] h-full progress_bar block"></span> */}
                  <motion.div
                    animate={{
                      width: "15%",
                    }}
                    transition={{
                      delay: 4,
                      duration: 2,
                    }}
                    className="bg-[#e9ecef] h-full progress_bar block"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex justify-between">
                  <p className="text-[17px] text-[#726d7b]">SEO & Backlinks</p>
                  <p className="text-[17px] text-[#726d7b]">90%</p>
                </div>
                <div className="h-[5px] w-full bg-[#6222cc] rounded-full progress overflow-hidden">
                  {/* <span className="w-[90%]  bg-[#6222cc] h-full progress_bar block"></span> */}
                  <motion.div
                    animate={{
                      width: "10%",
                    }}
                    transition={{
                      delay: 4,
                      duration: 2,
                    }}
                    className="bg-[#e9ecef] h-full progress_bar block"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex justify-between">
                  <p className="text-[17px] text-[#726d7b]">
                    Design & Development
                  </p>
                  <p className="text-[17px] text-[#726d7b]">95%</p>
                </div>
                <div className=" w-full h-[5px] bg-[#04000b] rounded-full progress overflow-hidden">
                  {/* <span className="w-[95%]  bg-[#04000b] h-full progress_bar block"></span> */}
                  <motion.div
                    animate={{
                      width: "5%",
                    }}
                    transition={{
                      delay: 4,
                      duration: 2,
                    }}
                    className="bg-[#e9ecef] h-full progress_bar block"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[30px]">
              <button className="w-[103px] h-[38px] text-[#fff] md:w-[175px] md:h-[58px] bg-[#6222cc] rounded-full text-[16px] font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="about_bottom_right mx-auto flex items-center justify-start"
          >
            <img src={Img} className="lg:w-[408px] xl:w-[500px]" alt="" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="about_counter py-[60px] bg-[#6222CC] mt-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-[80px]"
        >
          <div className="text-center mx-auto w-[130px] mb-[30px]">
            <div className="text-[54px] text-[#fba504] flex justify-center">
              <FaCertificate />
            </div>
            <div className="text-[40px] text-white font-[700]">{state}</div>
            <div className="text-[17px] text-[#fff]">Years Experience</div>
          </div>
          <div className="text-center mx-auto w-[130px] mb-[30px]">
            <div className="text-[54px] text-[#fba504] flex justify-center">
              <HiUserGroup />
            </div>
            <div className="text-[40px] text-white font-[700]">{state}</div>
            <div className="text-[17px] text-[#fff]">Years Experience</div>
          </div>
          <div className="text-center mx-auto w-[130px] mb-[30px]">
            <div className="text-[54px] text-[#fba504] flex justify-center">
              <FaUsers />
            </div>
            <div className="text-[40px] text-white font-[700]">{state}</div>
            <div className="text-[17px] text-[#fff]">Years Experience</div>
          </div>
          <div className="text-center mx-auto w-[130px] mb-[30px]">
            <div className="text-[54px] text-[#fba504] flex justify-center">
              <BsCheck />
            </div>
            <div className="text-[40px] text-white font-[700]">{state}</div>
            <div className="text-[17px] text-[#fff]">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};
