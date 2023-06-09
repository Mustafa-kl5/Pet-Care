import React, { useEffect, useState } from "react";
import RegistrationForm from "../components/Auth/RegistrationForm/RegistrationForm";
import MainBackGround from "../UI/MainBackGround";
import { useNavigate } from "react-router-dom";
import ErrorBackDrop from "../components/ErrorMessages/ErrorBackDrop";
import api from "../services/api";

export default function Registration(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const HandleData = async (RegisterData) => {
    setIsLoading(true);
    const response = await api.post("/auth/registration", {
      firstName: RegisterData.firstName,
      lastName: RegisterData.lastName,
      email: RegisterData.email,
      phoneNumber: RegisterData.phoneNumber,
      password: RegisterData.password,
      city: RegisterData.city,
      address: RegisterData.address,
      dayOfBirth: RegisterData.dayOfBirth,
      monthOfBirth: RegisterData.monthOfBirth,
      yearOfBirth: RegisterData.yearOfBirth,
    });
    setIsLoading(false);
    setErrorMessage(response.data.message);
    setShowBackdrop(true);
  };
  const closeErrorHandler = () => {
    setShowBackdrop(false);
  };
  const isLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/Home");
    } else {
      navigate("/Registration");
    }
  };
  useEffect(() => {
    isLogin();
  }, []);
  return (
    <MainBackGround>
      <RegistrationForm getData={HandleData} isLoading={isLoading} />
      <ErrorBackDrop
        CloseBackDrop={closeErrorHandler}
        show={showBackdrop}
        HandelMessage={ErrorMessage}
      />
    </MainBackGround>
  );
}
