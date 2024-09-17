import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home_page/visaExpertLogo.png";
import cheak from "../../assets/images/cheak.png";
import photo from "../../assets/images/Group.png";
import passport from "../../assets/images/Group-1.png";
import detail from "../../assets/images/Group 22.png";
import checkout from "../../assets/images/Group 23.png";
import trust from "../../assets/images/trust.png";
import img from "../../assets/images/Group 27.png";
import Webcam from "react-webcam";
import img2 from "../../assets/images/Group 9331.png";
import Camera from "./Camera";
import { UseApplicationContext } from "../../contexts/applicationContext";

function UploadPhoto() {
  // ========================================
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const [takePhoto, setTakePhoto] = useState(true);
  const capture = () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image); // Store the captured image in the variable
  };
  // ===================
  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const { photo_img, setPhotoImg } = UseApplicationContext();
  const [preview, setPreview] = useState(photo_img || "");

  // Update the username in context when name changes and only if username doesn't already exist
  useEffect(() => {
    if (photo_img !== preview) {
      let p = preview;
      setPhotoImg(preview);
    }
  }, [preview, photo_img, setPhotoImg]);

  const v = UseApplicationContext();
  console.log(v);

  const imageCapture = (data) => {
    setPreview(data);
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Show a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      setPreview(imageData);

      // Store the image in localStorage
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div>
        <div id="header" className="">
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
        {/* <Link to={"/application/phone"}>
          <div className="px-6 pb-3">
            <button class="bg-gray-100 text-black font-bold py-2 px-4 rounded-full flex items-center space-x-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0L3.586 10l4.707-4.707a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Back</span>
            </button>
          </div>
        </Link> */}

        <div
          id="main"
          className="flex flex-col md:flex-row items-center md:items-start justify-between"
        >
          {/* Left */}
          <div
            id="left"
            className="flex md:flex-col flex-wrap shadow-lg px-3 py-10 mb-6 md:mb-0 hidden md:block"
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
                          Photo: photo,
                          Passport: passport,
                          Detail: detail,
                          Cheakout: checkout,
                        }[step]
                      }
                      alt=""
                    />
                  </div>
                  {index < 4 && (
                    <div className="bg-blue-theme md:h-12 md:w-[1px] h-1 w-12"></div>
                  )}
                </div>
              )
            )}
          </div>
          {/* Center */}
          <div
            id="center"
            className="flex flex-col justify-center items-center md:ml-8 lg:ml-32 mb-6 md:mb-0"
          >
            <div className="relative flex gap-2 bg-blue-theme px-8 py-2 justify-center items-center rounded-full">
              <img src={trust} className="" alt="" />
              <p className="text-white">Visa on 19 sep, 1174 PM</p>
            </div>
            {preview ? (
              <>
                <div className="w-[15.5rem] h-[15.5rem] mt-4">
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
                  <div className="w-40 mt-4">
                    <img src={img} alt="Preview" />
                  </div>
                ) : (
                  <Camera data={imageCapture} />
                )}
              </>
            )}

            <div className="bg-gray-200 w-full h-[2px] mt-7"></div>

            {preview ? (
              <div></div>
            ) : (
              <>
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
              </>
            )}

            <p className="mt-4 text-xs font-semibold text-green-700">
              Progress auto saved
            </p>
            <Link
              to={"/application/upload_passport"}
              className="mt-4 w-full border border-gray-200 py-1 "
            >
              <div className=" flex justify-center items-center rounded-lg cursor-pointer">
                <button className="text-[#1D1D5D]">Next</button>
              </div>
            </Link>
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

export default UploadPhoto;
