import React from "react";
import { Link } from "react-router-dom";
import "../shaerdComponentStyle/NavigationMenu.css";
import homeIcon from "../Image/HomeIcon.png";
import postIcon from "../Image/postBox.png";
import AdoptionIcon from "../Image/adoptationPost.png";
import storeIcon from "../Image/store.png";
import infoIcon from "../Image/information.png";
import settingIcon from "../Image/setting.png";
import logOutIcon from "../Image/logout.png";
import { logeOut } from "../hooks/auth/Logout";

export default function NavigationMenu() {
  const handleLogOut = () => {
    logeOut();
  };
  return (
    <div className="navigation-holder">
      <div className="link-item">
        <Link to={"/Home"} className="link-item-path">
          <div
            className="item-icon"
            style={{ backgroundImage: `url("${homeIcon}")` }}
          ></div>
          <div>Home</div>
        </Link>
      </div>
      <div className="link-item">
        <Link to={"/Posts"} className="link-item-path">
          <div
            className="item-icon"
            style={{ backgroundImage: `url("${postIcon}")` }}
          ></div>
          <div>Post</div>
        </Link>
      </div>
      <div className="link-item">
        <Link to={"/AdoptionPost"} className="link-item-path">
          <div
            className="item-icon"
            style={{ backgroundImage: `url("${AdoptionIcon}")` }}
          ></div>
          <div>Adoption post</div>
        </Link>
      </div>
      <div className="link-item">
        <Link to={"/Store"} className="link-item-path">
          <div
            className="item-icon"
            style={{ backgroundImage: `url("${storeIcon}")` }}
          ></div>
          <div>Store</div>
        </Link>
      </div>
      <div className="link-item">
        <Link to={"/InformationTreatment"} className="link-item-path">
          <div
            className="item-icon"
            style={{ backgroundImage: `url("${infoIcon}")` }}
          ></div>
          <div>information and Treatment</div>
        </Link>
      </div>
      <div className="link-item">
        <Link to={"/Profile"} className="link-item-path">
          <div
            className="item-icon"
            style={{ backgroundImage: `url("${settingIcon}")` }}
          ></div>
          <div>Profile Setting</div>
        </Link>
      </div>
      <div className="link-item link-item-path" onClick={handleLogOut}>
        <div
          className="item-icon"
          style={{ backgroundImage: `url("${logOutIcon}")` }}
        ></div>
        <div>Log Out</div>
      </div>
    </div>
  );
}
