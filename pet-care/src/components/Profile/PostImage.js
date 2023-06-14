import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/PostImage.css";
import imageIcon from "../../Image/imageIcon.png";
import deleteIcon from "../../Image/delete.png";

export default function PostImage(props) {
  const [images, setImages] = useState(new Set());
  const [uploadImages, setUploadImages] = useState([]);
  const [imagesToRender, setImagesToRender] = useState([]);

  useEffect(() => {
    props.sendNewImages(imagesToRender);
  }, [imagesToRender]);

  useEffect(() => {
    const mergedImages = [...images, ...uploadImages];
    setImagesToRender(mergedImages);
  }, [uploadImages, images]);

  useEffect(() => {
    setUploadImages(props.imagesBase64);
  }, [props.imagesBase64]);

  useEffect(() => {
    setImages(new Set());
  }, [props.nextPost]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchImage = async (url) => {
          const response = await fetch(url);
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64Data = reader.result;
            setImages((prevImages) => new Set(prevImages).add(base64Data));
          };
          reader.readAsDataURL(blob);
        };

        const imageUrls = props.images.map((image) => image.fileName);
        const newImages = [];
        for (const url of imageUrls) {
          if (!images.has(url)) {
            newImages.push(url);
          }
        }
        if (newImages.length > 0) {
          for (const url of newImages) {
            await fetchImage(url);
          }
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (props.images && props.images.length > 0) {
      fetchImages();
    }
  }, [props.images]);

  const deleteImage = (index) => {
    const updatedImages = [...imagesToRender];
    updatedImages.splice(index, 1);
    setImagesToRender(updatedImages);
  };

  return (
    <div className="edit-image-preview-holder">
      <div className="edit-preview-logo-word">
        <div
          className="edit-preview-logo"
          style={{ backgroundImage: `url("${imageIcon}")` }}
        ></div>
        <div className="edit-preview-word">Images</div>
      </div>
      <div
        className="edit-preview-scrollholder"
        style={{ minHeight: `${props.minHeight}` }}
      >
        <div
          className="edit-card-image-preview-holder"
          style={{ minHeight: `${props.minHeight}` }}
        >
          {imagesToRender.map((imageUrl, index) => (
            <div
              className="edit-post-image-card"
              style={{ backgroundImage: `url("${imageUrl}")` }}
              key={index}
            >
              <div
                className={
                  props.active ? "edit-delete-icon-hidden" : "edit-delete-icon"
                }
                style={{ backgroundImage: `url("${deleteIcon}")` }}
                onClick={() => deleteImage(index)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
