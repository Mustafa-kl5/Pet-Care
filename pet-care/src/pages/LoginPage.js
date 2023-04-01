import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm/LoginForm";
import MainBackGround from "../UI/MainBackGround";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const reciveLoginFormData = (reciveData) => {
    if (
      reciveData.userEmail === "mustafa" &&
      reciveData.userPassword === "5137745"
    ) {
      navigate("/Home");
    } else {
      navigate("/Login");
    }
  };
  return (
    <MainBackGround>
      <LoginForm sendLoginData={reciveLoginFormData} />
    </MainBackGround>
  );
}
