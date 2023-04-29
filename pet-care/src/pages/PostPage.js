import React, { useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import TabsSection from "../components/NormalPost/TabsSection";
import NormalPostCardHolder from "../components/NormalPost/NormalPostCardHolder";
import CreatePostButton from "../components/NormalPost/CreatePostButton";
import AddPostBackDrop from "../components/NormalPost/AddPostBackDrop";

export default function Post(props) {
  const [showAddPost, setShowAddPost] = useState(false);

  let activeTab = "asking";
  const reciveActiveTab = (reciveActiveTab) => {
    activeTab = reciveActiveTab;
  };
  const showAddPostBackDrop = () => {
    setShowAddPost(true);
  };
  const closeAddPostBackDrop = () => {
    setShowAddPost(false);
  };
  const reciveDataToPage = (postData) => {
    console.log(postData);
    setShowAddPost(false);
  };

  return (
    <MainBackGround>
      <ContentHolder>
        <TabsSection activStateus={reciveActiveTab} />

        <NormalPostCardHolder />

        <CreatePostButton buttonClick={showAddPostBackDrop} />
        <AddPostBackDrop
          show={showAddPost}
          CloseBackDrop={closeAddPostBackDrop}
          sendPostDataToPage={reciveDataToPage}
        />
      </ContentHolder>
    </MainBackGround>
  );
}
