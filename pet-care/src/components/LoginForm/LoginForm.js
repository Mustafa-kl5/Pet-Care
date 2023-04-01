import React from "react";
import "../../componentStyle/LoginForm/LoginForm.css";
import InputFiled from "../../shaerdComponents/InputFiled";
import LeftImage from "./LeftImage";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="Login-form-container">
      <LeftImage />
      <div className="loginForm-holder">
        <div className="logo"></div>
        <div className="signin-word">Sign in</div>
        <form className="login-form">
          <InputFiled placeholder="Name" />
          <InputFiled placeholder="Password" />
          <a href="linkto:google.com" className="forget-password">
            ForgetYouPassword?
          </a>
          <button type="button" className="form-button">
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
