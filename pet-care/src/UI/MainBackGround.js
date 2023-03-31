import React from "react";
import "../PagesStyle/BackGround.css";

export default function MainBackGround(props) {
  return <div className="pages-background">{props.children}</div>;
}
