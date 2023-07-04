import React from "react";
import Testimonial from "../../components/HomePages/Testimonials";

export default () => {
  return (
    <div>
      <div className="pages pt-[150px] pb-[200px] text-white flex justify-center items-center">
        <div className="about_page_about">
          <div className="text-[40px] font-bold text-center">Testimonial</div>
          <div className="text-[16px] flex items-center gap-[10px]">
            <a href="#">Home / </a>
            <a href="#"> Pages / </a>
            <a href="#">Testimonial</a>
          </div>
        </div>
      </div>
      <div>
        <Testimonial />
      </div>
    </div>
  );
};
