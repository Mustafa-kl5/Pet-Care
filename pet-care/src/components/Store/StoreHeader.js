import React, { useEffect, useState } from "react";
import "../../componentStyle/Store/StoreHeader.css";
import storeIcon from "../../Image/store.png";

export default function StoreHeader(props) {
  const [Type, setType] = useState("Food");
  const [animalType, setanimalType] = useState("Cats");

  useEffect(() => {
    sendType();
  }, [Type]);
  useEffect(() => {
    sendType();
  }, [animalType]);
  const sendType = () => {
    props.handleProductType(Type, animalType);
  };
  const handlefoodtype = () => {
    const selectedType = "Food";
    setType(selectedType);
  };

  const handleAccessoriestype = () => {
    const selectedType = "Accessories";
    setType(selectedType);
  };
  const handleTypeSelect = (e) => {
    setanimalType(e.target.value);
  };

  return (
    <div className="store-header-holder">
      <div className="store-header-logo-title">
        <div
          className="store-header-logo"
          style={{ backgroundImage: `url("${storeIcon}")` }}
        ></div>
        <div className="store-header-title">Store</div>
      </div>

      <div className="store-header-product-type-search">
        <div className="store-header-product-type">
          <div
            className={`type-Food ${Type === "Food" ? "selectedItem" : ""}`}
            onClick={handlefoodtype}
          >
            Food
          </div>
          <div className="split-type-div"></div>
          <div
            className={`type-Accessories ${
              Type === "Accessories" ? "selectedItem" : ""
            }`}
            onClick={handleAccessoriestype}
          >
            Accessories
          </div>
        </div>
        <div className="store-header-product-animal-type">
          <select
            className="store-header-product-animal-type-select"
            onChange={handleTypeSelect}
          >
            <option>Cats</option>
            <option>Dogs</option>
            <option>Birds</option>
            <option>Rabbits</option>
          </select>
        </div>
      </div>
    </div>
  );
}
