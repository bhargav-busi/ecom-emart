import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartProvider } from "./Components/Context/CartContext";
import store from './Components/Store';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Components/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <CartProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </CartProvider>
    
    </Provider>
  </React.StrictMode>
);
