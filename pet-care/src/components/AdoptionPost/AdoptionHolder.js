import React from "react";
import AdoptionPostCard from "./AdoptionPostCard";
import "../../componentStyle/AdoptionPost/AdoptionPostHolder.css";
function AdoptionHolder(props) {
  return (
    <div className="post-adoption-scroll">
      <div className="post-adoption-holder">
        <AdoptionPostCard postId="1" />
        <AdoptionPostCard postId="2" />
        <AdoptionPostCard postId="3" />
        <AdoptionPostCard postId="4" />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
        <AdoptionPostCard />
      </div>
    </div>
  );
}
export default AdoptionHolder;
