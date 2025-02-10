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
    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 rounded-xl shadow-xl text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Real-Time Damage Detection
      </h2>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/png"
        className="rounded-xl shadow-lg mb-4"
      />
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
