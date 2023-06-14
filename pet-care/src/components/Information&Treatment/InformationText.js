import React from "react";
import "../../componentStyle/Information&Treatment/InformationText.css";
export default function InformationText(props) {
  return (
    <div className="text-holder">
      <div className="AnimalBreed-label">{props.Breed}</div>
      <div className="article-information-holder">
        <div className="article-header-data">
          Introduction
          <div className="article-body-data">{props.Information[0]}</div>
        </div>
        <div className="article-header-data">
          Appearance:
          <div className="article-body-data">{props.Information[1]}</div>
        </div>
        <div className="article-header-data">
          Treatment:
          <div className="article-body-data">{props.Information[2]}</div>
        </div>
        <div className="article-header-data">
          Care : <div className="article-body-data">{props.Information[3]}</div>
        </div>
        <div className="article-header-data">
          Fun Fact :
          <div className="article-body-data">{props.Information[4]}</div>
        </div>
      </div>
    </div>
  );
}
