import React, { useContext } from 'react';
import { CartContext } from '../../pages/Home/CartContext';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import '../../styles/Wishlist.css';

function Wishlist() {
  const { wishlistItems, toggleWishlist, addToCart } = useContext(CartContext);

  const removeFromWishlist = (item) => {
    toggleWishlist(item);
  };

  const handleAddToCart = (item) => {
    const product = {
      id: item.id,
      image: item.image,
      title: item.title,
      paragraph: item.paragraph,
      price: item.price,
      rating: item.rating || 0,
    };
    addToCart(product);
  };

  return (
    <>
      <Header />
      <div className="wishlist-page">
        <Container className="header-space">
          {/* <h2 className="text-center mb-4">Your Wishlist</h2> */}
          {wishlistItems.length === 0 ? (
            <div className="text-center">
              <p>Your wishlist is empty.</p>
              <Link to="/menu" className="btn btn-primary">Browse Menu</Link>
            </div>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.image} alt={item.title} style={{  height:"60px" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.paragraph}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromWishlist(item)}
                        className="me-2"
                      >
                        <i className="bi bi-trash"></i> Remove
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                      >
                        <i className="bi bi-bag-plus"></i> Add to Cart
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
