import React from "react";
// import { IoCallSharp } from "react-icons/io";
import { MdLocationOn, MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

import Img1 from "../../assets/img/portfolio-1.jpg";
import Img2 from "../../assets/img/portfolio-2.jpg";
import Img3 from "../../assets/img/portfolio-3.jpg";
import Img4 from "../../assets/img/portfolio-4.jpg";
import Img5 from "../../assets/img/portfolio-5.jpg";
import Img6 from "../../assets/img/portfolio-6.jpg";

export default () => {
  return (
    <div>
      <div className="footer w-full h-auto pt-[150px]  bg-[#6222cc] text-white ">
        <div className="footer_top grid grid-cols-1 px-[20px] md:grid-cols-2 md:px-[40px] lg:grid-cols-4 lg:px-[70px] xl:px-[110px]">
          <div className="footer_item flex flex-col gap-[21px] md:mx-auto mb-[40px] lg:w-[150px]">
            <div className="text-[20px] font-semibold uppercase">Adress</div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[10px] text-[17px] ">
                <span className="text-[22px]">
                  <MdLocationOn />
                </span>{" "}
                123 Street, New York, USA
              </div>
              <div className="flex items-center gap-[10px] text-[17px] ">
                <span className="text-[22px]">
                  <MdCall />
                </span>{" "}
                +012 345 67890
              </div>
              <div className="flex items-center gap-[10px] text-[17px] ">
                <span className="text-[22px]">
                  <GrMail />
                </span>{" "}
                info@example.com
              </div>
              <div className="footer_link">
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
          <div className="footer_item flex flex-col gap-[21px] md:mx-auto mb-[40px] lg:w-[150px]">
            <div className="text-[20px] font-semibold uppercase">
              QUICK LINK
            </div>
            <div className="flex flex-col gap-[10px] text-[17px] link_spacing">
              <div>
                <a href="#" className="flex  items-center gap-[10px]">
                  <AiOutlineRight />
                  About Us
                </a>
              </div>
              <div>
                <a href="#" className="flex  items-center gap-[10px]">
                  <AiOutlineRight />
                  Contact Us
                </a>
              </div>
              <div>
                <a href="#" className="flex  items-center gap-[10px]">
                  <AiOutlineRight />
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="#" className="flex  items-center gap-[10px]">
                  <AiOutlineRight />
                  Terms & Condition
                </a>
              </div>
              <div>
                <a href="#" className="flex  items-center gap-[10px]">
                  <AiOutlineRight />
                  Career
                </a>
              </div>
            </div>
          </div>
          <div className="footer_item flex flex-col gap-[21px] md:mx-auto mb-[40px] lg:w-[190px] xl:w-[220px]">
            <div className="text-[20px] font-semibold uppercase">GALLERY</div>
            <div className="grid grid-cols-3 gap-[10px]">
              <img
                src={Img1}
                className="w-[120px] md:w-[102px] lg:w-[70px] "
                alt=""
              />
              <img
                src={Img2}
                className="w-[120px] md:w-[102px] lg:w-[70px] "
                alt=""
              />
              <img
                src={Img3}
                className="w-[120px] md:w-[102px] lg:w-[70px] "
                alt=""
              />
              <img
                src={Img4}
                className="w-[120px] md:w-[102px] lg:w-[70px] "
                alt=""
              />
              <img
                src={Img5}
                className="w-[120px] md:w-[102px] lg:w-[70px] "
                alt=""
              />
              <img
                src={Img6}
                className="w-[120px] md:w-[102px] lg:w-[70px] "
                alt=""
              />
            </div>
          </div>
          <div className="footer_item flex flex-col gap-[21px] md:mx-auto md-[40px] lg:w-[150px]">
            <div className="text-[20px] font-semibold uppercase">
              NEWSLETTER
            </div>
            <div className="lg:w-[180px] text-[17px]">
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
              Curabitur facilisis ornare velit non vulpu
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="w-[385px] h-[48px] md:w-[324px] lg:w-[180px] px-[24px] py-[6px] rounded-full"
                placeholder="Your Email"
              />
              <button className=" text-[28px] text-[#6222CC] ml-[-40px]">
                <FaTelegramPlane />
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-[20px] mx-[20px] md:mx-[40px] lg:mx-[80px] xl:mx-[150px]" />
        <div className="footer_bottom w-full py-[30px] flex justify-between md:px-[40px] lg:px-[80px] xl:px-[150px] text-[14px]">
          <div>
            <a href="#" className="underline">
              © Your Site Name
            </a>
            ,
            <span>
              All Right Reserved. Designed By
              <span>
                <a href="#" className="underline">
                  {" "}
                  HTML Codex{" "}
                </a>
              </span>
            </span>
            <br />
            Distributed By a
            <span>
              <a href="#" className="underline">
                ThemeWagon
              </a>
            </span>
          </div>
          <div>
            <a href="#">Home |</a>
            <a href="#"> Cookies |</a>
            <a href="#"> Help |</a>
            <a href="#"> FQAs</a>
          </div>
        </div>
      </div>
    </div>
  );
};
