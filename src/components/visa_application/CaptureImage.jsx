// src/SelfieCapture.js
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const VisaApplication = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  return (
    <div>
      <Webcam
        audio={false}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={{
          facingMode: "user",
        }}
      />
      <button onClick={capture}>Capture</button>
      {image && (
        <div>
          <img src={image} alt="Selfie" />
        </div>
      )}
    </div>
  );
};

export default VisaApplication;
