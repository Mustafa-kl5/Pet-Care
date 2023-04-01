import React from "react";
import "../../componentStyle/RegistrationForm/BirthDaySelector.css";

export default function BirthDaySelector() {
  return (
    // <div className="birthday-selector-container">
    //   <div className="birthday-text">Enter your Birth of Day</div>
    //   <div className="selector-holder">
    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    //   </div>
    // </div>
  );
}
