import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isValidEmail, isValidPassword } from "../../Validation/InputValidtion";

export default function ResetPasswordComponent(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(props.showModle);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  useEffect(() => {
    setIsShow(props.showModle);
  }, [props.showModle]);
  useEffect(() => {
    setEmail(props.email);
  }, [props.email]);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleReTypePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };
  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    if (!isValidPassword(password)) {
      notify(
        "Password Must Contain At Least 6 Character And One Number And One Symbol."
      );
      return;
    }

    if (password !== retypePassword) {
      notify("Passwords Did Not Match");
      return;
    }
    setIsLoading(true);
    const response = await api.post("/auth/ResetPassword", {
      email: email,
      password: password,
    });
    setIsLoading(false);
    if (response.data.isSuccess) {
      notifySuccess(response.data.massage);
      setTimeout(() => {
        props.closeBackDrop();
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
      {isShow ? (
        <div className="animate__animated animate__flipInX animate__slow	2s">
          <div className="reset-password-word ">
            Please Enter Your New Password:
          </div>
          <div className="reset-password-word-hint">
            Hint: Password Must Contain At Least 6 Character <br /> And One
            Number And One Symbol
          </div>
          <form
            className="reset-password-email-form"
            onSubmit={handlePasswordSubmit}
          >
            <input
              type="text"
              className="input-filed-shape"
              placeholder="Enter Your New Password"
              onChange={handlePasswordChange}
            />
            <input
              type="text"
              className="input-filed-shape"
              placeholder="Re-type New Password"
              onChange={handleReTypePasswordChange}
            />
            <button type="submit" className="reset-password-button-form">
              {isLoading ? (
                <span className="button-loader"></span>
              ) : (
                "Save Password"
              )}
            </button>
          </form>
        </div>
      ) : null}
      <ToastContainer />
    </>
  );
}
