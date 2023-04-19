import React from "react";
import "../../componentStyle/Store/StoreHeader.css";
import storeIcon from "../../Image/store.png";

export default function StoreHeader() {
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
          <select className="store-header-product-type-input">
            <option value="food">Food</option>
            <option value="accessoires">Accessoires</option>
          </select>
        </div>
        <div className="store-header-product-search">
          <input
            placeholder="Search"
            className="store-header-product-search-input"
          />
        </div>
      </div>
    </div>
  );
}
