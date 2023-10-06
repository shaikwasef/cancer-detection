// @ts-nocheck
import "./App.css";
import React, { useState } from "react";
import { FileUploader } from "./components/file-uploader";

function App() {
  const [file, setFile] = useState(null);

  function handleFile(e) {
    setFile(e);
  }

  return (
    <>
      <FileUploader handleFile={handleFile} />
      {file && (
        <img
          alt="not found"
          width={"250px"}
          src={window.URL.createObjectURL(file)}
        />
      )}
    </>
  );
}

export default App;
