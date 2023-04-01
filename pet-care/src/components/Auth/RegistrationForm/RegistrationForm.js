import React, { useState } from "react";
import "../../../componentStyle/RegistrationForm/RegistrationForm.css";
import "../../../shaerdComponentStyle/inputFIledStyle.css";
import LeftImage from "../LoginForm/LeftImage";
import { Link } from "react-router-dom";

export default function RegistrationForm(props) {
  const dayOption = [];
  const monthOption = [];
  const yearsOption = [];
  const Selector = (statrindex, lastIndex, arrayTarget) => {
    for (let index = statrindex; index <= lastIndex; index++) {
      if (index < 10) {
        arrayTarget.push(
          <option key={index} value={`0${index}`}>
            0{index}
          </option>
        );
      } else {
        arrayTarget.push(
          <option key={index} value={`${index}`}>
            {index}
          </option>
        );
      }
    }
  };
  Selector(1, 31, dayOption);
  Selector(1, 12, monthOption);
  Selector(1970, 2020, yearsOption);

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypePassword: "",
    city: "",
    phoneNumber: "",
    address: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
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
    event.preventDefault();
    const userData = { ...formState };
    props.forwordRegistrationData(userData);
  };
  return (
    <div className="registration-container">
      <LeftImage width="calc(73rem - 43.75rem)" />
      <div className="registration-form-holder">
        <div className="logo-registration"></div>
        <div className="signup-word">Sign in</div>
        <form onSubmit={handleSubmit} id="registrationForm">
          <div className="inpuFeild-holder">
            <div className="left-section">
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
              <input
                className="input-filed-shape"
                placeholder="City"
                type="text"
                onChange={(e) =>
                  setFormState({ ...formState, city: e.target.value })
                }
              />
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
                  <option value="DD">MM</option>
                  {monthOption}
                </select>
              </div>
              <div>
                <select
                  placeholder="YY"
                  className="selector"
                  onChange={yearhandleInput}
                >
                  <option value="DD">YYYY</option>
                  {yearsOption}
                </select>
              </div>
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="form-button-registration"
          form="registrationForm"
        >
          Sign Up
        </button>
        <Link to="/Login" className="AlreadyAccount">
          Already Have Account?
        </Link>
      </div>
    </div>
  );
}
