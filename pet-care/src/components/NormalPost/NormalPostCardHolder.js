import React, { useEffect, useState } from "react";
import "../../componentStyle/NormalPost/NormalPostCardHolder.css";
import postIcon from "../../Image/postBox.png";
import NormalPostcard from "./NormalPostcard";
import api from "../../services/api";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import NoPostFound from "../Profile/NoPostFound";

export default function NormalPostCardHolder(props) {
  const [filterPosts, setFilterPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, [props.newPost]);
  useEffect(() => {
    if (posts.length === 0) {
      setFilterPosts(posts);
    } else {
      setFilterPosts(posts.filter((post) => post.postType === props.activeTab));
    }
  }, [props.activeTab, posts]);

  const getPosts = async () => {
    const response = await api.get("/getAllPosts");
    setPosts(response.data);
    setLoading(false);
  };
  return (
    <>
      <div className="post-struct">
        <div
          className="post-icon"
          style={{ backgroundImage: `url("${postIcon}")` }}
        ></div>
        <div className="post-word">Post :</div>
      </div>
      <div
        className={
          loading ? "normal-post-card-scroll center" : "normal-post-card-scroll"
        }
      >
        {loading ? (
          <LoadingBar />
        ) : filterPosts.length === 0 ? (
          <div className="empty-post-section">
            <NoPostFound massage="No Post Found" />
          </div>
        ) : (
          <div className="normal-post-card-holder">
            {filterPosts.map((post, index) => {
              return (
                <NormalPostcard id={post.postID} key={index} data={post} />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
