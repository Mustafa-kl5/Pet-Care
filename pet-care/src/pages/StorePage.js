import React from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import StoreHeader from "../components/Store/StoreHeader";
import ProductHolder from "../components/Store/ProductHolder";

export default function Store(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <StoreHeader />
        <ProductHolder />
      </ContentHolder>
    </MainBackGround>
  );
}
