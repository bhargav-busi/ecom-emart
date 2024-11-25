import React from "react";
import { useCart } from "./Context/CartContext";
import { Link } from "react-router-dom";
import achieversITLogo from "../Assets/Images/achieversIT.png";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={achieversITLogo} alt="Logo" style={{ width: "150px" }} />
          </Link>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link position-relative">
                 Cart
                  
                 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <i className="bi bi-person-circle"></i> {/* Profile Icon */}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link position-relative">
                  <i className="bi bi-cart3"></i> {/* Cart Icon */}
                  {totalItems > 0 && (
                    <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
