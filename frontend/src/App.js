import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';
import ProductList from './components/Products/ProductList';
import NewProduct from './components/Products/NewProduct';

function App() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const fetchedProducts = async() => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/product');
      const responseData = await response.json();

      console.log(responseData.products);
      setLoadedProducts(responseData.products);
      setIsLoading(false);
    }

    fetchedProducts();
  },[]);

  return (
    <div className="App">
      <Header />

    </div>
  );
}

export default App;
