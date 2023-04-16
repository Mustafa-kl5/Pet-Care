import React from "react";
import "../../componentStyle/NormalPost/CommentCard.css";
import userImage from "../../Image/cat.jpg";
export default function CommentCard() {
  return (
    <div className="comment-card-holder">
      <div className="comment-image-username-time">
        <div
          className="comment-image"
          style={{ backgroundImage: `url("${userImage}")` }}
        ></div>
        <div className="comment-username">mustafa mahmood</div>
        <div className="comment-time">2 month</div>
      </div>
      <div className="comment-value">
        hard hard hardhardhard hardhard hardhard hard hard hard hardhardhard
        hardhard hardhard hard hard hard
      </div>
    </div>
  );
}
