import React, { useContext, useState } from 'react';
import { Table, Button, Modal } from "react-bootstrap";
import { CartContext } from './CartContext';
import Footer from '../../components/Layout/Footer';
import "../../styles/CartStyle.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleClose = () => setShowPaymentModal(false);
  const handleShow = () => setShowPaymentModal(true);

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} style={{ height: "60px", borderRadius: "5px" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-end fw-bold">Grand Total:</td>
                <td colSpan="2" className="fw-bold">₹{totalAmount}</td>
              </tr>
              <tr>
                <td colSpan="7" className="text-end">
                  <Button variant="success" onClick={handleShow}>
                    ₹{totalAmount}Pay
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>

      {/* Modal for Payment Options */}
      <Modal show={showPaymentModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column gap-3 text-center">
            <Button variant="outline-primary" onClick={handleClose}>PhonePe</Button>
            <Button variant="outline-success" onClick={handleClose}>Google Pay</Button>
            <Button variant="outline-dark" onClick={handleClose}>Credit Card</Button>
            <Button variant="outline-secondary" onClick={handleClose}>Debit Card</Button>
          </div>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default Cart;
