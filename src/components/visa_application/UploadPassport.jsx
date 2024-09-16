import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/home_page/visaExpertLogo.png";
import cheak from "../../assets/images/cheak.png";
import passport from "../../assets/images/Group-1.png";
import detail from "../../assets/images/Group 22.png";
import checkout from "../../assets/images/Group 23.png";
import trust from "../../assets/images/trust.png";
import img2 from "../../assets/images/Group 9331.png";
import img from "../../assets/images/Group copy.png";
import Camera from "./Camera";
import { UseApplicationContext } from "../../contexts/applicationContext";

function UploadPassport() {
  const navigate = useNavigate();

  // Handle navigation to different steps
  const handleClick = (step) => {
    if (step === "Dates") {
      navigate("/application/upload_photo"); // Navigate to the upload photo route
    }
  };

  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const [takePhoto, setTakePhoto] = useState(true);

  // Capture photo from the webcam
  const capture = () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image); // Store the captured image in the variable
  };

  const inputRef = useRef(null);

  // Trigger file input click
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const { passport_img, setPassportImg } = UseApplicationContext();
  const { passport_data, setPassportData } = UseApplicationContext({});
  const v = UseApplicationContext();
  const [preview, setPreview] = useState(passport_img || "");
  const [apiData, setApiData] = useState({});
 

  // Update the passport image in context and make API call if preview changes
  useEffect(() => {
    if (passport_img !== preview) {
      setPassportImg(preview);
    }
    console.log("apiData======", v);
    if (apiData != passport_data) {
      setPassportData({
        first_name: apiData.names,
        last_name: apiData.surname,
        gender: apiData.sex,
        passport_number: apiData.number,
        date_of_birth: apiData.date_of_birth,
        passport_issue_on: "",
        passport_valid_til: apiData.expiration_date,
      });
    }
    if (preview) {
      // API call for base64 format image
      fetch("http://127.0.0.1:8000/extract-passport-data/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_data: preview }),
      })
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [preview, passport_img, setPassportImg,apiData]);

  // Handle image capture from the camera
  const imageCapture = (data) => {
    setPreview(data);
  };

  // Handle file selection and preview
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Show a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      setPreview(imageData);

      // API call for file method
      // const formData = new FormData();
      // formData.append("file", file);
      // fetch("http://127.0.0.1:8000/extract-passport-data/", {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data))
      //   .catch((error) => console.error("Error:", error));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div>
        <div id="header">
          <Link to="/">
            <div className="flex items-center cursor-pointer md:px-[6vw] mb-6">
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
          {/* Left section with steps */}
          <div
            id="left"
            className="flex flex-col shadow-lg px-3 py-10 mb-6 md:mb-0"
          >
            {["Dates", "Photo", "Passport", "Detail", "Cheakout"].map(
              (step, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center mb-4 cursor-pointer"
                  onClick={() => handleClick(step)}
                >
                  <span className="text-sm text-blue-theme">{step}</span>
                  <div className="w-8 h-9">
                    <img
                      src={
                        {
                          Dates: cheak,
                          Photo: cheak,
                          Passport: passport,
                          Detail: detail,
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
          {/* Center section with photo upload or capture */}
          <div
            id="center"
            className="flex flex-col justify-center items-center md:ml-8 lg:ml-32 mb-6 md:mb-0"
          >
            <div className="relative flex gap-2 bg-blue-theme px-8 py-2 justify-center items-center rounded-full">
              <img src={trust} className="" alt="" />
              <p className="text-white">Visa on 19 sep, 1174 PM</p>
            </div>
            <p className="mt-4 text-[10px] w-48 text-left font-semibold text-blue-theme">
              The Australia government requires front page of your Passport ID
            </p>

            {preview ? (
              <>
                <div className="w-[24rem] mt-4">
                  <img src={preview} alt="" />
                </div>
                <div className="mt-4 w-full border bg-blue-theme py-1 flex justify-center items-center rounded-lg cursor-pointer">
                  <button
                    className="text-white"
                    onClick={() => setPreview(false)}
                  >
                    Retake Photo
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="mt-4 text-sm font-semibold text-blue-theme">
                  Upload Or Take A Selfie
                </p>
                {takePhoto ? (
                  <>
                    <div className="w-80 mt-6">
                      <img src={img} alt="" />
                    </div>
                    <div className="text-xs bg-[#AFAFAF] w-full text-center text-white mt-4 py-3 rounded-b-xl">
                      Please take a photo of the front of your passport
                    </div>
                  </>
                ) : (
                  <Camera data={imageCapture} />
                )}
              </>
            )}

            <div className="mt-4 w-full border bg-blue-theme py-1 flex justify-center items-center rounded-lg cursor-pointer">
              <button
                className="text-white"
                onClick={() => setTakePhoto(false)}
              >
                Take Photo
              </button>
            </div>
            <div
              className="mt-4 w-full border border-gray-200 py-1 flex justify-center items-center rounded-lg cursor-pointer"
              onClick={handleImageClick}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={inputRef}
                className="hidden"
              />
              <button className="text-[#1D1D5D]">Upload</button>
            </div>
            <div className="bg-gray-200 w-full h-[2px] mt-7"></div>
            <p className="mt-4 text-xs font-semibold text-green-700">
              Progress auto saved
            </p>
            <Link
              to={"/application/detail"}
              className="mt-4 w-full border border-gray-200 py-1"
            >
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                <button className="text-[#1D1D5D]">Next</button>
              </div>
            </Link>
          </div>
          {/* Right section with scanning tips */}
          <div id="right" className="w-full md:w-80 shadow-2xl md:mt-0">
            <div className="px-7 py-8">
              <p className="text-xs font-semibold">Passport Scan</p>
              <p className="text-xs mt-2 text-balance">
                We need a scan of your passport to make sure you are who you say
                you are.
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

export default UploadPassport;
