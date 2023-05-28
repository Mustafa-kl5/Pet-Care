import React, { useEffect, useState } from "react";
import "../../componentStyle/Payment/ShopingCart.css";
import cartIcon from "../../Image/backet.png";
import CartCard from "./CartCard";
import api from "../../services/api";
export default function ShopingCart(props) {
  const Order = props.OrderData;
  const products = Order.products;
  const userId = props.ID;
  const { handleUpdate } = props;
  const [productId, setProductId] = useState();
  const [product, setProduct] = useState(products);
  const DeleteProducts = async (id) => {
    const response = await api.delete("/OrderPage/deleteProductsFromPasket", {
      data: { OrderId: Order._id, ProductId: id, userID: userId },
    });
    const json = await response.data;
    handleUpdate();
  };

  useEffect(() => {
    if (productId) {
      DeleteProducts(productId);
    }
    setProductId(null);
  }, [productId]);
  const handleDeletProduct = (id) => {
    const updatedProduct = product.filter((item) => item._id !== id);
    setProduct(updatedProduct);
    setProductId(id);
  };
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
            {`You have ${product.length} item in your cart`}
          </span>
        </div>
        <div className="shoping-cart-scroll">
          {product.map((ele, index) => (
            <CartCard
              productData={ele}
              index={index}
              handleDeletProduct={handleDeletProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
