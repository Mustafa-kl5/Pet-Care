import React from "react";
import "../shaerdComponentStyle/SocialMedia.css";
import facebookIcon from "../Image/facebook.png";
import instagramIcon from "../Image/instagram.png";
import twitterIcon from "../Image/twitter.png";

export default function SocialMedia() {
  const handleOpenLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="social-media-holder">
      <div className="social-media-icon">
        <div
          className="social-media-item"
          style={{ backgroundImage: `url("${facebookIcon}")` }}
          onClick={() =>
            handleOpenLink("https://web.facebook.com/mustafa.mahmood.397/")
          }
        ></div>
        <div
          className="social-media-item"
          style={{ backgroundImage: `url("${instagramIcon}")` }}
          onClick={() =>
            handleOpenLink("https://web.facebook.com/mustafa.mahmood.397/")
          }
        ></div>
        <div
          className="social-media-item"
          style={{ backgroundImage: `url("${twitterIcon}")` }}
          onClick={() =>
            handleOpenLink("https://web.facebook.com/mustafa.mahmood.397/")
          }
        ></div>
      </div>
      <div className="copy-right">
        © all rights reserved for <br /> mustafa and ahmad
      </div>
    </div>
  );
}
