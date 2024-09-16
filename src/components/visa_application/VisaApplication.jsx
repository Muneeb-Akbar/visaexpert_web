import React, { useState } from "react";
import ApplicationSignup from "./ApplicationSignup";
import SetPassword from "./SetPassword";
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
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(1);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="px-6 md:px-[6vw] mt-10">
          <div className="flex justify-between gap-8">
            <div id="left">
              <div>
                <img className="w-[30rem]" src={img} alt="" />
              </div>
              <div className="mt-4">
                <h1 className="text-2xl font-medium pl-3">
                  Apply now for guaranteed visa on <br />
                  <h1 className="text-blue-theme">15Aug 2024 at 11:30AM</h1>
                </h1>
                <div className="flex  items-center gap-3 mt-10">
                  <div className="bg-black h-[1px] w-full"></div>
                  <p className="text-xs">OR</p>
                  <div className="bg-black h-[1px] w-full"></div>
                </div>
                <div className="shadow-lg rounded-2xl px-6 py-2 mt-10">
                  <div className=" text-xs flex gap-3 justify-between items-center">
                    <div className="flex justify-center items-center gap-2 ">
                      <img className="w-10 " src={clock} alt="" />
                      <p className="text-xs">
                        Validity Period <br />
                        60 days
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-2 ">
                      <img className="w-12 " src={calender} alt="" />
                      <p>
                        Length of Stay <br />
                        30 days
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-2 ">
                      <img className="w-8 " src={arrow} alt="" />
                      <p>
                        Entry <br />
                        Single
                      </p>
                    </div>
                  </div>
                </div>
                <div className="shadow-lg  rounded-2xl mt-10">
                  <div className="flex bg-gray-100 rounded-t-2xl items-center gap-2 p-3">
                    <img className="w-6 " src={document} alt="" />
                    <p className="text-xs">Documents Required</p>
                  </div>
                  <div className="flex ">
                    <div className="flex items-center gap-2 p-3">
                      <img className="w-6 " src={photo} alt="" />
                      <p className="text-xs">Photo</p>
                    </div>
                    <div className="flex items-center gap-2 p-3">
                      <img className="w-6 " src={scan} alt="" />
                      <p className="text-xs">Passport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="right">
              <div className="shadow-2xl shadow-[#929292] rounded-3xl py-8 w-[30rem] ">
                <div className="w-full bg-blue-theme text-white text-left flex justify-center items-center py-2 font-bold text-sm">
                  <p>
                    Visa guaranteed on <br /> 15 Aug 2024 at 11:30 AM
                  </p>
                </div>
                <div className="px-9 py-2">
                  <div className="flex justify-between ">
                    <div className="flex justify-center items-end gap-1 mt-3">
                      <img className="w-5 " src={user} alt="" />
                      <p className="text-xs">Travelers</p>
                    </div>
                    <div className="text-xs flex gap-2 items-end">
                      <p
                        className="text-gray-400 cursor-pointer"
                        onClick={() => decrement()}
                      >
                        -
                      </p>
                      <p>{count}</p>
                      <p
                        className="text-gray-400 cursor-pointer"
                        onClick={() => increment()}
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div className="bg-black mt-3 h-[0.4px]"></div>
                  <div className="flex justify-between mt-4">
                    <div className="flex justify-center items-end gap-1">
                      <img className="w-6 " src={wallet} alt="" />
                      <p className="text-xs">Price</p>
                    </div>
                    <div className="text-xs flex gap-2 items-end">
                      <p>PKR 25,105</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="flex justify-center items-end gap-1">
                      <p className="text-xs">Total Amount</p>
                    </div>
                    <div className="text-xs flex gap-2 items-end">
                      <p>PKR 25,105</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link to={"/application/signup"}>
                      <button className="text-center w-full bg-[#FFB82E] p-2 rounded-full font-semibold">
                        Start Application
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-14">
            <div className="">
              <h1 className="font-bold text-black text-5xl ml-8">Review</h1>
              <div className="flex justify-center items-center mt-4 gap-2">
                <div className="flex gap-2  ">
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                </div>
                <div>
                  <p className="text-xs underline ">from 23,837 reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex  gap-16 mt-16 justify-center items-center ">
            <div className="w-[310px] h-[360px] shadow-lg hover:shadow-2xl rounded-3xl flex justify-evenly flex-col items-center px-6">
              <img src={booking} className="max-w-28" alt="" />
              <div>
                <h3 className="font-semibold text-sm">
                  Received visa in 12Hr - Phenomenal
                </h3>
                <p className="text-gray-500 pt-3 text-left">
                  We were recommended Visa by our friends who quotes Dubai visa
                  coming in 24 hrs with Visa... Read More
                </p>
              </div>
            </div>
            <div className="w-[310px] h-[360px] shadow-lg hover:shadow-2xl rounded-3xl flex justify-evenly flex-col items-center px-6">
              <img src={booking} className="max-w-28" alt="" />
              <div>
                <h3 className="font-semibold text-sm">
                  Received visa in 12Hr - Phenomenal
                </h3>
                <p className="text-gray-500 pt-3 text-left">
                  We were recommended Visa by our friends who quotes Dubai visa
                  coming in 24 hrs with Visa... Read More
                </p>
              </div>
            </div>
            <div className="w-[310px] h-[360px] shadow-lg hover:shadow-2xl rounded-3xl flex justify-evenly flex-col items-center px-6">
              <img src={booking} className="max-w-28" alt="" />
              <div>
                <h3 className="font-semibold text-sm">
                  Received visa in 12Hr - Phenomenal
                </h3>
                <p className="text-gray-500 pt-3 text-left">
                  We were recommended Visa by our friends who quotes Dubai visa
                  coming in 24 hrs with Visa... Read More
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default VisaApplication;
