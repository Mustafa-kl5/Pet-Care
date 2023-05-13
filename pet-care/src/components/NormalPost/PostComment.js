import React, { useEffect, useState } from "react";
import "../../componentStyle/NormalPost/PostComment.css";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import api from "../../services/api";
export default function PostComment(props) {
  const postId = props.postId;
  const [comments, setComments] = useState();
  const getComments = async () => {
    const response = await api.get(`/getComments/:${postId}`);
    setComments(response.data);
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="post-comment-holder">
      <div className="comment-word">Comment</div>
      <div className="post-comment-card-holder">
        <div className="post-comment-scroll">
          <div className="grid-comment">
            {comments?.postComments?.map((comment, index) => {
              return (
                <CommentCard
                  key={index}
                  userImage={comments?.commentOwnerImage}
                  commentName={comments?.commentOwnerName}
                  commentTime={comment?.commentTime}
                  commentValue={comment?.commentDescription}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <CommentForm textareaRef={props.inputRef} postId={postId} />
        </div>
      </div>
    </div>
  );
}
