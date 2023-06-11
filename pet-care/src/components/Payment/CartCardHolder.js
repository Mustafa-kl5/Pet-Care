import React, { useState, useEffect } from "react";
import "../../componentStyle/Payment/CartCardHolder.css";
import ShopingCart from "./ShopingCart";
import PaymentCard from "./PaymentCard";
import api from "../../services/api";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import NoData from "../../shaerdComponents/NoData";

export default function CartCardHolder() {
  const [update, setUpdate] = useState(false);
  const [order, setOrder] = useState({});
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/OrderPage/fetchProdcutsToPasket", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { Order, userID } = response.data;
      if (!Order || !userID) {
        setOrder({});
        setUserId("");
      } else {
        setOrder(Order);
        setUserId(userID);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleUpdate = () => {
    setUpdate((prevUpdate) => !prevUpdate);
  };
  useEffect(() => {
    getData();
  }, [update]);
  return loading ? (
    <div className="payment-loading-center">
      <LoadingBar />
    </div>
  ) : order.length === 0 ? (
    <NoData />
  ) : (
    <div className="cart-card-holder">
      <ShopingCart
        OrderData={order}
        ID={userId}
        handleUpdate={handleUpdate}
        isLoading={loading}
      />
      <PaymentCard OrderData={order} ID={userId} update={update} />
    </div>
  );
}
