import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";

const LiveCamera = () => {
  const webcamRef = useRef(null);
  const [detecting, setDetecting] = useState(false);

  const captureFrame = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      console.log("Captured Frame:", imageSrc);
      // Send imageSrc to YOLO backend
    }
  };

  useEffect(() => {
    let interval;
    if (detecting) {
      interval = setInterval(captureFrame, 2000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [detecting]);

  return (
    <div className="page" id="demo">
      <h3 className="text-3xl font-semibold text-white mb-6">
        Real-Time Damage Detection
      </h3>
      <Webcam ref={webcamRef} screenshotFormat="image/png" className="web" />
      <br />
      <button
        onClick={() => setDetecting(!detecting)}
        className={`px-6 py-3 rounded-lg text-white shadow-lg ${
          detecting ? "bg-red-600" : "bg-green-600"
        } hover:opacity-80 transition duration-300`}
      >
        {detecting ? "Stop Detection" : "Start Detection"}
      </button>
    </div>
  );
};

export default LiveCamera;
