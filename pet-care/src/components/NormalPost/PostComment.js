import React from "react";
import "../../componentStyle/NormalPost/PostComment.css";
export default function PostComment() {
  return (
    <div className="post-comment-holder">
      <div className="comment-word">Comment</div>
      <div className="post-comment-scroll">
        <div className="post-comment-card-holder"></div>
      </div>
    </div>
  );
}
