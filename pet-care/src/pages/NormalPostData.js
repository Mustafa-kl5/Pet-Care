import React from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import PostData from "../components/NormalPost/PostData";

export default function NormalPostData(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <PostData />
      </ContentHolder>
    </MainBackGround>
  );
}
