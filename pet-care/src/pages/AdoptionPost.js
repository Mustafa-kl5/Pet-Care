import React from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import AdoptionHolder from "../components/AdoptionPost/AdoptionHolder";
import FilterForm from "../components/AdoptionPost/FilterForm";

import Header from "../shaerdComponents/Header";

export default function AdoptionPost(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <FilterForm />
        <AdoptionHolder />
      </ContentHolder>
    </MainBackGround>
  );
}
