import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { BsQuote } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

import Img1 from "../../../assets/img/testimonial-1.jpg";
import Img2 from "../../../assets/img/testimonial-2.jpg";
import Img3 from "../../../assets/img/testimonial-3.jpg";
import Img4 from "../../../assets/img/testimonial-4.jpg";

export default function App() {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="800">
        <div className="text-[17px] font-semibold text-[#fba504] text-center mt-[100px]">
          TESTIMONIAL
        </div>
        <div className="text-[40px] font-bold mt-[10px] text-center">
          What Say Our Clients!
        </div>
        <div className="flex justify-center mt-[30px] px-[20px] lg:px-[60px]">
          <div className="w-[95%] md:w-[90%] xl:w-[1040px] ">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="pt-[100px] h-[400px]"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                425: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1140: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide className="flex justify-end text-center mx-auto pt-[20px]">
                <div className="w-[385px] testimonial_card md:w-[640px] lg:w-[400px] xl:w-[470px] h-auto p-[30px] bg-[#f6f4f9] rounded-lg mx-auto">
                  <div>
                    <div className="flex flex-col text-left text-[20px] text-[#726d7b]">
                      <div className="flex items-center mt-[-70px]">
                        <span className="text-[120px]  text-[#6222CC]">
                          <BsQuote />
                        </span>
                        <span>Diam dolor sit.</span>
                      </div>
                      <div className="mt-[-30px]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit sed stet lorem sit clita duo justo.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px] mt-[15px] text-left">
                    <div>
                      <img
                        src={Img1}
                        className="w-[65px] rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-[20px] font-medium">Client Name</p>
                      <p className="text-[20px] text-[#726d7b]">Profession</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" flex justify-center text-center pt-[20px]">
                <div className="w-[385px] testimonial_card md:w-[640px] lg:w-[400px] xl:w-[470px] h-auto p-[30px] bg-[#f6f4f9] rounded-lg mx-auto">
                  <div>
                    <div className="flex flex-col text-left text-[20px] text-[#726d7b]">
                      <div className="flex items-center mt-[-70px]">
                        <span className="text-[120px]  text-[#6222CC]">
                          <BsQuote />
                        </span>
                        <span>Diam dolor sit.</span>
                      </div>
                      <div className="mt-[-30px]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit sed stet lorem sit clita duo justo.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px] mt-[15px] text-left">
                    <div>
                      <img
                        src={Img2}
                        className="w-[65px] rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-[20px] font-medium">Client Name</p>
                      <p className="text-[20px] text-[#726d7b]">Profession</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center text-center pt-[20px]">
                <div className="w-[385px] testimonial_card md:w-[640px] lg:w-[400px] xl:w-[470px] h-auto p-[30px] bg-[#f6f4f9] rounded-lg mx-auto">
                  <div>
                    <div className="flex flex-col text-left text-[20px] text-[#726d7b]">
                      <div className="flex items-center mt-[-70px]">
                        <span className="text-[120px]  text-[#6222CC]">
                          <BsQuote />
                        </span>
                        <span>Diam dolor sit.</span>
                      </div>
                      <div className="mt-[-30px]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit sed stet lorem sit clita duo justo.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px] mt-[15px] text-left">
                    <div>
                      <img
                        src={Img3}
                        className="w-[65px] rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-[20px] font-medium">Client Name</p>
                      <p className="text-[20px] text-[#726d7b]">Profession</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center text-center pt-[20px]">
                <div className="w-[385px] testimonial_card md:w-[640px] lg:w-[400px] xl:w-[470px] h-auto p-[30px] bg-[#f6f4f9] rounded-lg mx-auto">
                  <div>
                    <div className="flex flex-col text-left text-[20px] text-[#726d7b]">
                      <div className="flex items-center mt-[-70px]">
                        <span className="text-[120px]  text-[#6222CC]">
                          <BsQuote />
                        </span>
                        <span>Diam dolor sit.</span>
                      </div>
                      <div className="mt-[-30px]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit sed stet lorem sit clita duo justo.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px] mt-[15px] text-left">
                    <div>
                      <img
                        src={Img4}
                        className="w-[65px] rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-[20px] font-medium">Client Name</p>
                      <p className="text-[20px] text-[#726d7b]">Profession</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
