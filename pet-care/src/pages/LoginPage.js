import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm/LoginForm";
import MainBackGround from "../UI/MainBackGround";

import { useNavigate } from "react-router-dom";
import ErrorBackDrop from "../components/ErrorMessages/ErrorBackDrop";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function Login(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [ErrorMessages, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const reciveLoginFormData = (reciveData) => {
    if (
      reciveData.userEmail === "mustafa" &&
      reciveData.userPassword === "5137745"
    ) {
      navigate("/Home");
    } else {
      //navigate("/Login");
      setErrorMessage("Invalid Username or Password , Please Try again");
      setShowBackdrop(true);
    }
  };
  const closeErrorHandler = () => {
    setShowBackdrop(false);
  };
  return (
    <MainBackGround>
      <LoginForm sendLoginData={reciveLoginFormData} />
      <ErrorBackDrop
        CloseBackDrop={closeErrorHandler}
        show={showBackdrop}
        HandelMessage={ErrorMessages}
      />
    </MainBackGround>
  );
}
