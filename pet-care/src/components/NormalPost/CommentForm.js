import React from "react";
import "../../componentStyle/NormalPost/Comment.css";
export default function CommentForm() {
  return (
    <form className="comment-form">
      <input placeholder="Write comment.." className="comment-input" />
    </form>
  );
}
