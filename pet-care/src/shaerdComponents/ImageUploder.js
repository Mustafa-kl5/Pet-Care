import React, { useState } from "react";
import "../shaerdComponentStyle/ImageUploder.css";
import uploadIcon from "../Image/uploadIcon.png";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPEG", "PNG", "GIF"];
export default function ImageUploder(props) {
  const [images, setImages] = useState();
  const handleChange = (file) => {
    setImages(file);
    props.sendImages(images);
  };
  const children = (
    <div
      className="drag-drop-section"
      style={{ width: `${props.width}`, height: `${props.height}` }}
    >
      <div
        className="upload-icon"
        style={{ backgroundImage: `url("${uploadIcon}")` }}
      ></div>
      <div className="drag-massage">
        Drag & Drop images or <span className="browse-word">Browse</span>
      </div>
      <div className="support-type">Supported formates: JPEG, PNG, GIF.</div>
    </div>
  );
  return (
    <div className="image-upload-holder">
      <div className="upload-word">Upload</div>
      <FileUploader
        handleChange={handleChange}
        name="addpost-form"
        types={fileTypes}
        children={children}
        maxSize={20}
        multiple={true}
      />
    </div>
  );
}
