import React from "react";
import "../../componentStyle/NormalPost/NormalPostcard.css";
import postIcon from "../../Image/cat.jpg";

import { Link, useNavigate } from "react-router-dom";
import PostLikeCommentSection from "./PostLikeCommentSection";

function NormalPostcard(props) {
  const navigate = useNavigate();
  const handleComment = () => {
    navigate(`/postData/:${props.id}`);
  };
  return (
    <div className="normal-post-card-body">
      <Link to={`/postData/:${props.id}`}>
        <div className="normal-post-card-image"></div>{" "}
      </Link>
      <div className="footer-section">
        <div className="normal-post-card-user-info">
          <div
            className="normal-post-card-user-image"
            style={{ backgroundImage: `url("${postIcon}")` }}
          ></div>
          <div className="normal-post-card-user-name">Mustafa mahmood</div>
        </div>

        <PostLikeCommentSection
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
