import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((products) => (
        <ProductCard {...products} />
      ))}
    </div>
  );
};

export default ProductList;
