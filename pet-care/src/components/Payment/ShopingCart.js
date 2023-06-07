import React, { useEffect, useState } from "react";
import "../../componentStyle/Payment/ShopingCart.css";
import CartCard from "./CartCard";
import api from "../../services/api";
import ProductCard from "../Store/ProductCard";
import NoData from "../../shaerdComponents/NoData";
import emptyOrder from "../../Image/EmptyOrder.jpg";
import cartIcon from "../../Image/backet.png";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShopingCart(props) {
  const { OrderData, ID, handleUpdate, isLoading } = props;
  const Order = OrderData || {};
  const products = Order.products || [];
  const [updatedProducts, setUpdatedProducts] = useState(products);

  useEffect(() => {
    setUpdatedProducts(products);
  }, [products]);

  const deleteProduct = async (id) => {
    await api.delete("/OrderPage/deleteProductsFromPasket", {
      data: { OrderId: Order._id, ProductId: id, userID: ID },
    });
    notifySuccess();
    handleUpdate();
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    const updatedData = updatedProducts.filter((ele) => ele._id !== id);
    setUpdatedProducts(updatedData);
  };
  const notifySuccess = () =>
    toast.success("The Item Removed From pasket Successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="shoping-cart-holder">
      <div className="shoping-cart-logo-word">
        <div
          className="shoping-cart-logo"
          style={{ backgroundImage: `url("${cartIcon}")` }}
        ></div>
        <div className="shoping-cart-word">Your Order</div>
      </div>
      <div className="shoping-cart-word-scroll">
        <div className="shoping-cart-word">
          Shopping cart <br />
          <span className="shoping-cart-word-span">
            {`You have ${updatedProducts.length} item in your cart`}
          </span>
        </div>

        {isLoading ? (
          <div className="payment-loading-center">
            <LoadingBar />
          </div>
        ) : updatedProducts.length === 0 ? (
          <NoData />
        ) : (
          <div className="shoping-cart-scroll">
            {updatedProducts.map((ele, index) => (
              <CartCard
                key={ele._id}
                productData={ele}
                id={ele._id}
                index={index}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
