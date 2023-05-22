import React, { useEffect, useState } from "react";
import "../../componentStyle/NormalPost/PostComment.css";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import api from "../../services/api";
import LoadingBar from "../../shaerdComponents/LoadingBar";
export default function PostComment(props) {
  const postId = props.postId;
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reloadComments, setReloadComments] = useState(false);
  const getComments = async () => {
    const response = await api.get(`/getComments/:${postId}`);
    setComments(response.data);
    setIsLoading(false);
  };

  const reciveReloadState = () => {
    setReloadComments(true);
  };

  useEffect(() => {
    getComments();
    setReloadComments(false);
  }, [reloadComments]);
  return (
    <div className="post-comment-holder">
      <div className="comment-word">Comment</div>
      <div className="post-comment-card-holder">
        <div
          className={
            isLoading ? "post-comment-scroll center" : "post-comment-scroll"
          }
        >
          {isLoading ? (
            <LoadingBar />
          ) : (
            <div
              className={
                comments?.length === 0 ? "center-empty-comment" : "grid-comment"
              }
            >
              {comments?.length === 0 ? (
                <div className="noComment-massage">
                  No comments yet <br /> Be the first to comment
                </div>
              ) : (
                comments?.map((comment, index) => {
                  return (
                    <CommentCard
                      key={index}
                      userImage={comment?.ownerImage}
                      commentName={comment?.commentOwner}
                      commentTime={comment?.commentTime}
                      commentValue={comment?.commentDescription}
                    />
                  );
                })
              )}
            </div>
          )}
        </div>
        <div className="">
          <CommentForm
            textareaRef={props.inputRef}
            postId={postId}
            sendReloadState={reciveReloadState}
          />
        </div>
      </div>
    </div>
  );
}
