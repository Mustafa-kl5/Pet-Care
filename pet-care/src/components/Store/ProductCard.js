import React, { useState } from "react";
import "../../componentStyle/Store/ProductCard.css";
import image from "../../Image/cat.jpg";
import minusIcon from "../../Image/minus.png";
import plusIcon from "../../Image/plus.png";
export default function ProductCard() {
  const [quantity, setQuantity] = useState(0);
  const handlePlusProduct = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusProduct = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="product-card-item">
      <div
        className="product-card-item-image"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="product-card-item-produt-name">
        Royal Canin British Shorthair
      </div>
      <div className="product-card-item-produt-name">Price : $120</div>
      <div className="quantity-holder">
        <button
          type="button"
          className="quantity-holder-button"
          style={{ backgroundImage: `url("${minusIcon}")` }}
          onClick={handleMinusProduct}
        />
        <div className="product-card-item-quantity">Quantity : {quantity}</div>
        <button
          type="button"
          onClick={handlePlusProduct}
          className="quantity-holder-button"
          style={{ backgroundImage: `url("${plusIcon}")` }}
        />
      </div>
      <button className="product-card-item-add-button" type="button">
        ADD TO CART
      </button>
    </div>
  );
}
