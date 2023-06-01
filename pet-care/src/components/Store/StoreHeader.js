import React, { useEffect, useState } from "react";
import "../../componentStyle/Store/StoreHeader.css";
import storeIcon from "../../Image/store.png";
import api from "../../services/api";

export default function StoreHeader(props) {
  const [Type, setType] = useState("Food");
  const [animalType, setanimalType] = useState([]);
  const [SelectedType, setSelectedType] = useState("Cats");

  useEffect(() => {
    sendType();
  }, [Type]);
  useEffect(() => {
    sendType();
  }, [SelectedType]);
  useEffect(() => {
    getAnimalTypes();
  }, []);
  const getAnimalTypes = async () => {
    const response = await api.get("/StorePage/getTypes", {});
    const json = await response.data;
    setanimalType(json.allModelsData[0]);
  };
  const sendType = () => {
    props.handleProductType(Type, SelectedType);
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
    setSelectedType(e.target.value);
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
            {animalType.map((ele) => (
              <option>{ele.TypeName}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
