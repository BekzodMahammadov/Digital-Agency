import React from "react";
import About from "../../components/HomePages/About";
import OurTeam from "../../components/HomePages/Our Team";

export default () => {
  return (
    <div>
      <div className="pages ">
        <div className="about_page_about">
          <div className="text-[40px] font-bold ">About Us</div>
          <div className="text-[16px] flex items-center gap-[10px]">
            <a href="#">Home / </a>
            <a href="#"> Pages / </a>
            <a href="#">About</a>
          </div>
        </div>
      </div>
      <div>
        <About />
        <OurTeam />
      </div>
    </div>
  );
};
