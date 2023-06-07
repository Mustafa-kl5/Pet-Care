import React, { useState } from "react";
import "../../componentStyle/Store/ProductCard.css";
import minusIcon from "../../Image/minus.png";
import plusIcon from "../../Image/plus.png";
import api from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ProductCard(props) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handlePlusProduct = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = async () => {
    setIsLoading(true);
    const response = await api.post(
      "/StorePage/sendSelectedProducts",
      {
        ProductID: props.id,
        ProductQuintity: quantity,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    const data = await response.data;
    setIsLoading(false);
    notifySuccess(data.message);
  };
  const notifySuccess = (massage) =>
    toast.success(massage, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="product-card-item">
      <div
        className="product-card-item-image"
        style={{ backgroundImage: `url("${props.image}")` }}
      ></div>
      <div className="product-card-item-produt-name">{props.name}</div>
      <div className="product-card-item-produt-name">{props.price}$</div>
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
      <button
        className="product-card-item-add-button"
        type="button"
        onClick={handleAddToCart}
      >
        {isLoading ? <span className="button-loader"></span> : "ADD TO CART"}
      </button>
      <ToastContainer />
    </div>
  );
}
