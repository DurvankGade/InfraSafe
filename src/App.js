import React from "react";
import Upload from "./Components/Upload";
import LiveCamera from "./Components/Live";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-10 App">
      <h1 className="text-3xl font-bold mb-6 App">
        Structural Damage Detection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Upload />
        <LiveCamera />
      </div>
    </div>
  );
};

export default App;
