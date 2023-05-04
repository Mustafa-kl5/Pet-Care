import React, { useState, useEffect } from "react";
import "../../../componentStyle/LoginForm/resetBackdrop.css";
import OTPvalidation from "./OTPvalidation";
import VerfiyEmailSection from "./VerfiyEmailSection";
import api from "../../../services/api";
import ErrorBackDrop from "../../ErrorMessages/ErrorBackDrop";
import CloseBackDropButton from "../../../shaerdComponents/CloseBackDropButton";
export default function ResetPasswordBackdrop(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [EmailVerify, setEmailVerify] = useState("");
  const [ApiData, setData] = useState(null);
  const [OTPcomp, setOTPcomp] = useState(false);

  const HandleEmailVerify = async (data) => {
    const response = await fetch("http://localhost:4111/auth/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.checkEmail }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from server");
    }
    const jsonObjects = await response.json();
    setData(jsonObjects);
    if (jsonObjects.message === "OTP Code has been sent to your email!") {
      setErrorMessage(jsonObjects.message);
      setShowBackdrop(true);
      setOTPcomp(true);
    } else {
      setErrorMessage(jsonObjects.message);
      setShowBackdrop(true);
    }
    console.log(jsonObjects);
    console.log(jsonObjects.data);
    console.log(jsonObjects.state);
  };

  const closeErrorHandler = () => {
    setShowBackdrop(false);
  };

  return props.show ? (
    <div className="Backdrop-background">
      <div className="Backdrop-container">
        <div className="Reset-password-header">
          <div className="reset-password-header-logo"></div>
          <div className="reset-password-header-text">Reset Password</div>
          <CloseBackDropButton
            handelClose={props.closebackdrop}
            someStyle={{ position: "absolute", right: "20px" }}
          />
        </div>
        <div className="left-reset-section">
          <VerfiyEmailSection Checkemail={HandleEmailVerify} />
          <ErrorBackDrop
            CloseBackDrop={closeErrorHandler}
            show={showBackdrop}
            HandelMessage={ErrorMessage}
          />
        </div>
        <div className="right-reset-section">
          <OTPvalidation show={OTPcomp} OTPInfo={ApiData} />
        </div>
      </div>
    </div>
  ) : null;
}
