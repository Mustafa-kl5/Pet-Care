import React, { useRef } from "react";
import "../../componentStyle/NormalPost/PostData.css";
import PostUserInformation from "../../shaerdComponents/PostUserInformation";
import PostDescription from "../../shaerdComponents/PostDescription";
import PostComment from "./PostComment";
import PostDataCarousel from "../../shaerdComponents/PostDataCarousel";
import PostLikeCommentSection from "./PostLikeCommentSection";

export default function PostData() {
  const inputRef = useRef(null);

  const handleComment = () => {
    inputRef.current.focus();
  };
  return (
    <div className="post-data-holder">
      <PostUserInformation />
      <div className="post-data-description-comment-carosil-holder">
        <div className="post-data-description-comment">
          <PostDescription />
          <PostComment inputRef={inputRef} />
        </div>
        <div className="post-data-carosil">
          <PostDataCarousel />
          <PostLikeCommentSection
            height="1.5rem"
            width="1.5rem"
            height1="2rem"
            width1="2rem"
            commentFunction={handleComment}
          />
        </div>
      </div>
    </div>
  );
}
