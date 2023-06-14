import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "../shaerdComponentStyle/ImageUploder.css";
import uploadIcon from "../Image/uploadIcon.png";
import { FileUploader } from "react-drag-drop-files";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    props.sendImagesPath(images);
  }, [images]);
  const deleteImage = (indexToRemove) => {
    setImages(images.filter((item, index) => index !== indexToRemove));
    setImagesUrl(imagesUrl.filter((item, index) => index !== indexToRemove));
  };
  useImperativeHandle(ref, () => ({
    deleteImage,
  }));

  const handleTypeError = () => {
    notify(
      "You try to upload wrong Supported formates,Try one of these extensions:JPEG, PNG, GIF."
    );
  };
  const handleSizeError = () => {
    notify("he size of photos is to large try to choose another photo");
  };

  const notify = (massage) =>
    toast.warn(massage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
        onTypeError={handleTypeError}
        onSizeError={handleSizeError}
      />
      <ToastContainer />
    </div>
  );
});
export default ImageUploder;
