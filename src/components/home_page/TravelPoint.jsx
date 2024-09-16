import React from 'react';
import travel from "../../assets/home_page/Group 9238.png"

const TravelPoint = () => {
  return (
    <div className="px-6 md:px-[6vw] flex flex-col-reverse gap-7 bg-white mt-32 md:flex-row justify-center items-center">
      {/* Left side - Image and Discounted Price */}
      <div className="relative flex flex-col items-center md:w-[50%]">
        <img src={travel} alt="" />
      </div>

      {/* Right side - Text and Statistics */}
      <div className="md:ml-12">
        <div className="text-left">
          <h1 className="text-red-500 font-semibold text-lg">TRAVEL POINT</h1>
          <h2 className="text-3xl font-bold mt-2 mb-4">We helping you find your dream location</h2>
          <p className="text-gray-500 mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-red-500">500+</h3>
            <p className="text-gray-500">Holiday Package</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-red-500">100</h3>
            <p className="text-gray-500">Luxury Hotel</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-red-500">7</h3>
            <p className="text-gray-500">Premium Airlines</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-red-500">2k+</h3>
            <p className="text-gray-500">Happy Customer</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TravelPoint;
