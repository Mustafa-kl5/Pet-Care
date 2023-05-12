import React, { useEffect, useState } from "react";
import likeIcon from "../../Image/like.png";
import emptyLikeIcon from "../../Image/empty-heart.png";
import commentIcon from "../../Image/comments.png";
import "../../componentStyle/NormalPost/PostLikeCommentSection.css";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { getUserId } from "../../hooks/auth/getUserId";

export default function PostLikeCommentSection(props) {
  const { postID } = useParams();
  const id = props.postID || postID.replace(/:/g, "");
  const [likesCount, setLikesCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    getPostLikes(getUserId());
  }, [liked, likesCount, props.postID, commentCount]);

  const getPostLikes = async (userId) => {
    const response = await api.get(`/getLikeNumber/:${id}`);
    setLikesCount(response.data.likeNumber);
    setLiked(response.data.likeList.some((item) => item.likeOwner === userId));
    setCommentCount(response.data.commentNumber);
  };
  const handleLike = async () => {
    const response = await api.post(`/addLike/:${id}`);
    setLikesCount(response.data.likeNumber);
    setLiked(!liked);
  };

  return (
    <form>
      <div className="like-comment-section">
        <div className="normal-post-item">
          <div
            className="like-comment-icon"
            style={{
              backgroundImage: `url("${liked ? likeIcon : emptyLikeIcon}")`,
              width: `${props.width}`,
              height: `${props.height}`,
            }}
            onClick={handleLike}
          ></div>
          <div className="like-comment-number">{likesCount}</div>
        </div>
        <div className="normal-post-item">
          <div
            className="comment-icon"
            style={{
              backgroundImage: `url("${commentIcon}")`,
              width: `${props.width1}`,
              height: `${props.height1}`,
            }}
            onClick={props.commentFunction}
          ></div>
          <div className="like-comment-number">{commentCount}</div>
        </div>
      </div>
    </form>
  );
}
