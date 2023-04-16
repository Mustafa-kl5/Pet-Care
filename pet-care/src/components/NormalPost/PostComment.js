import React from "react";
import "../../componentStyle/NormalPost/PostComment.css";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
export default function PostComment() {
  return (
    <div className="post-comment-holder">
      <div className="comment-word">Comment</div>
      <div className="post-comment-scroll">
        <div className="post-comment-card-holder">
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
        <CommentForm />
      </div>
    </div>
  );
}
