import React, { useState } from "react";
import "../../componentStyle/LoginForm/LoginForm.css";
import LeftImage from "./LeftImage";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    userEmail: email,
    userPassword: password,
  });
  const arr = [];
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setUserData({
      userEmail: email,
      userPassword: password,
    });
    arr.push(userData);
    console.log(arr);
    console.log(userData);
    setEmail("");
    setPassword("");
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
            type="text"
            onChange={passwordHandler}
            value={password}
          />
          <a href="linkto:google.com" className="forget-password">
            ForgetYouPassword?
          </a>
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
        <Link to="/Registration" className="account-sign-up">
          Don t have An Account? sign up
        </Link>
      </div>
    </div>
  );
}
