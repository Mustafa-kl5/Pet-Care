import React from "react";
import "../../componentStyle/NormalPost/CommentInput.css";
import commentIcon from "../../Image/comments.png";
import sendIcon from "../../Image/send.png";
import { useState } from "react";
export default function CommentForm(props) {
  const [commentValue, setCommentValue] = useState("");
  const commentHandler = (event) => {
    setCommentValue(event.target.value);
  };
  const handlSubmit = (event) => {
    event.preventDefault();
    setCommentValue("");
    console.log(commentValue);
  };
  return (
    <form className="comment-form" onSubmit={handlSubmit}>
      <div
        className="comment-form-icon"
        style={{ backgroundImage: `url("${commentIcon}")` }}
      ></div>
      <textarea
        placeholder="TYPE HERE.."
        type="text"
        className="comment-input"
        value={commentValue}
        onChange={commentHandler}
        ref={props.textareaRef}
      ></textarea>
      <button
        type="submit"
        className="send-form-icon"
        style={{ backgroundImage: `url("${sendIcon}")` }}
      ></button>
    </form>
  );
}
