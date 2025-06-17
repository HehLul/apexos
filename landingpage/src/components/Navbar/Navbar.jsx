import { useState, useEffect } from "react";
import "./Navbar.css";

import { XIcon } from "lucide-react";

import Form from "../../components/Form/Form";

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

  // For form component
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  // Handle mobile join waitlist - close menu and open form
  const handleMobileJoinWaitlist = () => {
    closeMenu();
    openForm();
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="../apexos_logo.png" alt="ApexxOS Logo" />
          <h3>ApexxOS</h3>
        </div>

        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#features">Features</a>
        </ul>

        {/* Desktop Buttons */}
        <div className="buttons desktop-buttons">
          <button className="btn-primary" onClick={openForm}>
            Join Waitlist
          </button>
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
              <a href="#problem" onClick={closeMenu}>
                Problem
              </a>
            </li>
            <li>
              <a href="#solution" onClick={closeMenu}>
                Solution
              </a>
            </li>
            <li>
              <a href="#features" onClick={closeMenu}>
                Features
              </a>
            </li>
          </ul>

          <div className="mobile-buttons">
            <button className="btn-primary" onClick={handleMobileJoinWaitlist}>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      <Form isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}

export default Navbar;
