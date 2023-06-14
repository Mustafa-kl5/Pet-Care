import React, { useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isValidEmail } from "../../Validation/InputValidtion";

export default function ResetPasswordForm(props) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      notify("Enter Your Email please Or Check It");
      return;
    }

    setIsLoading(true);
    const response = await api.post("/auth/EmailReceive", {
      email: email,
    });
    setIsLoading(false);
    if (response.data.isSuccess) {
      notifySuccess(response.data.massage);
      setIsAnimate(true);
      setTimeout(() => {
        props.sendOtpId(response.data.otpId);
        setIsShow(true);
        props.sendEmail(email);
      }, 2000);
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
      {!isShow ? (
        <div
          className={
            isAnimate
              ? "animate__animated animate__flipOutX animate__slow	2s"
              : ""
          }
        >
          <div className="reset-password-word ">Please Enter Your Email:</div>
          <div className="reset-password-word-hint">
            Hint: You must enter the email address you provided when you created
            your account
          </div>
          <form
            className="reset-password-email-form"
            onSubmit={handleEmailSubmit}
          >
            <input
              type="text"
              className="input-filed-shape"
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
            />
            <button type="submit" className="reset-password-button-form">
              {isLoading ? <span className="button-loader"></span> : "Send OTP"}
            </button>
          </form>
        </div>
      ) : null}
      <ToastContainer />
    </>
  );
}
