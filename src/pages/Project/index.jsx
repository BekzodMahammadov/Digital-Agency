import React from "react";
import Project from "../../components/HomePages/Project";

export default () => {
  return (
    <div>
      <div className="pages pt-[150px] pb-[200px] text-white flex justify-center items-center">
        <div className="about_page_about">
          <div className="text-[40px] font-bold text-center">Project</div>
          <div className="text-[16px] flex items-center gap-[10px]">
            <a href="#">Home / </a>
            <a href="#"> Pages / </a>
            <a href="#">Project</a>
          </div>
        </div>
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
};
