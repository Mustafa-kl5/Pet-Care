import React, { useState } from "react";
import "../../../componentStyle/LoginForm/resetPasswordSection.css";
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
    console.log(props.ID);
    const response = await fetch("http://localhost:4111/auth/ResetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: props.ID,
        newPassword: resetPassword,
      }),
    });

    if (response.ok) {
      const jsonObjects = await response.json();
      if (jsonObjects.message === "Your password has been changed succsfully") {
        setErrorMessage(jsonObjects.message);
        setBackdrop(true);
      }
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
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
