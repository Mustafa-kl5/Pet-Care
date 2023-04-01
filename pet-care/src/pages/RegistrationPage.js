import React from "react";
import RegistrationForm from "../components/Auth/RegistrationForm/RegistrationForm";

import MainBackGround from "../UI/MainBackGround";

export default function Registration(props) {
  const reciveRegistrationData = (RegistrationData) => {
    console.log(RegistrationData);
  };
  return (
    <MainBackGround>
      <RegistrationForm forwordRegistrationData={reciveRegistrationData} />
    </MainBackGround>
  );
}
