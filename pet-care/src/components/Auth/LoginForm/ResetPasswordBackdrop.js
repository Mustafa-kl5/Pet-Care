import React, { useState, useEffect } from "react";
import "../../../componentStyle/LoginForm/resetBackdrop.css";
import CloseBackDropButton from "../../../shaerdComponents/CloseBackDropButton";
export default function ResetPasswordBackdrop(props) {
  return props.show ? (
    <div
      className={`profile-backdrop-main animate__animated ${
        props.showExitAnimation
          ? "animate__slideOutRight"
          : "animate__slideInRight"
      }`}
    >
      <div className="profile-form-holder">
        <div className="profile-header-section">
          <div className="profile-logo-word">
            <div
              className="profile-logo"
              style={{ backgroundImage: `url("${props.icon}")` }}
            ></div>
            <div className="profile-word">{props.title}</div>
          </div>
          <CloseBackDropButton handelClose={props.closebackdrop} />
        </div>
        <div className="profile-form-section">{props.children}</div>
      </div>
    </div>
  ) : null;
}
