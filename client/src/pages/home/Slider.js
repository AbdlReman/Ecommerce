import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductSlider from "./ProductSlider";

const Slider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-list/1");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ProductSlider products={products} />
    </div>
  );
};

export default Slider;
