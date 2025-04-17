import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About  from "./pages/Home/About";
import Menu from "./pages/Home/Menu";
import Blog from "./pages/Home/Blog";
import Contact from "./pages/Home/Contact";
import CartProvider from "./pages/Home/CartContext";
import Cart from "./pages/Home/Cart";
import Wishlist from './pages/Home/Wishlist';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



//import Header from "../components/layout/Header";


import { ParallaxProvider } from 'react-scroll-parallax'; // 👈 import this
import ScrollToTop from "./components/Layout/ScrollTotop";

function App() {
  return (
    <CartProvider>
      <ParallaxProvider> {/* 👈 Wrap everything here */}
        <Router>
         
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
         
        </Router>
      </ParallaxProvider>
    </CartProvider>
  );
}
export default App;

