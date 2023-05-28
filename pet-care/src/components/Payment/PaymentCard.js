import React, { useEffect, useState } from "react";
import "../../componentStyle/Payment/PaymentCard.css";
import api from "../../services/api";
import ErrorBackDrop from "../ErrorMessages/ErrorBackDrop";
import CardCartType from "./CardCartType";
export default function PaymentCard(props) {
  const userID = props.ID;
  const order = props.OrderData;
  const UpdatedProducts = order.products;
  const [BackDrop, setBackDrop] = useState(false);
  const [Message, setMessage] = useState("");
  const [CardInformation, setCardInformation] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    totalPrice: "",
  });
  const handleCloseBackDrop = () => {
    setBackDrop(false);
  };

  const handleCardInformation = async () => {
    const response = await api.post("/OrderPage/getCardInformation", {
      userID: userID,
      OrderID: order._id,
      CardInfo: CardInformation,
    });
    const json = await response.data;
    setMessage(json.message);
    setBackDrop(true);
  };
  const handleCardName = (e) => {
    setCardInformation({ ...CardInformation, cardName: e.target.value });
  };
  const handleCardNumber = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ");
    e.target.value = formattedValue;
    setCardInformation({ ...CardInformation, cardNumber: inputValue });
  };
  const handleExpirationdate = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{1,2})/, "$1/$2");
    setCardInformation({ ...CardInformation, cardExpiry: formattedValue });
    e.target.value = formattedValue;
  };

  const handleCVV = (e) => {
    setCardInformation({ ...CardInformation, cardCvc: e.target.value });
  };
  const CalculateTotal = () => {
    let calculatedTotal = 0;
    for (let i = 0; i < UpdatedProducts.length; i++) {
      calculatedTotal +=
        UpdatedProducts[i].productPrice * UpdatedProducts[i].productQuntity;
    }
    setCardInformation({ ...CardInformation, totalPrice: calculatedTotal });
  };
  useEffect(() => {
    if (UpdatedProducts.length > 0) CalculateTotal();
    else {
      setCardInformation({ ...CardInformation, totalPrice: 0 });
    }
  }, [UpdatedProducts]);
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
            <input
              placeholder="Name"
              className="payment-card-input"
              onChange={handleCardName}
            />
          </div>
          <div className="payment-card-input-title">
            <div className="payment-card-title-section">Card Number</div>
            <input
              placeholder="1111 2222 3333 4444"
              className="payment-card-input"
              onChange={handleCardNumber}
              maxLength={20}
            />
          </div>
          <div className="payment-card-expiration-cvv">
            <div className="payment-card-ec">
              <div className="payment-card-title-section">Expiration date</div>
              <input
                placeholder="mm/yy"
                className="payment-card-input-ec"
                onChange={handleExpirationdate}
                maxLength={5}
              />
            </div>
            <div className="payment-card-ec">
              <div className="payment-card-title-section">CVV</div>
              <input
                placeholder="123"
                className="payment-card-input-ec"
                onChange={handleCVV}
                maxLength={3}
              />
            </div>
          </div>
        </form>
        <div className="payment-total-submitButton">
          <div className="payment-total-holder">
            <div className="payment-total-word">Total</div>
            <div className="payment-total-word">
              {CardInformation.totalPrice} $
            </div>
          </div>
          <button
            className="payment-submitButton"
            type="submit"
            onClick={handleCardInformation}
          >
            <span className="payment-total-word">
              {CardInformation.totalPrice} $
            </span>
            <span className="payment-total-word">Checkout</span>
          </button>
        </div>
      </div>
      <ErrorBackDrop
        show={BackDrop}
        HandelMessage={Message}
        CloseBackDrop={handleCloseBackDrop}
      />
    </div>
  );
}
