import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first!");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Access-Control-Allow-Origin": "*" }, // OPTIONAL
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <div className="page">
        <h3 className="text-xl font-bold mb-2">Upload Image</h3>
        <input type="file" onChange={handleFileChange} className="file" />
        <button onClick={handleUpload}>Upload & Detect</button>

        {result && (
          <div className="flexY flexX">
            <img
              src={`data:image/png;base64,${result.image}`}
              alt="Detection Result"
              className="imag"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
