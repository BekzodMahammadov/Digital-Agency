import React from "react";
import Img1 from "../../../assets/img/team-1.jpg";
import Img2 from "../../../assets/img/team-2.jpg";
import Img3 from "../../../assets/img/team-3.jpg";
import Card from "./Card";

const data = [
  {
    id: 1,
    name: "John Doe",
    job: "CEO & Founder",
    img: Img1,
    duration: "400",
  },
  {
    id: 2,
    name: "Jessica Brown",
    job: "Web Designer",
    img: Img2,
    duration: "700",
  },
  {
    id: 3,
    name: "Tony Johnson",
    job: "SEO Expert",
    img: Img3,
    duration: "1000",
  },
];

export default () => {
  return (
    <div>
      <div className="our_team mt-[150px]">
        <div className="text-[17px] font-semibold text-[#fba504] text-center">
          OUR TEAM
        </div>
        <div className="text-[40px] font-bold mt-[10px] text-center">
          Our Team Members
        </div>
        <div className="our_team_cont mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-[40px] lg:px-[75px] xl:px-[150px]">
          {data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              job={item.job}
              img={item.img}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
