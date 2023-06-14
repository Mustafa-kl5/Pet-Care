import React from "react";
import "../../componentStyle/NormalPost/CommentCard.css";
import userImage from "../../Image/cat.jpg";
import { formatDistanceToNow } from "date-fns";

export default function CommentCard(props) {
  const givenDate = new Date(props.commentTime);
  const formattedTime = formatDistanceToNow(givenDate, { addSuffix: true });

  return (
    <div className="comment-card-holder">
      <div className="comment-image-username-time">
        <div
          className="comment-image"
          style={{ backgroundImage: `url("${props.userImage || userImage}")` }}
        ></div>

        <div className="comment-username-time">
          <div className="comment-username">{props.commentName}</div>

          <div className="comment-time">{formattedTime}</div>
        </div>
      </div>
      <div className="comment-value">{props.commentValue}</div>
    </div>
  );
}
