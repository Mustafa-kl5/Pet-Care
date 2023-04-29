import React from "react";
import "../../componentStyle/NormalPost/NormalPostCardHolder.css";
import postIcon from "../../Image/postBox.png";
import NormalPostcard from "./NormalPostcard";

export default function NormalPostCardHolder(props) {
  const DeleteComponent = props.Delete;
  const EditComponent = props.Edit;
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
          <NormalPostcard
            id="1"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            id="2"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            id="3"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            id="4"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            id="5"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            id="6"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            id="7"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            id="8s"
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
          <NormalPostcard
            DeleteComp={DeleteComponent}
            EditComp={EditComponent}
          />
        </div>
      </div>
    </>
  );
}
