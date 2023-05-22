import React from "react";
import "../../componentStyle/Payment/ShopingCart.css";
import cartIcon from "../../Image/backet.png";
import CartCard from "./CartCard";

export default function ShopingCart() {
  return (
    <div className="shoping-cart-holder">
      <div className="shoping-cart-logo-word">
        <div
          className="shoping-cart-logo"
          style={{ backgroundImage: `url("${cartIcon}")` }}
        ></div>
        <div className="shoping-cart-word">Your Order</div>
      </div>
      <div className="shoping-cart-word-scroll">
        <div className="shoping-cart-word">
          Shopping cart <br />
          <span className="shoping-cart-word-span">
            You have 3 item in your cart
          </span>
        </div>
        <div className="shoping-cart-scroll">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
    </div>
  );
}
