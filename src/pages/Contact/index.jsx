import React from "react";

export default () => {
  return (
    <div>
      <div className="pages pt-[150px] pb-[200px] text-white flex justify-center items-center">
        <div className="about_page_about">
          <div className="text-[40px] font-bold text-center">Contact</div>
          <div className="text-[16px] flex items-center gap-[10px]">
            <a href="#">Home / </a>
            <a href="#"> Pages / </a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="mt-[150px] text-center w-full  px-[20px]">
        <div className="text-[17px] font-semibold text-[#fba504] text-center">
          CONTACT US
        </div>
        <div className="text-[40px] font-bold text-center">
          Contact For Any Query
        </div>
        <div className=" text-[16px] text-[#726d7b] text-center flex justify-center mt-[30px]">
          <p className="md:w-[500px] px-[]">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
            <span className="text-[#6222CC]">Download Now.</span>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="contact_cont flex flex-col gap-[20px] mt-[40px]">
            <div className="flex justify-center contact_input gap-[13px]">
              <input
                type="text"
                className="w-[385px] h-[58px]  p-[16px] md:w-[340px] border border-[#C7CCD2] rounded-lg lg:w-[238px]"
                name=""
                id=""
                placeholder="Your Name"
              />
              <input
                type="text"
                className="w-[385px] h-[58px]  p-[16px] md:w-[340px] border border-[#C7CCD2] rounded-lg lg:w-[238px]"
                name=""
                id=""
                placeholder="Your Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-[385px]  h-[58px] p-[16px] md:w-[696px] border border-[#C7CCD2] rounded-lg lg:w-[493px]"
                name=""
                id=""
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="w-[385px] h-[150px]  p-[16px] md:w-[696px] border border-[#C7CCD2] rounded-lg lg:w-[493px]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button className="w-[385px]  h-[58px] p-[16px] md:w-[696px] bg-[#6222CC] text-[17px] text-white font-semibold rounded-lg lg:w-[493px] transition-all hover:bg-[#531dad]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
