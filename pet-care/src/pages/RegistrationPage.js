import React, { useState } from "react";
import RegistrationForm from "../components/Auth/RegistrationForm/RegistrationForm";
import { Validation } from "../Validation/InputValidtion";
import MainBackGround from "../UI/MainBackGround";
import { json, useNavigate } from "react-router-dom";
import ErrorBackDrop from "../components/ErrorMessages/ErrorBackDrop";
import api from "../services/api";

export default function Registration(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const HandleData = async (RegisterData) => {
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
    setErrorMessage(response.data.message);
    setShowBackdrop(true);
  };
  const closeErrorHandler = () => {
    setShowBackdrop(false);
  };
  return (
    <MainBackGround>
      <RegistrationForm getData={HandleData} />
      <ErrorBackDrop
        CloseBackDrop={closeErrorHandler}
        show={showBackdrop}
        HandelMessage={ErrorMessage}
      />
    </MainBackGround>
  );
}
