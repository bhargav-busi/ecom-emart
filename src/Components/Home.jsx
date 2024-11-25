import React, { useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import { products, discoutProducts } from "../Components/products";
import { useCart } from "./Context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  const { addToCart } = useCart();

  const allProducts = [...products, ...discoutProducts];
  const newArrivals = allProducts.filter(
    (product) => product.categories === "New Arrivals"
  );
  const bestSales = allProducts.filter(
    (product) => product.categories === "Best Sales"
  );
  const bigDiscounts = discoutProducts;

  const [wishlist, setWishlist] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
  });

  const handleWishlistClick = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]);
    } else {
      setWishlist(wishlist.filter((id) => id !== productId));
    }
  };

  const showNotification = (message) => {
    setNotification({ visible: true, message });
    setTimeout(() => setNotification({ visible: false, message: "" }), 3000); // Auto-hide after 3 seconds
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification(`${product.productName} is added to the cart!`);
  };

  const renderProductSection = (title, products, badgeType) => (
    <div className="product-section">
      <h2 className="text-center mb-4">{title}</h2>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-md-4 col-sm-6 mb-4"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div
              className={`card h-100 shadow-sm ${
                hoveredProduct === product.id ? "border border-primary" : ""
              }`}
            >
              <div className="position-relative">
                {/* Link to Product Details */}
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.imgUrl || "placeholder-image-url.jpg"}
                    className="card-img-top"
                    alt={product.productName}
                    onError={(e) =>
                      (e.target.src = "placeholder-image-url.jpg")
                    }
                  />
                  {badgeType === "Discount" && product.discount && (
                    <span className="badge position-absolute top-0 start-0 m-2 bg-primary">
                      {product.discount}% Off
                    </span>
                  )}
                  {badgeType !== "Discount" && (
                    <span className="badge position-absolute top-0 start-0 m-2 bg-primary">
                      {badgeType}
                    </span>
                  )}
                </Link>
                <div
                  className="position-absolute top-0 end-0 m-2 wishlist-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleWishlistClick(product.id)}
                >
                  <i
                    className="bi bi-heart-fill"
                    style={{
                      fontSize: "1.2rem",
                      color: wishlist.includes(product.id) ? "red" : "gray",
                    }}
                  ></i>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <div className="d-flex align-items-center justify-content-center mb-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <i
                      key={index}
                      className={`bi ${
                        index < product.rating
                          ? "bi-star-fill"
                          : "bi bi-star-fill"
                      }`}
                      style={{
                        fontSize: "1.2rem",
                        color: index < product.rating ? "gray" : "gold",
                      }}
                    ></i>
                  ))}
                </div>
                <p className="fw-bold">${product.price}</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      {/* Notification */}
      {notification.visible && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{
            zIndex: 1050,
            backgroundColor: "#4caf50",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {notification.message}
        </div>
      )}

      {/* Product Sections */}
      {renderProductSection("Big Discounts", bigDiscounts, "Discount")}
      {renderProductSection("New Arrivals", newArrivals, "New")}
      {renderProductSection("Best Sales", bestSales, "Best Sales")}

     
    </div>
  );
};

export default Home;
