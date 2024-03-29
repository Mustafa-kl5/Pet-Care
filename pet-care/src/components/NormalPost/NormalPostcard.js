import React, { useEffect, useState } from "react";
import "../../componentStyle/NormalPost/NormalPostcard.css";
import { Link, useNavigate } from "react-router-dom";
import PostLikeCommentSection from "./PostLikeCommentSection";

function NormalPostcard(props) {
  const [postData, setPostData] = useState(props.data);

  const navigate = useNavigate();
  const handleComment = () => {
    navigate(`/postData/:${props.id}`);
  };
  useEffect(() => {
    setPostData(props.data);
  }, [props.data]);
  return (
    <div className="normal-post-card-body">
      <Link to={`/postData/:${props.id}`}>
        <div>
          <img
            className="normal-post-card-image"
            src={postData.postImage?.fileName}
            alt="post image"
          />
        </div>
      </Link>
      <div className="footer-section">
        <div className="normal-post-card-user-info">
          <div
            className="normal-post-card-user-image"
            style={{ backgroundImage: `url("${postData.ownerImage}")` }}
          ></div>
          <div className="normal-post-card-user-name">{postData.postOwner}</div>
        </div>

        <PostLikeCommentSection
          postID={props.id}
          height="1rem"
          width="1rem"
          height1="1.5rem"
          width1="1.5rem"
          commentFunction={handleComment}
        />
      </div>
    </div>
  );
}

export default NormalPostcard;
