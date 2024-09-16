import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const Camera = (props) => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  props.data(imageSrc);

  // Capture the image from the webcam
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      setImageSrc(image); // Store the captured image
    }
  }, [webcamRef, setImageSrc]);

  // Webcam settings
  const videoConstraints = {
    width: 390,
    height: 400,
    facingMode: "user", // 'user' for front camera; use 'environment' for rear camera
  };

  return (
    <div>
      <Webcam
        className="rounded-md"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints} // Ensure video constraints are applied
        onUserMediaError={(err) => console.error("Webcam Error:", err)}
      />

      <div className="mt-4 w-full border bg-blue-theme py-1 flex justify-center items-center rounded-lg cursor-pointer">
        <button className="text-white" onClick={capture}>
          Capture Photo
        </button>
      </div>
    </div>
  );
};

export default Camera;
