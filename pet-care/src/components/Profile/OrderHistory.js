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
    const json = await response.data;
    setOrder(json.userOrder);
    setIsLoading(false);
  };
  let OrderID = 1;
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
          {order.map((ele, index) => (
            <tr key={ele._id} className="order-row">
              <th scope="row">#{OrderID++}</th>
              <td>{ele._id}</td>
              <td>
                {ele.Order?.products?.map((item, productIndex) => (
                  <div
                    className="order-history-products-qunaitity-holder"
                    key={productIndex}>
                    <div className="order-history-body-details">
                      {item.Product.productName}
                    </div>
                    <div className="order-history-body-details">
                      {item.ProductQuantity} x
                    </div>
                    <div className="order-history-body-details">
                      {item.Product.productPrice} $
                    </div>
                  </div>
                ))}
              </td>
              <td>{ele.Order?.totalPrice}$</td>
              <td>{ele.Order?.orderState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
