import React, { useState } from "react";
import RegistrationForm from "../components/Auth/RegistrationForm/RegistrationForm";
import { Validation } from "../Validation/InputValidtion";
import MainBackGround from "../UI/MainBackGround";
import { useNavigate } from "react-router-dom";
import ErrorBackDrop from "../components/ErrorMessages/ErrorBackDrop";

export default function Registration(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(" ");
  const navigate = useNavigate();

  const HandleData = (RegisterData) => {
    const Valid = Validation(RegisterData);

    if (Valid[0] === true) {
      navigate("/Home");
    } else {
      setErrorMessage(Valid[1]);
      setShowBackdrop(true);
    }
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
