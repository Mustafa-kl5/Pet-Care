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
  const [ApiData, setData] = useState(null);
  const [OTPcomp, setOTPcomp] = useState(false);

  const HandleEmailVerify = async (email) => {
    const response = await api.post("auth/reset", {
      email: email,
    });
    const json = await response.data;
    setData(json);
    if (json.message === "OTP Code has been sent to your email!") {
      setErrorMessage(json.message);
      setShowBackdrop(true);
      setOTPcomp(true);
    } else {
      setErrorMessage(json.message);
      setShowBackdrop(true);
    }
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
        </div>
        <div className="right-reset-section">
          <OTPvalidation show={OTPcomp} OTPInfo={ApiData} />
        </div>
      </div>
      <ErrorBackDrop
        CloseBackDrop={closeErrorHandler}
        show={showBackdrop}
        HandelMessage={ErrorMessage}
      />
    </div>
  ) : null;
}
