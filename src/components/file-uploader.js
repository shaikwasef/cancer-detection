// @ts-nocheck
import React, { useRef } from "react";
import Styles from "../Styles/components/file-uploader.module.scss";
import useMediaQuery from "../custom-hooks/use-media-query";

export const FileUploader = ({ handleFile }) => {
  const isMobile = useMediaQuery(1000);
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded); // ADDED
  };

  const dropHandler = (ev) => {
    ev.preventDefault();
    const file = ev.dataTransfer.files[0];
    if (file && file.type.includes("image")) {
      handleFile(file);
    }
  };

  const dragOverHandler = (ev) => {
    ev.preventDefault();
  };

  return (
    <div
      className={Styles.dragDropContainer}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
    >
      <h4>Upload Image</h4>
      <div className={Styles.uploadContainer}>
        <p className={Styles.uploadMessage}>
          <span onClick={handleClick}>Browse image</span> {isMobile && <br />}{" "}
          or {isMobile && <br />}
          <span className={Styles.drapDropSpan}>
            Drag and Drop {isMobile && <br />}
          </span>
          to upload image
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
