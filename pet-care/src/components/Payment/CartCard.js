import React from "react";
import "../../componentStyle/Payment/CartCard.css";
import image from "../../Image/cat.jpg";
import removeIcon from "../../Image/delete.png";
export default function CartCard() {
  return (
    <div className="cart-card-item-holder">
      <div
        className="cart-card-item-product-image"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="cart-card-item-product-name">
        Drools | 3KG <br />
        <span className="cart-card-item-product-name-span">Quantity : 3</span>
      </div>
      <div className="cart-card-item-product-name-span">$681</div>
      <button
        className="cart-card-item-product-button-remove"
        style={{ backgroundImage: `url("${removeIcon}")` }}
      />
    </div>
  );
}
