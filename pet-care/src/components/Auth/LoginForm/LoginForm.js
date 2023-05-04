import React, { useState } from "react";
import "../../../componentStyle/LoginForm/LoginForm.css";
import LeftImage from "./LeftImage";

import { Link } from "react-router-dom";
import ResetPasswordBackdrop from "./ResetPasswordBackdrop";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [backdrop, setbackdrop] = useState(false);
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userEmail: email,
      userPassword: password,
    };

    setEmail("");
    setPassword("");
    props.sendLoginData(userData);
  };
  const handleForgetPassword = () => {
    setbackdrop(true);
  };
  const closebackdrop = () => {
    setbackdrop(false);
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

          <button type="submit" className="form-button">
            Login
          </button>
        </form>
        <div className="forget-password" onClick={handleForgetPassword}>
          ForgetYouPassword?
        </div>
        <ResetPasswordBackdrop show={backdrop} closebackdrop={closebackdrop} />
        <Link to="/Registration" className="account-sign-up">
          Don t have An Account? sign up
        </Link>
      </div>
    </div>
  );
}
