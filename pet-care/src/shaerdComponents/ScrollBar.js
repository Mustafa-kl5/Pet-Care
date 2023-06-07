import React from "react";
import "../shaerdComponentStyle/ScrollBar.css";
export default function ScrollBar(props) {
  return (
    <div
      className={
        props.isLoading ? "product-card-holder-loading" : "Information-Scroll"
      }
      /*style={{ height: `calc( ${props.Height}rem - 15rem)` }}*/
    >
      {props.children}
    </div>
  );
}
