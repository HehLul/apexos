import { useState, useEffect } from "react";
import "./Navbar.css";

import { XIcon } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="../apexos_logo.png" alt="ApexxOS Logo" />
        <h3>ApexxOS</h3>
      </div>

      {/* Desktop Navigation */}
      <ul className="desktop-nav">
        <a href="#vision">Vision</a>
        <a href="#product">Product</a>
        <a href="#pricing">Pricing</a>

        <a href="#portal">aOS Portal</a>
      </ul>

      {/* Desktop Buttons */}
      <div className="buttons desktop-buttons">
        <button className="btn-primary">Join Waitlist</button>
        {/* <button className="btn-primary">Get Started</button> */}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <XIcon></XIcon>
          </button>
        </div>

        <ul className="mobile-nav">
          <li>
            <a href="#vision" onClick={closeMenu}>
              Vision
            </a>
          </li>
          <li>
            <a href="#product" onClick={closeMenu}>
              Product
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#portal" onClick={closeMenu}>
              aOS Portal
            </a>
          </li>
        </ul>

        <div className="mobile-buttons">
          <button className="btn-secondary" onClick={closeMenu}>
            Join Waitlist
          </button>
          {/* <button className="btn-primary" onClick={closeMenu}>
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
