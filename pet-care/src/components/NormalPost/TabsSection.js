import React, { useState } from "react";
import tabIcon from "../../Image/tabsicon.png";
import "../../componentStyle/NormalPost/TabsSection.css";

function TabsSection(props) {
  const [activeTab, setActiveTab] = useState("asking");
  const [isactive, setIsActive] = useState(true);

  const handleAskingPost = () => {
    setActiveTab("asking");
    setIsActive(true);
    props.activStateus("asking");
  };
  const handleMissingPost = () => {
    setActiveTab("missing");
    setIsActive(false);
    props.activStateus("missing");
  };
  return (
    <div className="tabs-holder">
      <div
        className="tab-icon"
        style={{ backgroundImage: `url("${tabIcon}")` }}
      ></div>
      <div
        className={`tab-item ${isactive ? "active" : ""}`}
        onClick={handleAskingPost}
      >
        Asking
      </div>
      <div className="bar" />
      <div
        className={`tab-item ${!isactive ? "active" : ""}`}
        onClick={handleMissingPost}
      >
        Missing
      </div>
    </div>
  );
}

export default TabsSection;
