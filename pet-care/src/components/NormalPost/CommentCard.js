import React from "react";
import "../../componentStyle/NormalPost/CommentCard.css";
import userImage from "../../Image/cat.jpg";
export default function CommentCard(props) {
  const givenDate = new Date(props.commentTime);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - givenDate.getTime();
  const differenceInHours = Math.round(differenceInTime / (1000 * 3600));
  return (
    <div className="comment-card-holder">
      <div className="comment-image-username-time">
        <div
          className="comment-image"
          style={{ backgroundImage: `url("${props.userImage}")` }}
        ></div>
        <div className="comment-username">{props.commentName}</div>
        <div className="comment-time">{differenceInHours}Ago</div>
      </div>
      <div className="comment-value">{props.commentValue}</div>
    </div>
  );
}
