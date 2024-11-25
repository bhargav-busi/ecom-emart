import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./products";
import { useCart } from "./Context/CartContext";
import Footer from "./Footer";
import tableImage from "../Assets/Images/table.jpg";
import Header from "./Header";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const similarProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.productName, // Pass correct product name
      imgUrl: product.imgUrl,
      price: product.price,
      quantity,
    });

    // Show notification
    setNotification(`${product.productName} is added to the cart!`);

    // Hide notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddSimilarToCart = (similarProduct) => {
    addToCart({
      id: similarProduct.id,
      name: similarProduct.productName, // Pass correct product name
      imgUrl: similarProduct.imgUrl,
      price: similarProduct.price,
      quantity: 1,
    });

    // Show notification
    setNotification(`${similarProduct.productName} is added to the cart!`);

    // Hide notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  const renderStars = (rating) => {
    return (
      <div className="d-flex justify-content-center align-items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <i
            key={index}
            className={`bi ${index < rating ? "bi-star-fill" : "bi-star"}`}
            style={{
              fontSize: "1.2rem",
              color: index < rating ? "gold" : "gray",
            }}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div
        className="banner text-black text-center py-5"
        style={{
          backgroundImage: `url(${tableImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="display-4 fw-bold">{product.productName}</h1>
      </div>

      <main className="product-details container my-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src={product.imgUrl}
              alt={product.productName}
              className="img-fluid border rounded"
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">{product.productName}</h1>
            <p className="text-muted mb-2">
              Category: <strong>{product.category}</strong>
            </p>
            <p className="text-warning text-black">
              Rating: {product.avgRating}
            </p>
            <p className="price display-4 text-success">${product.price}</p>
            <div className="quantity-control mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="form-control w-50"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
            <p className="description text-secondary m-5"><b>Description: </b>{product.description}</p>
        </div>

        <section className="similar-products mt-5">
          <h2 className="text-center mb-4">You might also like</h2>
          <div className="row g-4">
            {similarProducts.length > 0 ? (
              similarProducts.map((similarProduct) => (
                <div key={similarProduct.id} className="col-md-3">
                  <div className="card">
                    <Link to={`/product/${similarProduct.id}`}>
                      <img
                        src={similarProduct.imgUrl}
                        alt={similarProduct.productName}
                        className="card-img-top"
                      />
                    </Link>
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        {similarProduct.productName}
                      </h5>
                      <p className="text-warning">
                        {renderStars(similarProduct.avgRating)}
                      </p>
                      <p className="text-success">${similarProduct.price}</p>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => handleAddSimilarToCart(similarProduct)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No similar products found.</p>
            )}
          </div>
        </section>
      </main>

      {/* Notification Component */}
      {notification && (
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          {notification}
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;
