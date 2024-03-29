import React, { useEffect, useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import AdoptionHolder from "../components/AdoptionPost/AdoptionHolder";
import FilterForm from "../components/AdoptionPost/FilterForm";
import CreatePostButton from "../components/NormalPost/CreatePostButton";
import AddAdoptionBackDrop from "../components/AdoptionPost/AddAdoptionBackDrop";

export default function AdoptionPost(props) {
  const [showAdoptionPost, setShowAdoptionPost] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [reloadPost, setReloadPost] = useState(false);
  const [showExitAnimation, setShowExitAnimation] = useState(false);
  const handleOpenBackDrop = () => {
    setShowAdoptionPost(true);
  };
  const handleCloseBackDrop = () => {
    setShowExitAnimation(true);
    setTimeout(() => {
      setShowAdoptionPost(false);
      setShowExitAnimation(false);
    }, 1100);
  };
  const CloseBackDrop = () => {
    setShowExitAnimation(true);
    setTimeout(() => {
      setShowAdoptionPost(false);
      setShowExitAnimation(false);
    }, 1100);
  };
  const handleReciveFilterPost = (filterData) => {
    setFilterData(filterData);
  };
  const reloadPosts = () => {
    setReloadPost(true);
  };
  useEffect(() => {
    setReloadPost(false);
  }, [reloadPost]);
  return (
    <MainBackGround>
      <ContentHolder>
        <FilterForm sendFilterAdoption={handleReciveFilterPost} />
        <AdoptionHolder filterData={filterData} reloadPosts={reloadPost} />
        <CreatePostButton
          buttonClick={handleOpenBackDrop}
          buttonContent="Add offer"
        />
        <AddAdoptionBackDrop
          showExitAnimation={showExitAnimation}
          show={showAdoptionPost}
          CloseBackDrop={handleCloseBackDrop}
          CloseBackDropAfterAdd={CloseBackDrop}
          reloadPosts={reloadPosts}
        />
      </ContentHolder>
    </MainBackGround>
  );
}
