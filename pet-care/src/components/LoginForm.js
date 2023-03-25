import React from "react";
import "../componentStyle/LoginForm.css";
import InputFiled from "../shaerdComponents/InputFiled";

export default function LoginForm() {
  return (
    <div className="Login-container">
      <div className="image-holder"></div>
      <div className="form-holder">
        <div className="logo"></div>
        <form action="">
          <InputFiled placeholder="Email" />
          <InputFiled placeholder="Password" />
        </form>
      </div>
    </div>
  );
}
