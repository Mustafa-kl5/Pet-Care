import React, { useEffect, useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import TabsSection from "../components/NormalPost/TabsSection";
import NormalPostCardHolder from "../components/NormalPost/NormalPostCardHolder";
import CreatePostButton from "../components/NormalPost/CreatePostButton";
import AddPostBackDrop from "../components/NormalPost/AddPostBackDrop";

export default function Post(props) {
  const [showAddPost, setShowAddPost] = useState(false);
  const [activeTab, setActiveTab] = useState("asking");
  const [newPost, SetNewPost] = useState(false);
  const handleActiveTabChange = (tab) => {
    setActiveTab(tab);
  };

  const showAddPostBackDrop = () => {
    setShowAddPost(true);
  };
  const closeAddPostBackDrop = () => {
    setShowAddPost(false);
  };
  const CloseBackDropAfterAdd = (value) => {
    setShowAddPost(value);
  };

  const handleAddPost = (newPost) => {
    SetNewPost(newPost);
  };
  useEffect(() => {
    SetNewPost(false);
  }, [activeTab, newPost]);
  return (
    <MainBackGround>
      <ContentHolder>
        <TabsSection activStateus={handleActiveTabChange} />
        <NormalPostCardHolder activeTab={activeTab} newPost={newPost} />
        <CreatePostButton
          buttonClick={showAddPostBackDrop}
          buttonContent="Add Post"
        />
        <AddPostBackDrop
          show={showAddPost}
          CloseBackDrop={closeAddPostBackDrop}
          sendCloseBackDrop={CloseBackDropAfterAdd}
          handleAddPost={handleAddPost}
        />
      </ContentHolder>
    </MainBackGround>
  );
}
