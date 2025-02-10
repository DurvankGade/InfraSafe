import React, { useState } from "react";
import axios from "axios";
import { div } from "@tensorflow/tfjs";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <div>
      <div className="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-2">Upload Image</h2>
        <input type="file" onChange={handleFileChange} className="mb-2" />
        <button
          onClick={handleUpload}
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          Upload & Detect
        </button>

        {result && (
          <img
            src={`data:image/png;base64,${result.image}`}
            alt="Detection Result"
          />
        )}
      </div>
    </div>
  );
};

export default Upload;
