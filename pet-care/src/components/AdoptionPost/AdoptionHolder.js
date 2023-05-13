import React, { useEffect, useState } from "react";
import AdoptionPostCard from "./AdoptionPostCard";
import "../../componentStyle/AdoptionPost/AdoptionPostHolder.css";
import postIcon from "../../Image/postBox.png";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import api from "../../services/api";

function AdoptionHolder(props) {
  const [adoptionPosts, setAdoptionPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    filterData(props.filterData);
  }, [props.filterData]);

  const filterData = async (data) => {
    setLoading(true);

    if (data.city === "City" || data.animalType === "AnimalType") {
      const response = await api.get("/getAllAdoptionPosts");
      let filteredPosts = response.data;

      if (data.city !== "City") {
        filteredPosts = filteredPosts.filter(
          (item) =>
            item.city && item.city.toLowerCase() === data.city.toLowerCase()
        );
      }

      if (data.animalType !== "AnimalType") {
        filteredPosts = filteredPosts.filter(
          (item) =>
            item.animalType &&
            item.animalType.toLowerCase() === data.animalType.toLowerCase()
        );
      }

      setAdoptionPosts(filteredPosts);
    } else {
      getPosts();
    }

    setLoading(false);
  };

  const getPosts = async () => {
    const response = await api.get("/getAllAdoptionPosts");
    setAdoptionPosts(response.data);
  };

  return (
    <>
      <div className="adoption-post-struct">
        <div
          className="adoption-post-icon"
          style={{ backgroundImage: `url("${postIcon}")` }}
        ></div>
        <div className="adoption-post-word">Adoption offers:</div>
      </div>
      <div
        className={
          loading
            ? "normal-post-card-scroll center"
            : "adoption-post-card-scroll"
        }
      >
        {loading ? (
          <LoadingBar />
        ) : (
          <div className="adoption-post-card-holder">
            {adoptionPosts.length > 0 ? (
              adoptionPosts.map((post) => (
                <AdoptionPostCard
                  key={post.postId}
                  data={post}
                  id={post.postId}
                />
              ))
            ) : (
              <div>No offers available.</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AdoptionHolder;
