import React, { useEffect, useState } from "react";
import "../../../componentStyle/RegistrationForm/RegistrationForm.css";
import "../../../shaerdComponentStyle/inputFIledStyle.css";
import LeftImage from "../LoginForm/LeftImage";
import { Link } from "react-router-dom";
import {
  isValidEmail,
  isValidPassword,
  notifyError,
  checkStringVariables,
  birthDayValidation,
  nameValidation,
  cityValidation,
  validationPhoneNumber,
} from "../../../Validation/InputValidtion";
import { ToastContainer } from "react-toastify";
import { Selector } from "../../../Constant/DaysSelector";
import { citySelector } from "../../../Constant/CitySelector";
import LoadingBar from "../../../shaerdComponents/LoadingBar";
export default function RegistrationForm(props) {
  const dayOption = [];
  const monthOption = [];
  const yearsOption = [];

  Selector(1, 31, dayOption);
  Selector(1, 12, monthOption);
  Selector(1970, 2020, yearsOption);
  const [isValidInput, setIsValidInput] = useState(false);

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypePassword: "",
    city: "City",
    phoneNumber: "",
    address: "",
    dayOfBirth: null,
    monthOfBirth: null,
    yearOfBirth: null,
  });
  const dayhandleInput = (event) => {
    setFormState({ ...formState, dayOfBirth: event.target.value });
  };
  const monthhandleInput = (event) => {
    setFormState({ ...formState, monthOfBirth: event.target.value });
  };
  const yearhandleInput = (event) => {
    setFormState({ ...formState, yearOfBirth: event.target.value });
  };

  const handleSubmit = (event) => {
    const userData = { ...formState };
    if (
      !nameValidation(formState.firstName) ||
      !nameValidation(formState.lastName)
    ) {
      notifyError("Please Enter A Valid First Name Or Last Name ");
      return;
    }

    if (!isValidEmail(formState.email)) {
      notifyError("Please Enter A Valid Email Address");
      return;
    }

    if (!validationPhoneNumber(formState.phoneNumber)) {
      notifyError("Please Enter A Valid Phone Number");
      return;
    }

    if (!isValidPassword(formState.password)) {
      notifyError(
        "Password Must Contain At Least 6 Character And One Number And One Symbol."
      );
      return;
    }

    if (formState.password !== formState.retypePassword) {
      notifyError("Passwords Did Not Match");
      return;
    }
    if (cityValidation(formState.city)) {
      notifyError("Please Pick Your City");
      return;
    }
    props.getData(userData);
  };

  const HandleRegisterForm = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (checkStringVariables(formState) && birthDayValidation(formState)) {
      setIsValidInput(true);
    } else {
      setIsValidInput(false);
    }
  }, [formState]);

  return (
    <div className="registration-container">
      <LeftImage width="calc(73rem - 43.75rem)" />
      <div className="registration-form-holder">
        <div className="logo-registration"></div>
        <div className="signup-word">Sign in</div>
        <form onSubmit={HandleRegisterForm} id="registrationForm">
          <div className="inpuFeild-holder">
            <div className="registration-left-section">
              <input
                className="input-filed-shape"
                placeholder="First Name"
                type="text"
                onChange={(e) =>
                  setFormState({ ...formState, firstName: e.target.value })
                }
              />
              <input
                className="input-filed-shape"
                placeholder="Email"
                type="text"
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
              <input
                className="input-filed-shape"
                placeholder="Password"
                onChange={(e) =>
                  setFormState({ ...formState, password: e.target.value })
                }
                type="password"
              />
              <select
                className="selected-filed-shape"
                placeholder="City"
                onChange={(e) =>
                  setFormState({ ...formState, city: e.target.value })
                }
              >
                <option value={"City"}>City</option>

                {citySelector()}
              </select>
            </div>
            <div className="rigth-section">
              <input
                className="input-filed-shape"
                placeholder="Last Name"
                type="text"
                onChange={(e) =>
                  setFormState({ ...formState, lastName: e.target.value })
                }
              />
              <input
                className="input-filed-shape"
                placeholder="Phone Number"
                type="text"
                onChange={(e) =>
                  setFormState({ ...formState, phoneNumber: e.target.value })
                }
              />
              <input
                className="input-filed-shape"
                placeholder="Retype Password"
                type="password"
                onChange={(e) =>
                  setFormState({ ...formState, retypePassword: e.target.value })
                }
              />
              <input
                className="input-filed-shape"
                placeholder="Address"
                type="text"
                onChange={(e) =>
                  setFormState({ ...formState, address: e.target.value })
                }
              />
            </div>
          </div>
          <div className="birthday-holder">
            <div className="birthday-holder-text">Enter your Birth of Day</div>
            <div className="birthday-holder-selector">
              <div>
                <select
                  placeholder="DD"
                  className="selector"
                  onChange={dayhandleInput}
                >
                  <option value="DD">DD</option>
                  {dayOption}
                </select>
              </div>
              <div>
                <select
                  placeholder="MM"
                  className="selector"
                  onChange={monthhandleInput}
                >
                  <option value="MM">MM</option>
                  {monthOption}
                </select>
              </div>
              <div>
                <select
                  placeholder="YY"
                  className="selector"
                  onChange={yearhandleInput}
                >
                  <option value="YYYY">YYYY</option>
                  {yearsOption}
                </select>
              </div>
            </div>
          </div>
          <ToastContainer />
        </form>
        <button
          type="button"
          className={
            isValidInput
              ? "form-button-registration-active"
              : "form-button-registration"
          }
          disabled={!isValidInput}
          form="registrationForm"
          onClick={handleSubmit}
        >
          {props.isLoading ? (
            <span className="button-loader"></span>
          ) : (
            "Sign In"
          )}
        </button>
        <Link to="/Login" className="AlreadyAccount">
          Already Have Account?
        </Link>
      </div>
    </div>
  );
}
