import React,{useContext} from 'react';
import {Col, Card} from "react-bootstrap";
//import { Link } from 'react-router-dom';
import { CartContext } from '../../pages/Home/CartContext';

function Cards({id,image, rating, title, paragraph, price,renderRatingIcons}) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id,image, rating, title, paragraph, price };
    addToCart(product);
  };
  return (
    
      <Col sm={0} lg={4} xl={3} className="mb-4">
        <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
            <Card.Img variant="top" src={image}/>
        </div>

      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
            <i className="bi bi-heart"></i>
            </div>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {paragraph}
        </Card.Text>
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
    
  )
}

export default Cards;
