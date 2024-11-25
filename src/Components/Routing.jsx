import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './Product';
import App from '../App';
import CartPage from "../Components/CartPage";
import ProductDetails from '../Components/ProductDetails';


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Routing;
