import React from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import TabsSection from "../components/NormalPost/TabsSection";
import NormalPostCardHolder from "../components/NormalPost/NormalPostCardHolder";
import CreatePostButton from "../components/NormalPost/CreatePostButton";

export default function Post(props) {
  let activeTab = "asking";
  const reciveActiveTab = (reciveActiveTab) => {
    activeTab = reciveActiveTab;
    console.log(activeTab);
  };
  const showAddPostBackDrop = () => {
    console.log("hi");
  };
  return (
    <MainBackGround>
      <ContentHolder>
        <TabsSection activStateus={reciveActiveTab} />
        <NormalPostCardHolder />
        <CreatePostButton buttonClick={showAddPostBackDrop} />
      </ContentHolder>
    </MainBackGround>
  );
}
