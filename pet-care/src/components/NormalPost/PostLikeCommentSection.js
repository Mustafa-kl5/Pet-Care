import React, { useState } from "react";
import likeIcon from "../../Image/like.png";
import commentIcon from "../../Image/comments.png";
import "../../componentStyle/NormalPost/PostLikeCommentSection.css";

export default function PostLikeCommentSection(props) {
  const [numberOfLikes, setNumberOfLikes] = useState(100);
  const [numberOfComments, setNumberOfComments] = useState("140");
  const handleLike = () => {
    setNumberOfLikes(numberOfLikes + 1);
  };

  return (
    <form>
      <div className="like-comment-section">
        <div className="normal-post-item">
          <div
            className="like-comment-icon"
            style={{
              backgroundImage: `url("${likeIcon}")`,
              width: `${props.width}`,
              height: `${props.height}`,
            }}
            onClick={handleLike}
          ></div>
          <div className="like-comment-number">{numberOfLikes}</div>
        </div>
        <div className="normal-post-item">
          <div
            className="comment-icon"
            style={{
              backgroundImage: `url("${commentIcon}")`,
              width: `${props.width1}`,
              height: `${props.height1}`,
            }}
            onClick={props.commentFunction}
          ></div>
          <div className="like-comment-number">{numberOfComments}</div>
        </div>
      </div>
    </form>
  );
}
