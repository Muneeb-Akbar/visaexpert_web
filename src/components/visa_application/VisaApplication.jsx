import React, { useState } from "react";
import { Link } from "react-router-dom";
import clock from "../../assets/images/images__8_-removebg-preview (1) 1.png";
import calender from "../../assets/images/images__3_-removebg-preview 2.png";
import arrow from "../../assets/images/Arrow 1.png";
import document from "../../assets/images/Group 42.png";
import scan from "../../assets/images/Group-1.png";
import photo from "../../assets/images/Group.png";
import start from "../../assets/home_page/star-2.svg";
import booking from "../../assets/images/booking 1.png";
import Navbar from "../navbar/Navbar";
import img from "../../assets/images/image 1.png";
import user from "../../assets/images/Group 22 copy.png";
import wallet from "../../assets/images/3359235-removebg-preview 1.png";
import Footer from "../footer/Footer";

function VisaApplication() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-6 md:px-[6vw] mt-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div id="left" className="md:w-1/2">
            <img className="w-full max-w-sm md:max-w-full mx-auto" src={img} alt="" />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl font-medium pl-3 text-center md:text-left">
                Apply now for guaranteed visa on
                <br />
                <span className="text-blue-theme">15Aug 2024 at 11:30AM</span>
              </h1>
              <div className="flex items-center gap-3 mt-10">
                <div className="bg-black h-[1px] w-full"></div>
                <p className="text-xs">OR</p>
                <div className="bg-black h-[1px] w-full"></div>
              </div>
              <div className="shadow-lg rounded-2xl px-6 py-2 mt-10">
                <div className="text-xs flex gap-3 justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <img className="w-10" src={clock} alt="" />
                    <p>
                      Validity Period <br />
                      60 days
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <img className="w-12" src={calender} alt="" />
                    <p>
                      Length of Stay <br />
                      30 days
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <img className="w-8" src={arrow} alt="" />
                    <p>
                      Entry <br />
                      Single
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-lg rounded-2xl mt-10">
                <div className="flex bg-gray-100 rounded-t-2xl items-center gap-2 p-3">
                  <img className="w-6" src={document} alt="" />
                  <p className="text-xs">Documents Required</p>
                </div>
                <div className="flex flex-wrap">
                  <div className="flex items-center gap-2 p-3">
                    <img className="w-6" src={photo} alt="" />
                    <p className="text-xs">Photo</p>
                  </div>
                  <div className="flex items-center gap-2 p-3">
                    <img className="w-6" src={scan} alt="" />
                    <p className="text-xs">Passport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="right" className="md:w-[36%]" >
            <div className="shadow-2xl shadow-[#929292] rounded-3xl py-8 w-full" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
              <div className="bg-blue-theme text-white flex justify-center items-center py-2 font-bold text-sm">
                <p>
                  Visa guaranteed on <br /> 15 Aug 2024 at 11:30 AM
                </p>
              </div>
              <div className="px-6 sm:px-9 py-2">
                <div className="flex justify-between">
                  <div className="flex items-end gap-1 mt-3">
                    <img className="w-5" src={user} alt="" />
                    <p className="text-xs">Travelers</p>
                  </div>
                  <div className="text-xs flex gap-2 items-end">
                    <p
                      className="text-gray-400 cursor-pointer"
                      onClick={decrement}
                    >
                      -
                    </p>
                    <p>{count}</p>
                    <p
                      className="text-gray-400 cursor-pointer"
                      onClick={increment}
                    >
                      +
                    </p>
                  </div>
                </div>
                <div className="bg-black mt-3 h-[0.4px]"></div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-end gap-1">
                    <img className="w-6" src={wallet} alt="" />
                    <p className="text-xs">Price</p>
                  </div>
                  <p className="text-xs">PKR 25,105</p>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-xs">Total Amount</p>
                  <p className="text-xs">PKR 25,105</p>
                </div>
                <div className="mt-8">
                  <Link to={"/application/signup"}>
                    <button className="w-full bg-[#FFB82E] p-2 rounded-full font-semibold">
                      Start Application
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-14">
          <h1 className="font-bold text-black text-3xl sm:text-5xl ml-8">
            Review
          </h1>
          <div className="flex items-center mt-4 gap-2">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={start} alt="star" />
              ))}
            </div>
            <p className="text-xs underline">from 23,837 reviews</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-16 justify-center items-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-full sm:w-[310px] h-[360px] shadow-lg hover:shadow-2xl rounded-3xl flex flex-col items-center px-6"
            >
              <img src={booking} className="w-28" alt="" />
              <h3 className="font-semibold text-sm">
                Received visa in 12Hr - Phenomenal
              </h3>
              <p className="text-gray-500 pt-3 text-left">
                We were recommended Visa by our friends who quotes Dubai visa
                coming in 24 hrs with Visa... Read More
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VisaApplication;
