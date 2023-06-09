import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/OrderHistory.css";
import api from "../../services/api";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import NoPostFound from "./NoPostFound";

export default function OrderHistory() {
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    setIsLoading(true);
    const response = await api.post("/ProfilePage/getOrderDetails");
    setOrder(response.data.userOrder);
    console.log(response.data);
    setIsLoading(false);
  };

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
      <table className="table table-striped w-100 m-0 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
