import React, { useRef, useState } from "react";
import "../../componentStyle/NormalPost/PostData.css";
import PostUserInformation from "../../shaerdComponents/PostUserInformation";
import PostDescription from "../../shaerdComponents/PostDescription";
import PostComment from "./PostComment";
import PostDataCarousel from "../../shaerdComponents/PostDataCarousel";
import PostLikeCommentSection from "./PostLikeCommentSection";

export default function PostData(props) {
  const [post, setPost] = useState(props.postData);
  const inputRef = useRef(null);
  const handleComment = () => {
    inputRef.current.focus();
  };
  return (
    <div className="post-data-holder">
      <PostUserInformation
        name={post.postOwner}
        postTime={post.postTime}
        userImage={post.author.userImage}
      />
      <div className="post-data-description-comment-carosil-holder">
        <div className="post-data-description-comment">
          <PostDescription postDescription={post.description} />
          <PostComment inputRef={inputRef} postId={post._id} />
        </div>
        <div className="post-data-carosil">
          <PostDataCarousel postImage={post.Images} />
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
