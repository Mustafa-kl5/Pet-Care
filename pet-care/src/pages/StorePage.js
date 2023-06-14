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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await api.get("/StorePage/sendProducts");
    const data = await response.data;
    setProducts(data.data);
    setIsLoading(false);
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
          isLoading={isLoading}
        />
      </ContentHolder>
    </MainBackGround>
  );
}
