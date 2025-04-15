import React, { useContext, useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../styles/HeaderStyle.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../pages/Home/CartContext';
import Logo from "../../assets/logo/logo.png";

function Header() {
  const [nav, setNav] = useState(false);
  const { cartItems, wishlistItems } = useContext(CartContext);

  // Sticky navbar on scroll
  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/blog">Review</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

              <Nav.Link as={Link} to="/wishlist">
                <div className="wishlist">
                  <i className="bi bi-heart fs-5"></i>
                  <em className="roundpoint">{wishlistItems.length}</em>
                </div>
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{cartItems.length}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
