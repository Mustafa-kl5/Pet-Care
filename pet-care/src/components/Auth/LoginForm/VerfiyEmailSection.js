import React from "react";
import "../../../componentStyle/LoginForm/enterEmailSection.css";
import { useState } from "react";
export default function VerfiyEmailSection(props) {
  const [email, setEmail] = useState("");
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.Checkemail(email);
  };
  return (
    <div className="enter-email-holder">
      <div className="reset-email-logo"></div>
      <div className="forget-password-f1">Forget your password?</div>
      <div className="forget-password-f2">
        Thats okay,it happens!Enter Your email and verify it!
      </div>
      <form className="check-email-form" onSubmit={formSubmitHandler}>
        <input
          placeholder="example@.com"
          className="email-verfiy"
          onChange={onEmailChange}
        />

        <button className="verify-btn" type="Submit">
          verify
        </button>
      </form>
    </div>
  );
}
