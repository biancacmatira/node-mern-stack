import React, { useState } from "react";
import "./NewProduct.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

const NewProduct = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const priceHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddProduct(enteredTitle, enteredPrice);
  };

  return (
    <section id="new-product">
      <h2>Add Product</h2>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleHandler}
        />
        <Input
          type="text"
          label="Price"
          step={0.01}
          id="price"
          value={enteredPrice}
          onChange={priceHandler}
        />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default NewProduct;
