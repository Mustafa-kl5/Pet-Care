import React from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import AdoptionData from "../components/AdoptionPost/AdoptionData";

export default function AdoptionPostData() {
  return (
    <MainBackGround>
      <ContentHolder>
        <AdoptionData />
      </ContentHolder>
    </MainBackGround>
  );
}
