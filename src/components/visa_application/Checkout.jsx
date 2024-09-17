import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home_page/visaExpertLogo.png";
import cheak from "../../assets/images/cheak.png";
import photo from "../../assets/images/Group.png";
import passport from "../../assets/images/Group-1.png";
import detail from "../../assets/images/Group 22.png";
import checkout from "../../assets/images/Group 23.png";
import trust from "../../assets/images/trust.png";
import img from "../../assets/images/Group 27.png";
import img2 from "../../assets/images/Group 9331.png";

function Checkout() {
  return (
    <>
      <div>
        <div id="header">
          <Link to="/">
            <div className="flex items-center cursor-pointer px-6 md:px-[6vw] mb-6">
              <img src={logo} className="h-20 w-20" alt="Logo" />
              <div className="flex flex-col ml-2">
                <span className="flex-none font-bold text-lg">Visa Expert</span>
                <div className="bg-red-400 h-[1px]"></div>
                <p className="text-[0.5rem]">Where the journey begins!</p>
              </div>
            </div>
          </Link>
        </div>
        <div
          id="main"
          className="flex flex-col md:flex-row items-center md:items-start justify-between"
        >
          {/* Left */}
          <div
            id="left"
            className="flex flex-col hidden md:block shadow-lg px-3 py-10 mb-6 md:mb-0"
          >
            {["Dates", "Photo", "Passport", "Detail", "Cheakout"].map(
              (step, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center mb-4"
                >
                  <span className="text-sm text-blue-theme">{step}</span>
                  <div className="w-8 h-9">
                    <img
                      src={
                        {
                          Dates: cheak,
                          Photo: cheak,
                          Passport: cheak,
                          Detail: cheak,
                          Cheakout: checkout,
                        }[step]
                      }
                      alt=""
                    />
                  </div>
                  {index < 4 && (
                    <div className="bg-blue-theme h-12 w-[1px]"></div>
                  )}
                </div>
              )
            )}
          </div>
          {/* Center */}
          <div
            id="center"
            className="flex flex-col justify-center items-center md:ml-8 lg:ml-32 mb-6 md:mb-0 px-6"
           
          >
            <div className="relative flex gap-2 bg-blue-theme px-8 py-2  justify-center items-center rounded-full">
              <img src={trust} className="" alt="" />
              <p className="text-white">Visa on 19 sep, 1174 PM</p>
            </div>
            <div className="mt-20 shadow-2xl px-10 py-14 w-[26rem] rounded-xl "
             style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }} 
            >
              <p className="text-sm font-bold">Australia Visa</p>
              <div className="mt-2">
                <span className="text-xs p-1  bg-gray-300 block w-[7rem] rounded-xl px-2">
                  view passenger
                </span>
              </div>
              <div className="flex justify-between gap-20 mt-6">
                <p className="text-xs font-semibold  mt-2">VisaExpert fee</p>
                <p className="text-xs font-semibold  mt-2">PKR 9,123</p>
              </div>
              <div className="flex justify-between gap-20">
                <p className="text-xs font-semibold  mt-2">Total</p>
                <p className="text-xs font-semibold  mt-2">PKR 9,183</p>
              </div>

              <p className="text-xs text-gray-400 text-center mt-5">
                Pay our service fee only when we deliver visa on time
              </p>

              <Link to={"/"}>
                <button className="text-xs text-center bg-yellow-500 rounded-lg w-full py-3 mt-3">
                  Pay Visa Fee & Submit
                </button>
              </Link>
            </div>
          </div>
          {/* Right */}
          <div id="right" className="w-full md:w-80 shadow-2xl md:mt-0">
            <div className="px-7 py-8">
              <p className="text-xs font-semibold">Time for you Close-Up</p>
              <p className="text-xs mt-2 text-balance">
                Your photo is important. Make sure your photo showcases your
                lovely smile, has a clear bright background, and your face is
                clearly visible.
              </p>
              {[
                "Position your head in the oval",
                "Make sure you're in a well-lit area",
                "Remove glasses",
                "Avoid glares and blurs",
              ].map((tip, index) => (
                <div key={index} className="flex mt-4 gap-2 items-center">
                  <img src={img2} className="w-6 h-4" alt="" />
                  <p className="text-xs text-balance">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
