import React, { useContext, useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../pages/Home/CartContext';
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
//import { FilterContext } from '../../pages/Home/FilterContext';


function Header() {
  const [nav, setNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { cartItems, wishlistItems } = useContext(CartContext);
  const searchRef = useRef(null);

  const suggestions = [
    "Pizza",
    "Burger",
    "Fries",
   "Starter",
    "South Indian",
    "Dessert"
  ];

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setNav(scrollTop > 100);
    };

    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`navbar ${nav ? "sticky" : ""}`}>
        <Container>

          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          {/* Desktop Search Bar */}
          <div className="search-bar-container d-none d-lg-flex align-items-center" ref={searchRef}>
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
              value={searchTerm}
              onClick={() => setShowSuggestions(true)}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
            />
            <i className="bi bi-search search-icon-inside"></i>

            {/* Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <ul className="suggestions-list">
                {filteredSuggestions.map((item, index) => (
                  <li key={index} onClick={() => {
                    setSearchTerm(item);
                    setShowSuggestions(false);
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Search Icon */}
          <div className="mobile-search-wrapper d-lg-none">
            {!showSearch && (
              <div className="search-toggle-icon" onClick={() => setShowSearch(true)}>
                <i className="bi bi-search"></i>
              </div>
            )}
          </div>

          {/* Floating Search Bar (Mobile) */}
          {showSearch && (
            <div className="floating-search-bar d-lg-none" ref={searchRef}>
              <input
                type="text"
                className="form-control floating-input"
                placeholder="Search here..."
                value={searchTerm}
                onClick={() => setShowSuggestions(true)}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                }}
              />
              <i
                className="bi bi-x-lg close-floating-icon"
                onClick={() => {
                  setShowSearch(false);
                  setShowSuggestions(false);
                  setSearchTerm('');
                }}
              ></i>

              {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="suggestions-list mobile">
                  {filteredSuggestions.map((item, index) => (
                    <li key={index} onClick={() => {
                      setSearchTerm(item);
                      setShowSuggestions(false);
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Cart & Wishlist Icons */}
          <div className="d-flex align-items-center order-lg-3 icon-group">
            <Nav.Link as={Link} to="/wishlist" className="px-2">
              <div className="wishlist">
                <i className="bi bi-heart fs-5"></i>
                <em className="roundpoint">{wishlistItems.length}</em>
              </div>
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className="px-2">
              <div className="cart">
                <i className="bi bi-bag fs-5"></i>
                <em className="roundpoint">{cartItems.length}</em>
              </div>
            </Nav.Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          {/* Nav Links */}
          <Navbar.Collapse id="responsive-navbar-nav" className="order-lg-2">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/blog">Review</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
         

        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
