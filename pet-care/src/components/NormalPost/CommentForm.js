import React from "react";
import "../../componentStyle/NormalPost/CommentInput.css";
import commentIcon from "../../Image/comments.png";
import sendIcon from "../../Image/send.png";
export default function CommentForm() {
  return (
    <form className="comment-form">
      <div
        className="comment-form-icon"
        style={{ backgroundImage: `url("${commentIcon}")` }}
      ></div>
      <textarea placeholder="TYPE HERE.." className="comment-input"></textarea>
      <div
        className="send-form-icon"
        style={{ backgroundImage: `url("${sendIcon}")` }}
      ></div>
    </form>
  );
}
