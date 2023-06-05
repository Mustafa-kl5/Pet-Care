import React, { useEffect, useState } from "react";
import "../../../componentStyle/LoginForm/LoginForm.css";
import LeftImage from "./LeftImage";
import LoadingBar from "../../../shaerdComponents/LoadingBar";
import { Link } from "react-router-dom";
import { isValidEmail, notifyError } from "../../../Validation/InputValidtion";
import { ToastContainer } from "react-toastify";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsValidInput(true);
    } else {
      setIsValidInput(false);
    }
  }, [email, password]);

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userEmail: email,
      userPassword: password,
    };
    setEmail("");
    setPassword("");
    if (!isValidEmail(userData.userEmail)) {
      notifyError("Please enter a valid email address");
      return;
    }

    if (userData.userPassword.length < 8) {
      notifyError("Password must be at least 8 characters long");
      return;
    }
    props.sendLoginData(userData);
  };
  return (
    <div className="Login-form-container">
      <LeftImage width="calc(73rem / 2)" />
      <div className="loginForm-holder">
        <div className="logo"></div>
        <div className="signin-word">Sign in</div>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            className="input-filed-shape"
            placeholder="Email"
            type="text"
            onChange={emailHandler}
            value={email}
          />
          <input
            className="input-filed-shape"
            placeholder="Password"
            type="password"
            onChange={passwordHandler}
            value={password}
          />
          <a href="linkto:google.com" className="forget-password">
            ForgetYouPassword?
          </a>
          <button
            disabled={!isValidInput}
            type="submit"
            className={isValidInput ? "form-button-active" : "form-button"}
          >
            {props.isLoading ? (
              <span className="button-loader"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <Link to="/Registration" className="account-sign-up">
          Don t have An Account? sign up
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}
