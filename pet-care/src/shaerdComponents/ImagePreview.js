import React from "react";
import "../shaerdComponentStyle/ImagePreview.css";
import imageIcon from "../Image/imageIcon.png";
import deleteIcon from "../Image/delete.png";
import cat from "../Image/cat.jpg";
import Post from "../pages/PostPage";

export default function ImagePreview(props) {
  // const images = Object.values(props.images);

  // images.map((item) => {
  //   // const reader = new FileReader();
  //   // reader.readAsDataURL(item);
  //   // console.log(reader.result);
  // });

  return (
    <div className="image-preview-holder">
      <div className="preview-logo-word">
        <div
          className="preview-logo"
          style={{ backgroundImage: `url("${imageIcon}")` }}
        ></div>
        <div className="preview-word">Images</div>
      </div>
      <div className="preview-scrollholder">
        <div className="card-image-preview-holder">
          {/* {.map((image, index) => {
            <div
              className="post-image-card"
              style={{ backgroundImage: `url("${cat}")` }}
            >
              <div
                className="delete-icon"
                style={{ backgroundImage: `url("${deleteIcon}")` }}
                onClick={props.handelDeleteImage}
              ></div>
            </div>;
          })} */}
          <div
            className="post-image-card"
            style={{ backgroundImage: `url("${cat}")` }}
          >
            <div
              className="delete-icon"
              style={{ backgroundImage: `url("${deleteIcon}")` }}
              onClick={props.handelDeleteImage}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
