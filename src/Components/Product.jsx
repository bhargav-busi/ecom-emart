import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, setCategories } from "../Components/ProductSlice";
import { useCart } from "./Context/CartContext";
import Footer from "./Footer";
import tableImage from "../Assets/Images/table.jpg";
import Header from "./Header";

const Product = () => {
  const dispatch = useDispatch();
  const { addToCart } = useCart();

  const { filteredProducts, categories, selectedCategory, searchText } =
    useSelector((state) => state.products);

  const [notification, setNotification] = useState({ visible: false, message: "" });
  const [wishlist, setWishlist] = useState([]); // Track the wishlist products

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(filterProducts({ category, searchText }));
  };

  const handleSearchChange = (e) => {
    const text = e.target.value;
    dispatch(filterProducts({ category: selectedCategory || "Filter BY Category", searchText: text }));
  };

  const showNotification = (message) => {
    setNotification({ visible: true, message });
    setTimeout(() => setNotification({ visible: false, message: "" }), 3000); // Auto-hide after 3 seconds
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification(`${product.productName} is added to the cart!`);
  };

  const handleWishlistClick = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]);
    } else {
      setWishlist(wishlist.filter((id) => id !== productId));
    }
  };

  return (
    <>
      <Header />
      <div className="container my-4">
        <div
          className="banner text-black text-center py-5"
          style={{
            backgroundImage: `url(${tableImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="display-4 fw-bold">Products</h1>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* Category Dropdown */}
          <select
            className="form-select bg-primary text-white w-25"
            onChange={handleCategoryChange}
            value={selectedCategory || "Filter BY Category"}
            aria-label="Filter products by category"
          >
            {categories?.length > 0 ? (
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))
            ) : (
              <option disabled>No categories available</option>
            )}
          </select>

          {/* Search Bar */}
          <input
            type="text"
            className="form-control w-50 mt-3"
            placeholder="Search products..."
            value={searchText || ""}
            onChange={handleSearchChange}
            aria-label="Search products"
          />
        </div>

        {/* Product Grid */}
        <div className="row">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
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
                  </Link>
                  <div className="position-relative">
                    {/* Wishlist Icon */}
                    <div
                      className="position-absolute top-0 end-0 m-2"
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

                    {/* Star Ratings */}
                    <div className="d-flex justify-content-center align-items-center mb-2">
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

                    <p className="fw-bold">${product.price.toFixed(2)}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                      aria-label={`Add ${product.productName} to cart`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No products found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Notification */}
      {notification.visible && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{
            zIndex: 1050,
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {notification.message}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Product;
