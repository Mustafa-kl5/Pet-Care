import React from "react";
import "../../componentStyle/NormalPost/NormalPostcard.css";
import postIcon from "../../Image/cat.jpg";
import likeIcon from "../../Image/like.png";
import commentIcon from "../../Image/comments.png";

function NormalPostcard() {
  return (
    <div className="normal-post-card-body">
      <div className="normal-post-card-image"></div>
      <div className="footer-section">
        <div className="normal-post-card-user-info">
          <div
            className="normal-post-card-user-image"
            style={{ backgroundImage: `url("${postIcon}")` }}
          ></div>
          <div className="normal-post-card-user-name">Mustafa mahmood</div>
        </div>

        <div className="like-comment-section">
          <div className="normal-post-item">
            <div
              className="like-comment-icon"
              style={{ backgroundImage: `url("${likeIcon}")` }}
            ></div>
            <div className="like-comment-number">158</div>
          </div>
          <div className="normal-post-item">
            <div
              className="comment-icon"
              style={{ backgroundImage: `url("${commentIcon}")` }}
            ></div>
            <div className="like-comment-number">158</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NormalPostcard;
