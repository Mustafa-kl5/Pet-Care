import React from "react";
import "../../componentStyle/NormalPost/NormalPostCardHolder.css";
import postIcon from "../../Image/postBox.png";
import NormalPostcard from "./NormalPostcard";

export default function NormalPostCardHolder(props) {
  return (
    <>
      <div className="post-struct">
        <div
          className="post-icon"
          style={{ backgroundImage: `url("${postIcon}")` }}
        ></div>
        <div className="post-word">Post :</div>
      </div>
      <div className="normal-post-card-scroll">
        <div className="normal-post-card-holder">
          <NormalPostcard id="1" />
          <NormalPostcard id="2" />
          <NormalPostcard id="3" />
          <NormalPostcard id="4" />
          <NormalPostcard id="5" />
          <NormalPostcard id="6" />
          <NormalPostcard id="7" />
          <NormalPostcard id="8" />
          <NormalPostcard />
          <NormalPostcard />
          <NormalPostcard />
          <NormalPostcard />
        </div>
      </div>
    </>
  );
}
