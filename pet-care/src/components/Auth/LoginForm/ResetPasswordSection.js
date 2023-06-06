import React, { useState } from "react";
import "../../../componentStyle/LoginForm/resetPasswordSection.css";
import api from "../../../services/api";
import ErrorBackDrop from "../../ErrorMessages/ErrorBackDrop";
export default function ResetPasswordSection(props) {
  const [resetPassword, setnewPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [showBackdrop, setBackdrop] = useState(false);
  const handlePassword = (event) => {
    setnewPassword(event.target.value);
  };
  const handleResetForm = async (event) => {
    event.preventDefault();
    setnewPassword("");

    const response = await api.post("auth/ResetPassword", {
      userID: props.ID,
      newPassword: resetPassword,
    });

    const json = await response.data;
    setErrorMessage(json.message);
    setBackdrop(true);
  };
  const closeErrorHandler = () => {
    setBackdrop(false);
  };
  return props.show ? (
    <div className="reset-password-section-holder">
      <form className="reset-new-password-form" onSubmit={handleResetForm}>
        <input
          type={"password"}
          className="reset-password-input"
          placeholder="New password"
          required
          onChange={handlePassword}
        />
        <button className="reset-password-from-btn">Reset password</button>
      </form>
      <ErrorBackDrop
        CloseBackDrop={closeErrorHandler}
        show={showBackdrop}
        HandelMessage={ErrorMessage}
      />
    </div>
  ) : null;
}
