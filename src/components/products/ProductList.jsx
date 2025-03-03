import React from "react";
import ProductCard from "./ProductCard";
import "./Product.scss";

const ProductList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((products) => (
        <ProductCard key={products.id} {...products} />
      ))}
    </div>
  );
};

export default ProductList;
