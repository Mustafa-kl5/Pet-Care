import React, { useState } from "react";
import "../../../componentStyle/LoginForm/OTPvalidation.css";
import api from "../../../services/api";
import ErrorBackDrop from "../../ErrorMessages/ErrorBackDrop";
import ResetPasswordSection from "./ResetPasswordSection";
export default function OTPvalidation(props) {
  const [OTP, setOTP] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [showBackdrop, setBackdrop] = useState(false);
  const [userID, setUserID] = useState("");

  const [showResetPassword, setResetPassword] = useState(false);

  const combine = async () => {
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
    const response = await fetch("http://localhost:4111/auth/verifyOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID: userId, otpCode: OTP }),
    });

    if (response.ok) {
      const jsonObjects = await response.json();
      if (jsonObjects.state === "Verified") {
        setErrorMessage(jsonObjects.message);
        setBackdrop(true);
        setResetPassword(true);
      }
    } else if (response.status === 400) {
      const errorResponse = await response.json();
      console.log(errorResponse.message);
      setErrorMessage(errorResponse.message);
      setBackdrop(true);
    } else {
      // console.log("an error Occures");
    }
  };
  const handleResendOTP = async () => {
    console.log(props.OTPInfo.data["email"]);

    const response = await fetch("http://localhost:4111/auth/ResendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: props.OTPInfo.data["userID"],
        email: props.OTPInfo.data["email"],
      }),
    });
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
