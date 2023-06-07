import React, { useState } from "react";
import "../../componentStyle/Payment/CartCard.css";
import image from "../../Image/cat.jpg";
import removeIcon from "../../Image/delete.png";
import api from "../../services/api";
export default function CartCard(props) {
  const productData = props.productData;
  const handleDeletProduct = () => {
    props.handleDeleteProduct(props.id);
  };
  return (
    <div className="cart-card-item-holder">
      <div
        className="cart-card-item-product-image"
        style={{
          backgroundImage: `url("${productData.productImages[0].fileName}")`,
        }}
      ></div>
      <div className="cart-card-item-product-name">
        {productData.productName} <br />
        <span className="cart-card-item-product-name-span">{`Quantity : ${productData.productQuntity}`}</span>
      </div>
      <div className="cart-card-item-product-name-span">
        ${productData.productPrice}
      </div>
      <button
        className="cart-card-item-product-button-remove"
        onClick={handleDeletProduct}
        style={{ backgroundImage: `url("${removeIcon}")` }}
      />
    </div>
  );
}
