import React from "react";
import "../../componentStyle/ProfilePage/OrderInformation.css";
export default function OrderInformation(props) {
  const userOrderData = props.userOrder;
  return (
    <div className="order-information">
      <div className="order-data-header-holder">
        <div className="order-data-header">Order ID</div>
        <div className="order-data-header">Total Order </div>
        <div className="order-data-header">Order State</div>
      </div>
      {userOrderData.map((userOrder) => (
        <>
          <div className="order-body-data-holder">
            <div className="order-body-data">#{userOrder._id}</div>
            <div className="order-body-data">$ {userOrder.totalPrice}</div>
            <div className="order-body-data">{userOrder.orderState}</div>
          </div>
        </>
      ))}
    </div>
  );
}
