import React from "react";
import AdoptionPostCard from "./AdoptionPostCard";
import "../../componentStyle/AdoptionPost/AdoptionPostHolder.css";
function AdoptionHolder() {
  return (
    <div className="post-adoption-scroll">
      <div className="post-adoption-holder">
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
