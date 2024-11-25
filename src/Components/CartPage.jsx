import React from "react";
import { useCart } from "./Context/CartContext";
import Footer from "./Footer";
import Header from "./Header";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="text-center mb-4">Your Cart</h1>
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cart.length > 0 ? (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center mb-4 shadow-sm p-3 bg-white rounded"
                  >
                    {/* Product Image */}
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      style={{
                        width: "100px",
                        height: "auto",
                        objectFit: "cover",
                        marginRight: "20px",
                      }}
                    />
                    {/* Product Details */}
                    <div style={{ flex: 1 }}>
                      <h5 className="mb-1">{item.productName}</h5>
                      <p className="mb-1">
                        ${item.price.toFixed(2)} x {item.quantity} ={" "}
                        <b>${(item.price * item.quantity).toFixed(2)}</b>
                      </p>
                    </div>
                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">Your cart is empty.</p>
            )}
          </div>
          {/* Cart Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-4 rounded">
              <h5 className="mb-3">Cart Summary</h5>
              <p>Total Items: <b>{totalItems}</b></p>
              <p>Total Price: <b>${totalPrice.toFixed(2)}</b></p>
              <button className="btn btn-success w-100">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
