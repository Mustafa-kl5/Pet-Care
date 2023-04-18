import React from "react";
import "../../componentStyle/NormalPost/PostComment.css";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
export default function PostComment(props) {
  return (
    <div className="post-comment-holder">
      <div className="comment-word">Comment</div>
      <div className="post-comment-card-holder">
        <div className="post-comment-scroll">
          <div className="grid-comment">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
        <div className="">
          <CommentForm textareaRef={props.inputRef} />
        </div>
      </div>
    </div>
  );
}
