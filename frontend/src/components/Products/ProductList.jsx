import React from "react";

import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = (props) => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>No products found. Maybe create one?</p>;
  } else {
    content = (
      <ul>
        {props.items.map((item) => {
          <ProductItem key={item.id} name={item.title} price={item.price} />;
        })}
      </ul>
    );
  }

  return <section id="products">{content}</section>;
};

export default ProductList;
