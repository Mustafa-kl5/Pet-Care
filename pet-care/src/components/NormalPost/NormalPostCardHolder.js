import React, { useEffect, useState } from "react";
import "../../componentStyle/NormalPost/NormalPostCardHolder.css";
import postIcon from "../../Image/postBox.png";
import NormalPostcard from "./NormalPostcard";
import api from "../../services/api";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import NoPostFound from "../Profile/NoPostFound";

export default function NormalPostCardHolder(props) {
  const [posts, setPosts] = useState([]);
  const [missingPosts, setMissingPosts] = useState([]);
  const [askingPosts, setAskingPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const response = await api.get("/getAllPosts");
      setPosts(response.data);
      setLoading(false);
    };
    getPosts();
  }, [props.newPost]);
  useEffect(() => {
    setAskingPosts(posts.filter((post) => post.postType === "asking"));
    setMissingPosts(posts.filter((post) => post.postType === "missing"));
  }, [posts, props.activeTab]);
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
          loading || (missingPosts.length === 0 && askingPosts.length === 0)
            ? "normal-post-card-scroll center"
            : "normal-post-card-scroll"
        }
      >
        {loading ? (
          <LoadingBar />
        ) : missingPosts.length === 0 && askingPosts.length === 0 ? (
          <div className="empty-post-section">
            <NoPostFound massage="No Post Found" />
          </div>
        ) : (
          <div className="normal-post-card-holder">
            {props.activeTab === "missing"
              ? missingPosts.map((post, index) => {
                  return (
                    <NormalPostcard id={post.postID} key={index} data={post} />
                  );
                })
              : askingPosts.map((post, index) => {
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
