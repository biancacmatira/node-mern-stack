import React from "react";
import "./ProductList.css";

import ProductItem from "./ProductItem";

const ProductList = (props) => {
  let content;

  if (!props.items || props.items.length === 0) {
    content = <p>No Products found. Maybe add one?</p>;
  } else {
    content = (
      <ul className="product-list">
        {props.items.map((item) => (
          <ProductItem key={item.id} title={item.title} price={item.price} />
        ))}
      </ul>
    );
  }
  return <section id="products">{content}</section>;
};

export default ProductList;
