import React, { useEffect, useState } from "react";
import "../../componentStyle/Payment/ShopingCart.css";
import CartCard from "./CartCard";
import api from "../../services/api";
import ProductCard from "../Store/ProductCard";
import NoData from "../../shaerdComponents/NoData";
import emptyOrder from "../../Image/EmptyOrder.jpg";
import cartIcon from "../../Image/backet.png";
export default function ShopingCart(props) {
  const Order = props.OrderData || {};
  const products = Order.products || [];
  const userId = props.ID;
  const { handleUpdate } = props;
  const [UpdatedProducts, setUpdatedProduct] = useState(products);
  const DeleteProducts = async (id) => {
    const response = await api.delete("/OrderPage/deleteProductsFromPasket", {
      data: { OrderId: Order._id, ProductId: id, userID: userId },
    });
    const json = await response.data;
    handleUpdate();
  };
  const handleDeletProduct = async (id) => {
    await DeleteProducts(id);
    const updatedData = UpdatedProducts.filter((ele) => ele._id !== id);
    setUpdatedProduct(updatedData);
  };
  return (
    <div className="shoping-cart-holder">
      {UpdatedProducts.length === 0 ? (
        <NoData
          imageURL={emptyOrder}
          NoDataLabel={"Nothing for your Pet Yet?! Go shopping!"}
        />
      ) : (
        <>
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
                {`You have ${UpdatedProducts.length} item in your cart`}
              </span>
            </div>
            <div className="shoping-cart-scroll">
              {UpdatedProducts.map((ele, index) => (
                <CartCard
                  key={index}
                  productData={ele}
                  id={ele._id}
                  index={index}
                  handleDeletProduct={handleDeletProduct}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
