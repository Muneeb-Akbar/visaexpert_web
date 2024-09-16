import React from "react";
import img1 from "../../assets/home_page/rectangle-10-1@2x copy.png";
import img2 from "../../assets/home_page/rectangle-9-1@2x copy.png";

const KeyFeatures = () => {
  return (
    <div className="relative px-6 h-auto mt-32 md:px-[6vw]  flex flex-col gap-12  lg:flex-row bg-white p-8 rounded-lg  md:h-[39rem] max-w-full mx-auto">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center ">
        <div className="text-left">
          <h1 className="text-red-500 font-semibold text-lg">KEY FEATURES</h1>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            We offer best services
          </h2>
          <p className="text-gray-500 mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        {/* Features List */}
        <div className="mt-8 space-y-4">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">We offer best services</h3>
              <p className="text-gray-500">
                Lorem Ipsum is not simply random text.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-200 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Schedule your trip</h3>
              <p className="text-gray-500">
                It has roots in a piece of classical.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-pink-500 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Get discounted coupons</h3>
              <p className="text-gray-500">
                Lorem Ipsum is not simply random text.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex md:justify-center item relative mt-8 lg:mt-0 lg:ml-8">
        <img className="absolute h-[28rem] w-[18rem] rounded-full z-[1]" src={img2} alt="" />

        <img className=" relative left-20 top-44 h-[22rem] w-[16rem] rounded-full " src={img1} alt="" />
        {/* <div className="absolute top-4 left-40 md:left-96  bg-white p-2 rounded-lg shadow-lg z-[2]">
          <span className="text-black font-bold hover:font-extrabold cursor-pointer">Paradise on Earth</span>
        </div> */}
      </div>
    </div>
  );
};

export default KeyFeatures;
