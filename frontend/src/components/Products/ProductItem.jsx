import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <li className="product-item">
      <h1>{props.title}</h1>
      <p>Price: {props.price}</p>
    </li>
  );
};

export default ProductItem;
