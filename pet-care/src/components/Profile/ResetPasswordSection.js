import React from "react";
import "../../componentStyle/ProfilePage/ResetPasswordSection.css";

export default function ResetPasswordSection() {
  return (
    <>
      <div className="reset-password-header">
        <div className="reset-password-logo"></div>
        <div className="reset-password-text"> Password reset</div>
      </div>
      <div className="reset-password-holder">
        <form className="reset-password-form">
          <input className="email-input" type={"text"} placeholder="Email" />
          <input
            className="new-password-input"
            type={"password"}
            placeholder="New Password"
          />
          <button className="reset-password-btn">Save</button>
        </form>
      </div>
    </>
  );
}
