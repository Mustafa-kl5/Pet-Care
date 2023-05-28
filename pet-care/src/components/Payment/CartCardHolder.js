import React, { useState, useEffect } from "react";
import "../../componentStyle/Payment/CartCardHolder.css";
import ShopingCart from "./ShopingCart";
import PaymentCard from "./PaymentCard";
import api from "../../services/api";
export default function CartCardHolder(props) {
  const [update, setUpdate] = useState(0);
  const [Order, setOrder] = useState([]);
  const [userId, setUserId] = useState();
  const [Loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await api.get("/OrderPage/fetchProdcutsToPasket", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const json = await response.data;
    setOrder(json.Order);
    setUserId(json.userID);
    setLoading(false);
  };

  const handleUpdate = () => {
    setUpdate(update + 1);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [update]);
  return (
    <div className="cart-card-holder">
      {Loading ? (
        <p>Loading</p>
      ) : (
        <>
          <ShopingCart
            OrderData={Order}
            ID={userId}
            handleUpdate={handleUpdate}
          />
          <PaymentCard OrderData={Order} ID={userId} />
        </>
      )}
    </div>
  );
}
