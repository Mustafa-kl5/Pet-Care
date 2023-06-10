import React, { useEffect, useState } from "react";
import "../../componentStyle/Payment/PaymentCard.css";
import api from "../../services/api";
import ErrorBackDrop from "../ErrorMessages/ErrorBackDrop";
import CardCartType from "./CardCartType";
import VisaImage from "../../Image/Visa.png";
import MasterCard from "../../Image/mastercard.png";
export default function PaymentCard(props) {
  const update = props.update;
  const userID = props.ID;
  const order = props.OrderData || {};
  const UpdatedProducts = order.products || [];
  const [BackDrop, setBackDrop] = useState(false);
  const [Message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [checkoutInput, setCheckoutInput] = useState({
    email: "",
    phoneNumber: "",
  });
  const handleCheckout = async () => {
    const response = await api.post("/OrderPage/getCardInformation", {
      userID: userID,
      OrderID: order._id,
      email: checkoutInput.email,
    });
    const json = await response.data;
    window.location = json.url;
  };
  const handleEmailChange = (e) => {
    setCheckoutInput({ ...checkoutInput, email: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setCheckoutInput({ ...checkoutInput, phoneNumber: e.target.value });
  };
  const CalculateTotal = () => {
    let calculatedTotal = 0;
    UpdatedProducts.forEach((element) => {
      calculatedTotal += element.productPrice * element.productQuntity;
    });
    setTotal(calculatedTotal);
  };
  useEffect(() => {
    CalculateTotal();
    if (UpdatedProducts.length < 1) setTotal(0);
  }, [UpdatedProducts, update]);
  return (
    <div className="payment-card-holder">
      <div className="payment-card-section">
        <div className="payment-card-title">Card Details</div>
        <div className="payment-card-title-section">Card type</div>
        <div className="payment-card-type-holder">
          <CardCartType imageSrc={MasterCard} />
          <CardCartType imageSrc={VisaImage} />
        </div>
        <form className="payment-form">
          <div className="payment-card-input-title">
            <div className="payment-card-title-section">Email</div>
            <input
              placeholder="Enter Your Email"
              className="payment-card-input"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="payment-card-input-title">
            <br></br>
            You will be redirected to the Stripe payment page to complete your
            payment.
          </div>
        </form>
        <div className="payment-total-submitButton">
          <div className="payment-total-holder">
            <div className="payment-total-word">Total</div>
            <div className="payment-total-word">{total} $</div>
          </div>
          <button
            className="payment-submitButton"
            type="submit"
            onClick={handleCheckout}>
            <span className="payment-total-word">{total} $</span>
            <span className="payment-total-word">Checkout</span>
          </button>
        </div>
      </div>
      <ErrorBackDrop show={BackDrop} HandelMessage={Message} />
    </div>
  );
}
