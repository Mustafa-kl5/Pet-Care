import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm/LoginForm";
import MainBackGround from "../UI/MainBackGround";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorBackDrop from "../components/ErrorMessages/ErrorBackDrop";
import { setAuthToken } from "../hooks/auth/setAuthToken";
import api from "../services/api";

export default function Login(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [backdropMessage, setBackdropMessage] = useState("");
  const navigate = useNavigate();
  const reciveLoginFormData = async (reciveData) => {
    const response = await api.post("/auth/login", {
      email: reciveData.userEmail,
      password: reciveData.userPassword,
    });
    if (response.data.auth) {
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"));
      setAuthToken(token);
      window.location.href = "/Home";
    } else {
      setBackdropMessage(response.data.message);
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
        HandelMessage={backdropMessage}
      />
    </MainBackGround>
  );
}
