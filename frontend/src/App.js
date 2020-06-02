import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ProductList from "./components/Products/ProductList";
import NewProduct from "./components/Products/NewProduct";

function App() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedProducts = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/product");
      const responseData = await response.json();

      console.log(responseData.products);
      setLoadedProducts(responseData.products);
      setIsLoading(false);
    };

    fetchedProducts();
  }, []);

  const addProductHandler = async (productTitle, productPrice) => {
    try {
      const newProduct = { title: productTitle, price: +productPrice };
      let hasError = false;
      const res = await fetch("http://localhost:5000/new-product", {
        method: "POST",
        body: JSON.stringify(newProduct),
        header: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        hasError = true;
      }
      const resData = await res.json();

      if (hasError) {
        throw new Error("Error: ", res.message);
      }

      setLoadedProducts((prevProducts) => {
        return prevProducts.concat({
          ...newProduct,
          id: resData.product.id,
        });
      });
    } catch (err) {
      console.error(err.message);
      alert(err.message || "Something went wrong!");
    }
  };

  return (
    <div className="App">
      <Header />
      <NewProduct onAddProduct={addProductHandler} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && <ProductList items={loadedProducts} />}
    </div>
  );
}

export default App;
