import React, { useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import "../componentStyle/ProfilePage/ProfileHeader.css";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileOption from "../components/Profile/ProfileOption";
import OptionBackDrop from "../components/Profile/OptionBackDrop";
import DeleteAdoptationPostChangeStatus from "../components/Profile/DeleteAdoptationPostChangeStatus";
import UpdateProfilePicture from "../components/Profile/UpdateProfilePicture";
import ResetPassword from "../components/Profile/ResetPassword";
import FavouriteAdoptionPost from "../components/Profile/FavouriteAdoptionPost";
import EditeBio from "../components/Profile/EditeBio";
import EditDeleteNormalPost from "../components/Profile/EditDeleteNormalPost";

export default function Profile(props) {
  const [showBackDrop, setShowBackDrop] = useState(false);
  const [title, setTitle] = useState("Update Profile Image");
  const [icon, setIcon] = useState();
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleOpenBackDrop = (option, icon) => {
    if (showBackDrop) {
      setShowBackDrop(false);
    } else {
      setShowBackDrop(true);
      setTitle(option);
      setIcon(icon);
      switch (option) {
        case "Delete adoption post or Update post status":
          setSelectedComponent(<DeleteAdoptationPostChangeStatus />);
          break;
        case "Update Profile Image":
          setSelectedComponent(<UpdateProfilePicture />);
          break;
        case "Password reset":
          setSelectedComponent(<ResetPassword />);
          break;
        case "Favourite Adoption Post":
          setSelectedComponent(<FavouriteAdoptionPost />);
          break;
        case "Edite bio":
          setSelectedComponent(<EditeBio />);
          break;
        case "Edite post or delete":
          setSelectedComponent(<EditDeleteNormalPost />);
          break;
        default:
          setSelectedComponent(null);
          break;
      }
    }
  };

  const handleCloseBackDrop = () => {
    setShowBackDrop(false);
    setSelectedComponent(null);
  };

  return (
    <MainBackGround>
      <ContentHolder>
        <ProfileHeader />
        <ProfileOption handleCilck={handleOpenBackDrop} />
        <OptionBackDrop
          title={title}
          CloseBackDrop={handleOpenBackDrop}
          show={showBackDrop}
          icon={icon}
        >
          {selectedComponent}
        </OptionBackDrop>
      </ContentHolder>
    </MainBackGround>
  );
}
