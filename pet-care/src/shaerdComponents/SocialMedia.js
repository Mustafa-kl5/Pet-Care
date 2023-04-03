import React from "react";
import "../shaerdComponentStyle/SocialMedia.css";
import facebookIcon from "../Image/facebook.png";
import instagramIcon from "../Image/instagram.png";
import twitterIcon from "../Image/twitter.png";

export default function SocialMedia() {
  return (
    <div className="social-media-holder">
      <div className="social-media-icon">
        <div
          className="social-media-item"
          style={{ backgroundImage: `url("${facebookIcon}")` }}
        >
          <a href="linkto:facebook.com" />
        </div>
        <div
          className="social-media-item"
          style={{ backgroundImage: `url("${instagramIcon}")` }}
        >
          <a href="linkto:facebook.com" />
        </div>
        <div
          className="social-media-item"
          style={{ backgroundImage: `url("${twitterIcon}")` }}
        >
          <a href="linkto:facebook.com" />
        </div>
      </div>
      <div className="copy-right">
        © all rights reserved for <br /> mustafa and ahmad
      </div>
    </div>
  );
}
