import React from "react";
import "../../componentStyle/NormalPost/NormalPostCardHolder.css";
import postIcon from "../../Image/postBox.png";
import NormalPostcard from "./NormalPostcard";

export default function NormalPostCardHolder(props) {
  const del = props.children;
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
          <NormalPostcard Del={del} />
          <NormalPostcard Del={del} />
          <NormalPostcard Del={del} />
          <NormalPostcard Del={del} />
        </div>
      </div>
    </>
  );
}
