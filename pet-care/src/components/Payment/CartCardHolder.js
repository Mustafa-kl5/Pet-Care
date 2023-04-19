import React from "react";
import "../../componentStyle/Payment/CartCardHolder.css";
import ShopingCart from "./ShopingCart";
import PaymentCard from "./PaymentCard";
export default function CartCardHolder() {
  return (
    <div className="cart-card-holder">
      <ShopingCart />
      <PaymentCard />
    </div>
  );
}
