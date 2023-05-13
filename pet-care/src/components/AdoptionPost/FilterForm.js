import React, { useEffect, useState } from "react";
import "../../componentStyle/AdoptionPost/FilterForm.css";
function FilterForm(props) {
  const [filterAdoption, setFilterAdoption] = useState({
    city: "City",
    animalType: "AnimalType",
  });
  useEffect(() => {
    props.sendFilterAdoption(filterAdoption);
  }, [filterAdoption]);
  const handleSelectChangeAnimalType = (event) => {
    setFilterAdoption({ ...filterAdoption, animalType: event.target.value });
  };
  const handleSelectChangeCity = (event) => {
    setFilterAdoption({ ...filterAdoption, city: event.target.value });
  };
  return (
    <div className="filter-holder">
      <div className="filter-word">Filter</div>
      <select className="filter-adoption" onChange={handleSelectChangeCity}>
        <option>City</option>
        <option value={"irbid"}>Irbid</option>
        <option value={"amman"}>Amman</option>
        <option value={"zarqa"}>Zarqa</option>
        <option value={"jerash"}>Jerash</option>
      </select>
      <select
        className="filter-adoption"
        onChange={handleSelectChangeAnimalType}
      >
        <option>Animal Type</option>
        <option value={"cat"}>Cat</option>
        <option value={"dog"}>Dog</option>
        <option value={"hamster"}>Hamster</option>
        <option value={"bird"}>Bird</option>
      </select>
      {/* <select className="filter-adoption">
        <option>Animal Breed</option>
        <option>Animal Type</option>
        <option>Cat</option>
        <option>Dog</option>
        <option>Hamster</option>
        <option>Bird</option>
      </select> */}
    </div>
  );
}
export default FilterForm;
