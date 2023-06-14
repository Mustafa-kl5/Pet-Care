import React, { useEffect, useState } from "react";
import AdoptionPostCard from "./AdoptionPostCard";
import "../../componentStyle/AdoptionPost/AdoptionPostHolder.css";
import postIcon from "../../Image/postBox.png";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import api from "../../services/api";
import NoPostFound from "../Profile/NoPostFound";

function AdoptionHolder(props) {
  const [adoptionPosts, setAdoptionPosts] = useState([]);
  const [filterdAdoptionPosts, setFilterdAdoptionPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    filterData(props.filterData);
  }, [props.filterData]);

  useEffect(() => {
    getPosts();
  }, [props.reloadPosts]);

  const filterData = (data) => {
    let filteredData = filterdAdoptionPosts;

    if (data.city !== "City") {
      filteredData = filteredData.filter((post) => post.city === data.city);
    }

    if (data.animalType !== "AnimalType") {
      filteredData = filteredData.filter(
        (post) => post.animalType === data.animalType
      );
    }

    setAdoptionPosts(filteredData);
  };

  const getPosts = async () => {
    setLoading(true);
    const response = await api.get("/getAllAdoptionPosts");
    setFilterdAdoptionPosts(response.data);
    setAdoptionPosts(response.data);
    setLoading(false);
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
            ? "normal-post-card-scroll center-adoption"
            : "adoption-post-card-scroll"
        }
      >
        {loading ? (
          <LoadingBar />
        ) : (
          <div
            className={
              adoptionPosts.length
                ? "adoption-post-card-holder"
                : "center-adoption"
            }
          >
            {adoptionPosts.length > 0 ? (
              adoptionPosts.map((post) => (
                <AdoptionPostCard
                  key={post.postId}
                  data={post}
                  id={post.postId}
                />
              ))
            ) : (
              <div className="empty-post-section">
                <NoPostFound massage="No Post Found" />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AdoptionHolder;
