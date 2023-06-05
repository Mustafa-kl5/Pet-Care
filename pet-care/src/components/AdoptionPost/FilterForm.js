import React, { useEffect, useState } from "react";
import "../../componentStyle/AdoptionPost/FilterForm.css";
import { citySelector } from "../../Constant/CitySelector";
import { animalTypeSelector } from "../../Constant/AnimalTypeSelector";
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
      <select
        className="filter-adoption"
        onChange={handleSelectChangeCity}
        value={filterAdoption.city}
      >
        <option value={"City"}>City</option>
        {citySelector()}
      </select>
      <select
        className="filter-adoption"
        onChange={handleSelectChangeAnimalType}
        value={filterAdoption.animalType}
      >
        <option value={"AnimalType"}>Animal Type</option>
        {animalTypeSelector()}
      </select>
    </div>
  );
}
export default FilterForm;
