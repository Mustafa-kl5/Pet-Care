import React, { useEffect, useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import PostData from "../components/NormalPost/PostData";
import { useParams } from "react-router-dom";
import LoadingBar from "../shaerdComponents/LoadingBar";
import api from "../services/api";

export default function NormalPostData(props) {
  let { postID } = useParams();
  const id = postID.replace(/:/g, "");

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPost = async () => {
    const response = await api.get(`/getPostByID/:${id}`);
    setPost(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <MainBackGround>
      <ContentHolder>
        {loading ? (
          <div className="center-loading-spinner">
            <LoadingBar />
          </div>
        ) : (
          <PostData postData={post} />
        )}
      </ContentHolder>
    </MainBackGround>
  );
}
