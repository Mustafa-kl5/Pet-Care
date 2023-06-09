import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VerfiyOtp(props) {
  const [email, setEmail] = useState(props.email);
  const [isLoading, setIsLoading] = useState(false);
  const [otpId, setOtpId] = useState(props.otpId);
  const [otp, setOtp] = useState("");
  const [isShow, setIsShow] = useState(props.showModle);
  const [isAnimate, setIsAnimate] = useState(false);
  useEffect(() => {
    setIsShow(props.showModle);
  }, [props.showModle]);
  useEffect(() => {
    setEmail(props.email);
  }, [props.email]);
  useEffect(() => {
    setOtpId(props.otpId);
  }, [props.otpId]);

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    if (otp.length === 0 || otp.length > 6) {
      notify("Invalid OTP Code");
      return;
    }
    setIsLoading(true);
    const response = await api.post("/auth//VerfiyOtp", {
      otpId: otpId,
      otpCode: otp,
    });
    setIsLoading(false);
    if (response.data.isSuccess) {
      notifySuccess(response.data.massage);
      setIsAnimate(true);
      setTimeout(() => {
        setIsShow(false);
        props.sendShowModel();
      }, 2000);
    } else {
      notify(response.data.massage);
    }
  };

  const handleResendOtp = async () => {
    const response = await api.post("/auth/EmailReceive", {
      email: email,
    });
    if (response.data.isSuccess) {
      notifySuccess(response.data.massage + " Again");
      setOtpId(response.data.otpId);
    } else {
      notify(response.data.massage);
    }
  };
  const notify = (massage) =>
    toast.warn(massage, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifySuccess = (massage) =>
    toast.success(massage, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <>
      {isShow ? (
        <div
          className={
            isAnimate
              ? "animate__animated animate__flipOutX animate__slow	2s"
              : "animate__animated animate__flipInX animate__slow	2s"
          }
        >
          <div className="reset-password-word ">Please Enter OTP Code:</div>
          <div className="reset-password-word-hint">
            Hint: We send OTP code has 6 digite to your email address that you
            provided ,Otp code will expired at 3 minite
          </div>
          <form
            className="reset-password-email-form"
            onSubmit={handleOtpSubmit}
          >
            <input
              type="text"
              className="input-filed-shape"
              placeholder="Enter Your OTP Code"
              onChange={handleOtpChange}
            />
            <button type="submit" className="reset-password-button-form">
              {isLoading ? (
                <span className="button-loader"></span>
              ) : (
                "Verfiy OTP"
              )}
            </button>
            <div className="reset-password-resend" onClick={handleResendOtp}>
              ReSend OTP Agine
            </div>
          </form>
        </div>
      ) : null}
      <ToastContainer />
    </>
  );
}
