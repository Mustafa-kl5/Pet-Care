import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/OrderHistory.css";
import api from "../../services/api";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import NoPostFound from "./NoPostFound";
import { getUserId } from "../../hooks/auth/getUserId";

export default function OrderHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    setIsLoading(true);
    const response = await api.post(`/getOrderHistory/:${getUserId()}`);
    setOrder(response.data.userOrder);
    setIsLoading(false);
  };
  let OrderID = 1;
  console.log(order);
  return isLoading ? (
    <div className="order-history-loading-center">
      <LoadingBar />
    </div>
  ) : order.length === 0 ? (
    <div className="order-history-loading-center">
      <NoPostFound massage="No Orders Yet" />
    </div>
  ) : (
    <div className="order-history-holder">
      <table className="table table-striped w-100 m-0 order-history-table ">
        <thead>
          <tr className="order-header">
            <th scope="col">#</th>
            <th scope="col">Order ID</th>
            <th scope="col">Order Details</th>
            <th scope="col">Total</th>
            <th scope="col">Order State</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order) => (
            <tr key={order._id} className="order-row">
              <th scope="row">#{OrderID++}</th>
              <td>{order._id}</td>
              <td>
                {order.products.map((product) => (
                  <div className="order-history-products-qunaitity-holder">
                    <div>{product.productName}</div>
                    <div>{product.productQuntity} x</div>
                    <div>{product.productPrice} $</div>
                  </div>
                ))}
              </td>
              <td>{order.totalPrice}$</td>
              <td>{order.orderState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
