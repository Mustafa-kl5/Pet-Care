import React from "react";
import AdoptionPostCard from "./AdoptionPostCard";
import "../../componentStyle/AdoptionPost/AdoptionPostHolder.css";
function AdoptionHolder(props) {
  const toggle = props.children;
  const del = props.children;
  return (
    <div className="post-adoption-scroll">
      <div className="post-adoption-holder">
        <AdoptionPostCard state={toggle} Del={del} />
        <AdoptionPostCard state={toggle} Del={del} />
        <AdoptionPostCard state={toggle} Del={del} />
        <AdoptionPostCard state={toggle} Del={del} />
      </div>
    </div>
  );
}
export default AdoptionHolder;
