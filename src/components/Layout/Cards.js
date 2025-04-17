import React, { useContext, useState, useEffect } from 'react';
import { Col, Card } from "react-bootstrap";
import { CartContext } from '../../pages/Home/CartContext';

function Cards({ id, image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart, toggleWishlist, wishlistItems } = useContext(CartContext);

  const product = { id, image, rating, title, paragraph, price };

  const [isWishlisted, setIsWishlisted] = useState(false);
  

  // 💡 Sync local heart state with global wishlist
  useEffect(() => {
    const exists = wishlistItems.some((item) => item.id === id);
    setIsWishlisted(exists);
  }, [wishlistItems, id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product); // ✅ Add/remove from context
    setIsWishlisted(!isWishlisted); // 🖤 Toggle icon state
  };

  return (
    <Col sm={0} lg={4} xl={3} className="mb-4">
      <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
          <Card.Img variant="top" src={image} />
        </div>

        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist" onClick={handleToggleWishlist} style={{ cursor: 'pointer' }}>
              <i className={`bi ${isWishlisted ? "bi-heart-fill text-danger" : "bi-heart"}`}></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className='d-flex align-items-center justify-content-between'>
            <div className='menu_price'>
              <h5 className='mb-0'>₹{price}</h5>
            </div>
            <div className='add_to_card'>
              <button onClick={handleAddToCart} className="btn btn-sm btn-outline-primary">
                <i className="bi bi-bag me-2"></i> Add To Cart
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
