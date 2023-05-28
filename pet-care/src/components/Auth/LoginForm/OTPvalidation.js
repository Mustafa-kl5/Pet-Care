import React, { useState } from "react";
import "../../../componentStyle/LoginForm/OTPvalidation.css";
import api from "../../../services/api";
import ErrorBackDrop from "../../ErrorMessages/ErrorBackDrop";
import ResetPasswordSection from "./ResetPasswordSection";
export default function OTPvalidation(props) {
  const [ErrorMessage, setErrorMessage] = useState("");
  const [showBackdrop, setBackdrop] = useState(false);
  const [OTP, setOTP] = useState("");
  const [userID, setUserID] = useState("");
  const [showResetPassword, setResetPassword] = useState(false);
  const combine = () => {
    const otpInput = document.getElementsByClassName("otp-input");
    let otp = "";
    for (var i = 0; i < otpInput.length; i++) {
      otp += otpInput[i].value;
    }
    setOTP(otp);
  };
  const OTPHandler = async (event) => {
    event.preventDefault();
    const userId = props.OTPInfo.data["userID"];
    setUserID(userId);
    const response = await api.post("auth/verifyOTP", {
      userID: userId,
      otpCode: OTP,
    });
    const json = await response.data;

    if (json.message === "User email Verified Successfully") {
      setErrorMessage(json.message);
      setBackdrop(true);
      setResetPassword(true);
    } else {
      setErrorMessage(json.message);
      setBackdrop(true);
    }
  };
  const handleResendOTP = async () => {
    const response = await api.post("auth/ResendOTP", {
      userID: props.OTPInfo.data["userID"],
      email: props.OTPInfo.data["email"],
    });
    const json = await response.data;
    setErrorMessage(json.message);
    setBackdrop(true);
  };
  const closeErrorHandler = () => {
    setBackdrop(false);
  };

  return props.show ? (
    <div className="OTP-Section">
      <div className="otp-logo"></div>
      <div className="otp-text">Enter OTP</div>
      <form className="otp-form" onSubmit={OTPHandler}>
        <input className="otp-input" />
        <input className="otp-input" />
        <input className="otp-input" />
        <input className="otp-input" />
        <button className="otp-btn" onClick={combine} type="submit">
          Verify
        </button>
        <div className="ResendOTP">
          Did not reseve a code?
          <span className="Send-OTP-again" onClick={handleResendOTP}>
            {" "}
            ResendOTP
          </span>
        </div>
      </form>

      <ResetPasswordSection show={showResetPassword} ID={userID} />
      <ErrorBackDrop
        CloseBackDrop={closeErrorHandler}
        show={showBackdrop}
        HandelMessage={ErrorMessage}
      />
    </div>
  ) : null;
}
