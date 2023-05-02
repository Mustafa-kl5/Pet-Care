import React from "react";
import AdoptionPostCard from "./AdoptionPostCard";
import "../../componentStyle/AdoptionPost/AdoptionPostHolder.css";
function AdoptionHolder(props) {
  const StateComponent = props.State;
  const DeleteComponent = props.Delete;
  return (
    <div className="post-adoption-scroll">
      <div className="post-adoption-holder">
        <AdoptionPostCard
          postId="1"
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          postId="2"
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          postId="3"
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          postId="4"
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
        <AdoptionPostCard
          StateComp={StateComponent}
          DeleteComp={DeleteComponent}
        />
      </div>
    </div>
  );
}
export default AdoptionHolder;
