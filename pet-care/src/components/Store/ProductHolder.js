import React from "react";
import "../../componentStyle/Store/ProductHolder.css";
import ProductCard from "./ProductCard";
export default function ProductHolder() {
  return (
    <div className="product-card-holder">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
