import React from "react";
import "../../componentStyle/ProfilePage/OptionBackDrop.css";
import CloseBackDropButton from "../../shaerdComponents/CloseBackDropButton";
export default function OptionBackDrop(props) {
  return props.show ? (
    <div className="profile-backdrop-main">
      <div className="profile-form-holder">
        <div className="profile-header-section">
          <div className="profile-logo-word">
            <div
              className="profile-logo"
              style={{ backgroundImage: `url("${props.icon}")` }}
            ></div>
            <div className="profile-word">{props.title}</div>
          </div>
          <CloseBackDropButton handelClose={props.CloseBackDrop} />
        </div>
        <div className="profile-form-section">{props.children}</div>
      </div>
    </div>
  ) : null;
}
