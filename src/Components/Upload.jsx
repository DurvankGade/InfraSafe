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
      <div className="page">
        <h3 className="text-xl font-bold mb-2">Upload Image</h3>
        <input type="file" onChange={handleFileChange} className="file" />
        <button onClick={handleUpload}>Upload & Detect</button>

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
