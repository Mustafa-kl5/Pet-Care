import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/FavouriteAdoptionPost.css";
import FavouriteAdoptionPostCard from "./FavouriteAdoptionPostCard";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import api from "../../services/api";
import NoPostFound from "./NoPostFound";

export default function FavouriteAdoptionPost() {
  const [isLoading, setIsLoading] = useState(false);
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    getFavouriteAdoptionPost();
  }, []);

  const getFavouriteAdoptionPost = async () => {
    setIsLoading(true);
    const response = await api.get("/getFavouriteAdoptionPost");
    setIsLoading(false);
    setUserPost(response.data);
  };
  return isLoading ? (
    <div className="center-loading">
      <LoadingBar />
    </div>
  ) : userPost.length === 0 ? (
    <NoPostFound massage="You dont have any favourite post" />
  ) : (
    <div className="profile-favourite-adoption-post">
      <div className="profile-favourite-adoption-post-card-holder">
        {userPost.map((post) => {
          return (
            <FavouriteAdoptionPostCard
              key={post._id}
              postImage={post.Images[0].fileName}
              postOwnerImage={post.author.userImage}
              postOwnerName={post.postOwner}
              postId={post._id}
            />
          );
        })}
      </div>
    </div>
  );
}
