import React, { useEffect, useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import AdoptionData from "../components/AdoptionPost/AdoptionData";
import LoadingBar from "../shaerdComponents/LoadingBar";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function AdoptionPostData() {
  let { postID } = useParams();
  const id = postID.replace(/:/g, "");

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPost = async () => {
    const response = await api.get(`/getAdoptionPostById/:${id}`);
    setPost(response.data);
    setLoading(false);
    console.log(post);
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
          <AdoptionData postData={post} />
        )}
      </ContentHolder>
    </MainBackGround>
  );
}
