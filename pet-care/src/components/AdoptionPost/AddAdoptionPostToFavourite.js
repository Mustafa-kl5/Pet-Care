import React, { useEffect, useState } from "react";
import "../../componentStyle/AdoptionPost/AddAdoptionPostToFavourite.css";
import emptyFavouriteIcon from "../../Image/favourite1.png";
import FavouriteIcon from "../../Image/favourite.png";
import { getUserId } from "../../hooks/auth/getUserId";
import api from "../../services/api";
export default function AddAdoptionPostToFavourite(props) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    getFavouritePost();
  }, [isFavourite, props.postId]);

  const handleFavouriteButton = async () => {
    await api.post(`/addAdoptionToFavourite/:${props.postId}`);
    setIsFavourite(!isFavourite);
  };
  const getFavouritePost = async () => {
    const response = await api.get(`/getFavouriteAdoptionPost/:${getUserId()}`);
    setIsFavourite(
      response.data.favouriteAdoptionPosts.some((item) => item === props.postId)
    );
  };
  return (
    <div
      className="favourite-button"
      style={{
        backgroundImage: `${
          isFavourite
            ? `url("${FavouriteIcon}")`
            : `url("${emptyFavouriteIcon}")`
        }`,
      }}
      onClick={handleFavouriteButton}
    ></div>
  );
}
