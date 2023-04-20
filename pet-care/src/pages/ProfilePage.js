import React from "react";
import ProfileHeader from "../components/Profile/Header";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import "../componentStyle/ProfilePage/ProfileHeader.css";
import ProfileImagSection from "../components/Profile/ProfileImagSection";
import ScrollBar from "../shaerdComponents/ScrollBar";
import FilterForm from "../components/AdoptionPost/FilterForm";
import AdoptionHolder from "../components/AdoptionPost/AdoptionHolder";
import ResetPasswordSection from "../components/Profile/ResetPasswordSection";
import AdoptionPostSection from "../components/Profile/AdoptionPostSection";
import NormalPostCardHolder from "../components/NormalPost/NormalPostCardHolder";
import "../PagesStyle/Profile.css";
import EditBio from "../components/Profile/EditBio";

import AdoptionPostState from "../components/Profile/AdoptionPostState";
import DeletePost from "../components/Profile/DeletePost";
export default function Profile(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <ProfileHeader />
        <ScrollBar>
          <ProfileImagSection />

          <ResetPasswordSection />

          <ScrollBar>
            <div>
              <AdoptionPostSection />

              <AdoptionHolder>
                <AdoptionPostState text={"Active"} />
                <DeletePost />
              </AdoptionHolder>
            </div>
          </ScrollBar>
          <div className="border"></div>
          <ScrollBar>
            <div>
              <NormalPostCardHolder>
                <DeletePost />
              </NormalPostCardHolder>
            </div>
          </ScrollBar>
          <div className="border"></div>
          <div>
            <AdoptionPostSection text={"Favourite"} />

            <AdoptionHolder>
              <AdoptionPostState text={"Remove Fav"} />
              <DeletePost />
            </AdoptionHolder>
          </div>
          <EditBio />
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
