import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "../shaerdComponentStyle/ImageUploder.css";
import uploadIcon from "../Image/uploadIcon.png";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["jpge", "png", "jpg"];

const ImageUploder = forwardRef((props, ref) => {
  const [images, setImages] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const handleChange = (file) => {
    const uploadedImages = Object.values(file);
    setImages([...images, ...uploadedImages]);
  };
  useEffect(() => {
    const urls = [];
    const readerPromises = images.map((element) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          urls.push(reader.result);
          resolve();
        };
        reader.readAsDataURL(element);
      });
    });

    Promise.all(readerPromises).then(() => {
      setImagesUrl(urls);
      props.sendImages(urls);
    });
  }, [images]);
  const deleteImage = (indexToRemove) => {
    setImages(images.filter((item, index) => index !== indexToRemove));
    setImagesUrl(imagesUrl.filter((item, index) => index !== indexToRemove));
  };
  useImperativeHandle(ref, () => ({
    deleteImage,
  }));

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
});
export default ImageUploder;
