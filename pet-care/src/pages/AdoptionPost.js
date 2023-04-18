import React, { useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import AdoptionHolder from "../components/AdoptionPost/AdoptionHolder";
import FilterForm from "../components/AdoptionPost/FilterForm";

import Header from "../shaerdComponents/Header";
import CreatePostButton from "../components/NormalPost/CreatePostButton";
import AddAdoptionBackDrop from "../components/AdoptionPost/AddAdoptionBackDrop";

export default function AdoptionPost(props) {
  const [showAdoptionPost, setShowAdoptionPost] = useState(false);
  const handleOpenBackDrop = () => {
    setShowAdoptionPost(true);
  };
  const handleCloseBackDrop = () => {
    setShowAdoptionPost(false);
  };
  return (
    <MainBackGround>
      <ContentHolder>
        <FilterForm />
        <AdoptionHolder />
        <CreatePostButton buttonClick={handleOpenBackDrop} />
        <AddAdoptionBackDrop
          show={showAdoptionPost}
          CloseBackDrop={handleCloseBackDrop}
        />
      </ContentHolder>
    </MainBackGround>
  );
}
