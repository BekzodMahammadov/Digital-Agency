import React from "react";
import Header from "../../components/HomePages/Header";
import About from "../../components/HomePages/About";
import Service from "../../components/HomePages/Service";
import Project from "../../components/HomePages/Project";
import OurTeam from "../../components/HomePages/Our Team";
import Testimonials from "../../components/HomePages/Testimonials";

export default () => {
  return (
    <div className="">
      <Header />
      <About />
      <Service />
      <Project />
      <Testimonials />
      <OurTeam />
    </div>
  );
};
