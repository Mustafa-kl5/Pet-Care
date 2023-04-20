import React from "react";
import ProfileHeader from "../components/Profile/Header";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import "../componentStyle/ProfilePage/ProfileHeader.css";
import ProfileImagSection from "../components/Profile/ProfileImagSection";
import ScrollBar from "../shaerdComponents/ScrollBar";
import ResetPasswordSection from "../components/Profile/ResetPasswordSection";
export default function Profile(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <ProfileHeader />
        <ScrollBar>
          <ProfileImagSection />
          <ResetPasswordSection />
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
