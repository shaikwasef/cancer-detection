// @ts-nocheck
import React, { useRef } from "react";
import Styles from "../Styles/components/file-uploader.module.scss";

export const FileUploader = ({ handleFile }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded); // ADDED
  };

  return (
    <div className={Styles.dragDropContainer}>
      <h4>Upload Image</h4>
      <div className={Styles.uploadContainer}>
        <p className={Styles.uploadMessage}>
          <span onClick={handleClick}>Browse image</span> to upload
        </p>
        <input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};
