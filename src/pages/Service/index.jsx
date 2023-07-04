import React from "react";
import Service from "../../components/HomePages/Service";

export default () => {
  return (
    <div>
      <div className="pages pt-[150px] pb-[200px] text-white flex justify-center items-center">
        <div className="about_page_about">
          <div className="text-[40px] font-bold text-center">Service</div>
          <div className="text-[16px] flex items-center gap-[10px]">
            <a href="#">Home / </a>
            <a href="#"> Pages / </a>
            <a href="#">Service</a>
          </div>
        </div>
      </div>
      <div>
        <Service />
      </div>
    </div>
  );
};
