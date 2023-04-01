import React, { useState } from "react";
import "../../componentStyle/RegistrationForm/RegistrationForm.css";
import "../../shaerdComponentStyle/inputFIledStyle.css";
import LeftImage from "../LoginForm/LeftImage";

export default function RegistrationForm() {
  return (
    <div className="registration-container">
      <LeftImage width="calc(73rem - 43.75rem)" />
      <div className="registration-form-holder">
        <div className="logo-registration"></div>
        <div className="signup-word">Sign in</div>
        <form>
          <div className="inpuFeild-holder">
            <div className="left-section">
              <input
                className="input-filed-shape"
                placeholder="First Name"
                type="text"
              />
              <input
                className="input-filed-shape"
                placeholder="Email"
                type="text"
              />
              <input
                className="input-filed-shape"
                placeholder="Password"
                type="text"
              />
              <input
                className="input-filed-shape"
                placeholder="City"
                type="text"
              />
            </div>
            <div className="rigth-section">
              <input
                className="input-filed-shape"
                placeholder="Last Name"
                type="text"
              />
              <input
                className="input-filed-shape"
                placeholder="Phone Number"
                type="text"
              />
              <input
                className="input-filed-shape"
                placeholder="Retype Password"
                type="text"
              />
              <input
                className="input-filed-shape"
                placeholder="Address"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
