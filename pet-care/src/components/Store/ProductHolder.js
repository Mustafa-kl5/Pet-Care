import React, { useEffect, useState } from "react";
import "../../componentStyle/Store/ProductHolder.css";
import ProductCard from "./ProductCard";
import api from "../../services/api";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import NoPostFound from "../Profile/NoPostFound";

export default function ProductHolder(props) {
  const type = props.ProductType;
  const products = props.Products;
  const animalType = props.animalType;
  const filterdproducts = products.filter(
    (ele) => ele.productType === type && ele.animalType === animalType
  );

  return (
    <div
      className={
        props.isLoading || filterdproducts.length === 0
          ? "product-card-holder-loading"
          : "product-card-holder"
      }
    >
      {props.isLoading ? (
        <LoadingBar />
      ) : filterdproducts.length === 0 ? (
        <NoPostFound massage={"No Product Found"} />
      ) : (
        filterdproducts.map((ele, index) => (
          <ProductCard
            key={index}
            id={ele._id}
            name={ele.productName}
            type={ele.animalType}
            price={ele.productPrice}
            image={ele.productImages[0].fileName}
          />
        ))
      )}
    </div>
  );
}
