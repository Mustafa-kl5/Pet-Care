import React, { useEffect, useState } from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import StoreHeader from "../components/Store/StoreHeader";
import ProductHolder from "../components/Store/ProductHolder";
import api from "../services/api";

export default function Store(props) {
  const [Products, setProducts] = useState([]);
  const [Type, setType] = useState("");
  const [animalType, setanimalType] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await api.get("/StorePage/sendProducts");
    const data = await response.data;
    setProducts(data.data);
  };
  const handleProductType = (data, animalType) => {
    setType(data);
    setanimalType(animalType);
  };
  return (
    <MainBackGround>
      <ContentHolder>
        <StoreHeader handleProductType={handleProductType} />
        <ProductHolder
          ProductType={Type}
          animalType={animalType}
          Products={Products}
        />
      </ContentHolder>
    </MainBackGround>
  );
}
