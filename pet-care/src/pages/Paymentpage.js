import React from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import CartCardHolder from "../components/Payment/CartCardHolder";

export default function Payment(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <CartCardHolder />
      </ContentHolder>
    </MainBackGround>
  );
}
