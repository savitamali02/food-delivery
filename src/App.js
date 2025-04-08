import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About  from "./pages/Home/About";
import Menu from "./pages/Home/Menu";
import Shop from "./pages/Home/Shop";
import Blog from "./pages/Home/Blog";
import Contact from "./pages/Home/Contact";
import CartProvider from "./pages/Home/CartContext";
import Cart from "./pages/Home/Cart";
//import Header from "../components/layout/Header";


function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </Router>
    </CartProvider>
  );
}

export default App;
