import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home_page/visaExpertLogo.png";
import cheak from "../../assets/images/cheak.png";
import detail from "../../assets/images/Group 22.png";
import checkout from "../../assets/images/Group 23.png";
import trust from "../../assets/images/trust.png";
import img2 from "../../assets/images/Group 9331.png";
import { UseApplicationContext } from "../../contexts/applicationContext";

function Detail() {
  // State for form values
  const { passport_data, setPassportData } = UseApplicationContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    passportNumber: "",
    dateOfBirth: "",
    passportIssuedOn: "",
    passportValidTil: "",
  });

  // Sync formData with passport_data on first render or when passport_data changes
  useEffect(() => {
    if (passport_data) {
      setFormData({
        firstName: passport_data.first_name || "",
        lastName: passport_data.last_name || "",
        gender: passport_data.gender || "",
        passportNumber: passport_data.passport_number || "",
        dateOfBirth: passport_data.date_of_birth || "",
        passportIssuedOn: passport_data.passport_issue_on || "",
        passportValidTil: passport_data.passport_valid_til || "",
      });
    }
  }, [passport_data]);

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [id]: value,
      };

      // Update passport_data as well when formData changes
      setPassportData((prevPassportData) => ({
        ...prevPassportData,
        first_name: updatedData.firstName,
        last_name: updatedData.lastName,
        gender: updatedData.gender,
        passport_number: updatedData.passportNumber,
        date_of_birth: updatedData.dateOfBirth,
        passport_issue_on: updatedData.passportIssuedOn,
        passport_valid_til: updatedData.passportValidTil,
      }));

      return updatedData;
    });
  };

  const [button, setButton] = useState(true);

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
          className=" flex flex-col md:flex-row items-center md:items-start  justify-between"
        >
          {/* Left */}
          <div
            id="left"
            className="flex hidden md:block  flex-col shadow-lg px-3 py-10 mb-6 md:mb-0"
          >
            {["Dates", "Photo", "Passport", "Detail", "Checkout"].map(
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
                          Detail: detail,
                          Checkout: checkout,
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
          {button ? (
            <div
              id="center"
              className="px-6 flex flex-col justify-center items-center md:ml-8 lg:ml-32 mb-6 md:mb-0"
            >
              <div>
                <div className="relative flex gap-2 bg-blue-theme px-8 py-2 justify-center items-center rounded-full">
                  <img src={trust} className="" alt="" />
                  <p className="text-white">Visa on 19 sep, 1174 PM</p>
                </div>
                <div>
                  <div className="bg-gray-300 px-4 py-2 rounded-md mt-10">
                    <p className="text-sm">Visa Validity</p>
                  </div>
                  <div className="flex gap-8 mt-4">
                    <p className="text-sm text-gray-600">
                      From <br /> Sep 21, 2024
                    </p>
                    <p className="text-sm text-gray-600">
                      Until <br /> Sep 21, 2024
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-300 px-4 py-2 rounded-md mt-4">
                    <p className="text-sm">Personal Information</p>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex gap-2 mt-6">
                      <div className="flex flex-col relative">
                        <label
                          htmlFor="firstName"
                          className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                        />
                      </div>

                      <div className="flex flex-col relative">
                        <label
                          htmlFor="lastName"
                          className="top-[-10px]  left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <div className="flex flex-col relative">
                        <label
                          htmlFor="gender"
                          className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                        >
                          Gender
                        </label>
                        <input
                          type="text"
                          id="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                        />
                      </div>

                      <div className="flex flex-col relative">
                        <label
                          htmlFor="passportNumber"
                          className="top-[-10px]  left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                        >
                          Passport Number
                        </label>
                        <input
                          type="text"
                          id="passportNumber"
                          value={formData.passportNumber}
                          onChange={handleInputChange}
                          className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <div className="flex flex-col relative">
                        <label
                          htmlFor="dateOfBirth"
                          className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                        >
                          Date of Birth
                        </label>
                        <input
                          type="text"
                          id="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                        />
                      </div>

                      <div className="flex flex-col relative">
                        <label
                          htmlFor="passportValidTil"
                          className="top-[-10px]  left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                        >
                          Passport Valid Til
                        </label>
                        <input
                          type="text"
                          id="passportValidTil"
                          value={formData.passportValidTil}
                          onChange={handleInputChange}
                          className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-300 px-4 py-2 rounded-md mt-4">
                    <p className="text-sm">Document Submitted</p>
                  </div>
                  
                  
                </div>
                
              </div>
              <Link
                to={"/application/checkout"}
                className="mt-4 w-full border bg-blue-theme py-3 rounded-2xl "
              >
                <div className=" flex justify-center items-center rounded-lg cursor-pointer">
                  <button className="text-white">Submit</button>
                </div>
              </Link>
            </div>
          ) : null}

          <div id="right" className="w-full md:w-80 shadow-2xl md:mt-0">
            <div className="px-7 py-8">
              <p className="text-xs font-semibold">Time for you Close-Up</p>
              <p className="text-xs mt-2 text-balance">
                Your photo is important.Make sure your photo showcase your
                lovely smile.has a clear bright background and your face is
                clearly visible
              </p>
              {[
                "Open front/back page of passport",
                "Align passport in frame",
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

export default Detail;
