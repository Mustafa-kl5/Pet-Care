import React, { useState } from "react";
import "../../componentStyle/ProfilePage/ResetPassword.css";
import resetPassImage from "../../Image/Forgot password.gif";
import ResetPasswordForm from "./ResetPasswordForm";
import VerfiyOtp from "./VerfiyOtp";
import ResetPasswordComponent from "./ResetPasswordComponent";

export default function ResetPassword(props) {
  const [otpId, setOtpId] = useState("");
  const [email, setEmail] = useState("");
  const [showVerfiyModel, setShowVerfiyModel] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const otpReceive = (otpId) => {
    setOtpId(otpId);
    setShowVerfiyModel(true);
  };

  const emailReceive = (email) => {
    setEmail(email);
  };
  const showModelReceive = () => {
    setShowPasswordForm(true);
  };
  const closeBackDrop = () => {
    props.closeBackDrop();
  };
  return (
    <div className="reset-password-holder">
      <div className="reset-password-holder-leftsection">
        <img
          src={resetPassImage}
          className="reset-password-holder-leftsection-image"
        />
      </div>
      <div className="reset-password-holder-rightsection">
        <ResetPasswordForm sendOtpId={otpReceive} sendEmail={emailReceive} />
        <VerfiyOtp
          showModle={showVerfiyModel}
          otpId={otpId}
          email={email}
          sendShowModel={showModelReceive}
        />
        <ResetPasswordComponent
          showModle={showPasswordForm}
          email={email}
          closeBackDrop={closeBackDrop}
        />
      </div>
    </div>
  );
}
