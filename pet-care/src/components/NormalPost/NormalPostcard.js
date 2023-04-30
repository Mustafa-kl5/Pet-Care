import React from "react";
import "../../componentStyle/NormalPost/NormalPostcard.css";
import postIcon from "../../Image/cat.jpg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import PostLikeCommentSection from "./PostLikeCommentSection";
import EditPostComp from "../Profile/EditPostComp";
import DeletePost from "../Profile/DeletePost";

function NormalPostcard(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleComment = () => {
    navigate(`/postData/:${props.id}`);
  };
  return (
    <div className="normal-post-card-body">
      {location.pathname === "/Profile" ? (
        <DeletePost PostID={props.id} />
      ) : null}
      {location.pathname === "/Profile" ? (
        <EditPostComp PostID={props.id} />
      ) : null}
      <Link to={`/postData/:${props.id}`}>
        <div className="normal-post-card-image"></div>
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
