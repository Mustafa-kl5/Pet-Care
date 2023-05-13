import React, { useEffect, useState } from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostCard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import userIcon from "../../Image/Cat-Breed1.png";
function AdoptionPostCard(props) {
  const [postData, setPostData] = useState(props.data);
  const location = useLocation();

  useEffect(() => {
    setPostData(props.data);
  }, [props.data]);

  return (
    <Link to={`/adoptionPostData/:${props.id}`} className="adoption-post-link">
      <div className="adoption-post-card-body">
        <div>
          <img
            className="adoption-post-card-image"
            src={postData.postImage?.fileName}
            alt="post image"
          />
        </div>

        <div className="adoption-footer-section">
          <div className="adoption-post-card-user-info">
            <div
              className="adoption-post-card-user-image"
              style={{ backgroundImage: `url(${postData.postOwnerImage})` }}
            ></div>
            <div className="adoption-post-card-user-name">
              {postData.postOwner}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default AdoptionPostCard;
