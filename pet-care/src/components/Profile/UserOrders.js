import React from "react";
import "../../componentStyle/ProfilePage/userOrders.css";
import OrderInformation from "./OrderInformation";
import OrdersHeader from "./OrdersHeader";
export default function UserOrder(props) {
  const userOrder = props.userOrder || [];
  return (
    <div className="user-orders-holder">
      <OrdersHeader />
      <OrderInformation userOrder={userOrder} />
    </div>
  );
}
