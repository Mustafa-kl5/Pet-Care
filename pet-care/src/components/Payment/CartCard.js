import React, { useState } from "react";
import "../../componentStyle/Payment/CartCard.css";
import removeIcon from "../../Image/delete.png";
export default function CartCard(props) {
  const [productData, setProductData] = useState(props.productData);
  const handleDeletProduct = () => {
    props.handleDeleteProduct(props.id);
  };
  return (
    <div className="cart-card-item-holder">
      <div
        className="cart-card-item-product-image"
        style={{
          backgroundImage: `url("${productData.Product.productImages[0]?.fileName}")`,
        }}></div>
      <div className="cart-card-item-product-name">
        {productData.Product.productName} <br />
        <span className="cart-card-item-product-name-span">{`Quantity : ${productData.ProductQuantity}`}</span>
      </div>
      <div className="cart-card-item-product-name-span">
        ${productData.Product.productPrice}
      </div>
      <button
        className="cart-card-item-product-button-remove"
        onClick={handleDeletProduct}
        style={{ backgroundImage: `url("${removeIcon}")` }}
      />
    </div>
  );
}
