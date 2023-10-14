// @ts-nocheck
import React, { useState } from "react";
import Styles from "./Styles/components/app.module.scss";
import { FileUploader } from "./components/file-uploader";

function App() {
  const [file, setFile] = useState(null);

  function handleFile(e) {
    setFile(e);
  }

  return (
    <div className={Styles.appContainer}>
      <FileUploader handleFile={handleFile} />
      {file && (
        <img
          alt="not found"
          width={"250px"}
          src={window.URL.createObjectURL(file)}
          className={Styles.image}
        />
      )}
    </div>
  );
}

export default App;
