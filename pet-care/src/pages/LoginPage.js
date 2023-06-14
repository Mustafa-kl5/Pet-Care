import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MainBackGround from "../UI/MainBackGround";
import LoginForm from "../components/Auth/LoginForm/LoginForm";
import ErrorBackDrop from "../components/ErrorMessages/ErrorBackDrop";
import api from "../services/api";
import { setAuthToken } from "../hooks/auth/setAuthToken";

export default function Login() {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  const navigate = useNavigate();

  const receiveLoginFormData = async (formData) => {
    setIsLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email: formData.userEmail,
        password: formData.userPassword,
      });

      setIsLoading(false);

      if (response.data.auth) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setAuthToken();
        navigate("/Home");
      } else {
        setErrorMessages("Invalid Username or Password. Please try again.");
        setShowBackdrop(true);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessages("An error occurred. Please try again.");
      setShowBackdrop(true);
    }
  };

  const closeErrorHandler = () => {
    setShowBackdrop(false);
  };

  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/Home");
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, [navigate]);

  return (
    <MainBackGround>
      <LoginForm sendLoginData={receiveLoginFormData} isLoading={isLoading} />
      <ErrorBackDrop
        show={showBackdrop}
        CloseBackDrop={closeErrorHandler}
        HandelMessage={errorMessages}
      />
    </MainBackGround>
  );
}
