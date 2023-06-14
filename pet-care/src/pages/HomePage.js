import React from "react";
import FirstHalf from "../components/Home/FirstHalf";
import SecondHalf from "../components/Home/SecondHalf";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";

export default function Home(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <FirstHalf></FirstHalf>
        <SecondHalf></SecondHalf>
      </ContentHolder>
    </MainBackGround>
  );
}
