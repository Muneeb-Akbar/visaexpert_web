import React from "react";
import vector from "../../assets/home_page/vector.svg";
import vision from "../../assets/home_page/Ellipse 22.png";
import start from "../../assets/home_page/star-2.svg";

function FeedBack() {
  return (
    <>
     
      <div className="z-[1]    md:px-[6vw] px-6">
        <div className="flex flex-col justify-center md:justify-normal items-center h-[58rem] md:h-auto z-[1]">
          <h1 className="text-red-500 font-semibold text-lg">TESTIMONIALS</h1>
          <h2 className="text-4xl font-bold mt-2 mb-2">Trust out clients</h2>
          <img
            className="h-28 w-28 rounded-full mb-16 mt-[3.75rem]"
            src={vision}
            alt=""
          />
          <h1 className="font-bold text-red-theme ">
            Mark Smith /Travel Enthusiast
          </h1>
          <div className="flex mt-3">
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
          </div>
          <p className="text-gray-500 mt-4 ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
      </div>
    </>
  );
}

export default FeedBack;
