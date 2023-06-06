import React from "react";
import "../../componentStyle/ProfilePage/ResetPassword.css";
import resetPassImage from "../../Image/Forgot password.gif";

export default function ResetPassword() {
  return (
    <div className="reset-password-holder">
      <div className="reset-password-holder-leftsection">
        <img
          src={resetPassImage}
          className="reset-password-holder-leftsection-image"
        />
      </div>
      <div className="reset-password-holder-rightsection">
        <div className="reset-password-word">Please Enter Your Email:</div>
        <div className="reset-password-word-hint">
          Hint: You must enter the email address you provided when you created
          your account
        </div>
        <form className="reset-password-email-form">
          <input
            type="text"
            className="input-filed-shape"
            placeholder="Email"
          />
          <button type="submit" className="reset-password-button-form">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}
