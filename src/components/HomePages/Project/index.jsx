import React from "react";
import Img1 from "../../../assets/img/portfolio-1.jpg";
import Img2 from "../../../assets/img/portfolio-2.jpg";
import Img3 from "../../../assets/img/portfolio-3.jpg";
import Img4 from "../../../assets/img/portfolio-4.jpg";
import Img5 from "../../../assets/img/portfolio-5.jpg";
import Img6 from "../../../assets/img/portfolio-6.jpg";
import Card from "./Card";

const data = [
  {
    id: 1,
    img: Img1,
    duration: "400",
  },

  {
    id: 2,
    img: Img2,
    duration: "700",
  },
  {
    id: 3,
    img: Img3,
    duration: "1000",
  },

  {
    id: 4,
    img: Img4,
    duration: "400",
  },
  {
    id: 5,
    img: Img5,
    duration: "700",
  },
  {
    id: 6,
    img: Img6,
    duration: "1000",
  },
];

export default () => {
  return (
    <div>
      <div className="project text-center mt-[150px]">
        <div className="text-[17px] font-semibold text-[#fba504]">
          OUR PROJECTS
        </div>
        <div className="text-[40px] font-bold mt-[10px]">
          Recently Completed Projects
        </div>
        <div className="flex items-center justify-center gap-[20px] text-[17px] mt-[20px] font-medium">
          <a href="#" className="text-[#6222CC] underline">
            All
          </a>
          <a href="#" className="hover:text-[#6222CC] hover:underline">
            Web Design
          </a>
          <a href="#" className="hover:text-[#6222CC] hover:underline">
            Graphic Design
          </a>
        </div>

        <div className="project_cont mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px] md:px-[40px] lg:px-[90px] xl:px-[150px]">
          {data.map((item) => (
            <Card key={item.id} img={item.img} duration={item.duration} />
          ))}
        </div>
      </div>
    </div>
  );
};
