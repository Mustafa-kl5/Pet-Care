import React from "react";
import "../../componentStyle/AdoptionPost/FilterForm.css";
function FilterForm() {
  return (
    <div>
      <form className="form">
        <div className="Text">Filter : </div>
        <select>
          <option value="City">City</option>
          <option>Irbid</option>
          <option>Amman</option>
          <option>Zarqa</option>
          <option>Jerash</option>
        </select>
        <select>
          <option>Animal Type</option>
          <option>Cat</option>
          <option>Dog</option>
          <option>Hamster</option>
          <option>Bird</option>
        </select>
        <select>
          <option>Animal Breed</option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <input type="text" placeholder="Search"></input>
      </form>
      <hr></hr>
    </div>
  );
}
export default FilterForm;
