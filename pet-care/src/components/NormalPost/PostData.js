import React from "react";
import "../../componentStyle/NormalPost/PostData.css";
import PostUserInformation from "../../shaerdComponents/PostUserInformation";
import PostDescription from "../../shaerdComponents/PostDescription";
import PostComment from "./PostComment";

export default function PostData() {
  return (
    <div className="post-data-holder">
      <PostUserInformation />
      <div className="post-data-description-comment-carosil-holder">
        <div className="post-data-description-comment">
          <PostDescription />
          <PostComment />
        </div>
        <div className="post-data-carosil"></div>
      </div>
    </div>
  );
}
