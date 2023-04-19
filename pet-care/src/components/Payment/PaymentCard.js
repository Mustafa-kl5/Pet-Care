import React from "react";
import "../../componentStyle/Payment/PaymentCard.css";
import CardCartType from "./CardCartType";

export default function PaymentCard() {
  return (
    <div className="payment-card-holder">
      <div className="payment-card-section">
        <div className="payment-card-title">Card Details</div>
        <div className="payment-card-title-section">Card type</div>
        <div className="payment-card-type-holder">
          <CardCartType />
          <CardCartType />
          <CardCartType />
          <CardCartType />
        </div>
        <form className="payment-form">
          <div className="payment-card-input-title">
            <div className="payment-card-title-section">Name on card</div>
            <input placeholder="Name" className="payment-card-input" />
          </div>
          <div className="payment-card-input-title">
            <div className="payment-card-title-section">Card Number</div>
            <input
              placeholder="1111 2222 3333 4444"
              className="payment-card-input"
            />
          </div>
          <div className="payment-card-expiration-cvv">
            <div className="payment-card-ec">
              <div className="payment-card-title-section">Expiration date</div>
              <input placeholder="mm/yy" className="payment-card-input-ec" />
            </div>
            <div className="payment-card-ec">
              <div className="payment-card-title-section">CVV</div>
              <input placeholder="123" className="payment-card-input-ec" />
            </div>
          </div>
        </form>
        <div className="payment-total-submitButton">
          <div className="payment-total-holder">
            <div className="payment-total-word">Total</div>
            <div className="payment-total-word">1200$</div>
          </div>
          <button className="payment-submitButton">
            <span className="payment-total-word">1200</span>
            <span className="payment-total-word">Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
