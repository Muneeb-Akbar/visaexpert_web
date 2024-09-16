import React, { useState } from "react";
import visa from "../../assets/home_page/istockphoto1053519076612x612removebgpreview-1@2x.png";
import hotel from "../../assets/home_page/pngclipartkoregonhotelvillaclarkfreeportzoneaccommodationhotelanglefurnitureremovebgpreview-1-1@2x.png";
import train from "../../assets/home_page/imagesremovebgpreview-3-1@2x.png";
import cars from "../../assets/home_page/pngtreeisolatedwhitebackgroundcariconwithfrontvieweps10vectorillustrationofcarsymbolvectorpngimage-46313110removebgpreview-1-1@2x.png";
import Radio from "./Radio";
import TravelForm from "./TravelForm";

function SearchSection() {
  const [activeTab, setActiveTab] = useState(null); // To track the active tab

  const handleActiveTab = (tab) => {
    setActiveTab(tab); // Set the active tab on click
  };

  function radioData(data) {
    console.log(data);
  }

  return (
    <div className="px-2 md:px-[6vw]">
      <div>
        <p className="flex mt-6 gap-2 justify-center items-center">
          <span className="text-2xl text-red-theme font-inter font-extrabold md:font-bold md:text-7xl">
            EXPLORE
          </span>
          <span className="text-2xl font-inter font-extrabold md:text-7xl md:font-bold">
            THE DIFFERENCES
          </span>
        </p>
        <h2 className="md:text-3xl font-bold mt-2 mb-4 justify-center items-center flex">
          Travel freely, anywhere you want.
        </h2>
      </div>
      <div className="relative md:h-96">
        {/* Static Div */}
        <div className="relative mt-14 flex justify-center z-[2]">
          <div className="relative rounded-3xl flex gap-0 h-16 w-80 shadow-md z-[2] bg-white px-5 md:w-[50%] justify-between">
            {/* Visa */}
            <div
              className={`relative flex items-center g-0 w-20  cursor-pointer  ${
                activeTab === "visa"
                  ? "text-red-400 font-bold"
                  : "text-gray-500"
              }   `}
              onClick={() => handleActiveTab("visa")}
            >
              <span className="flex justify-end items-center font-bold text-xs">
                Visa
              </span>
              <img
                src={visa}
                className="absolute left-4 h-10 w-10 md:h-14 md:w-14"
                style={
                  activeTab === "visa"
                    ? {
                        filter:
                          "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%)",
                        hover: {
                          filter:
                            "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%);",
                        },
                      }
                    : {}
                }
                alt="Visa"
              />
            </div>

            {/* Hotels */}
            <div
              className={`relative flex items-center g-0 w-24 cursor-pointer ${
                activeTab === "hotel"
                  ? "text-red-400 font-bold"
                  : "text-gray-500"
              }   `}
              onClick={() => handleActiveTab("hotel")}
            >
              <span className="flex justify-center items-center font-bold text-xs">
                Hotels
              </span>
              <img
                src={hotel}
                className="absolute left-9 h-8 w-10 md:h-10 md:w-12 opacity-80"
                style={
                  activeTab === "hotel"
                    ? {
                        filter:
                          "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%)",
                        hover: {
                          filter:
                            "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%);",
                        },
                      }
                    : {}
                }
                alt="Hotels"
              />
            </div>

            {/* Train */}
            <div
              className={`relative flex items-center g-0 w-20 cursor-pointer ${
                activeTab === "train"
                  ? "text-red-400 font-bold"
                  : "text-gray-500"
              }   `}
              onClick={() => handleActiveTab("train")}
            >
              <span className="flex justify-center items-center font-bold text-xs">
                Train
              </span>
              <img
                src={train}
                className="absolute left-6 md:h-10 md:w-12 h-8 w-10 opacity-80"
                style={
                  activeTab === "train"
                    ? {
                        filter:
                          "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%)",
                        hover: {
                          filter:
                            "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%);",
                        },
                      }
                    : {}
                }
                alt="Train"
              />
            </div>

            {/* Cars */}
            <div
              className={`relative flex items-center g-0 w-20 cursor-pointer ${
                activeTab === "cars"
                  ? "text-red-400 font-bold"
                  : "text-gray-500"
              }   `}
              onClick={() => handleActiveTab("cars")}
            >
              <span className="flex font-bold text-xs">Cars</span>
              <img
                src={cars}
                className="absolute left-6 opacity-80 md:h-14 md:w-14 h-12 w-12"
                style={
                  activeTab === "cars"
                    ? {
                        filter:
                          "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%)",
                        hover: {
                          filter:
                            "brightness(0) saturate(100%) invert(35%) sepia(100%) hue-rotate(-50deg) saturate(500%);",
                        },
                      }
                    : {}
                }
                alt="Cars"
              />

            </div>
          </div>
        </div>


        {/* Absolute Div */}
        <div className="md:bg-[#F9F9F9] h-80 w-full mb-10 justify-center md:absolute z-[1] top-8 rounded-3xl flex flex-col items-center">
          <Radio data={radioData} />
          <TravelForm data = {activeTab} />
          <button className="bg-button-color rounded-full px-4 py-2 text-white text-base w-48 h-16">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
