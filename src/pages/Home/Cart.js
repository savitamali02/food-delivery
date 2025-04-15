import React, { useContext, useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Accordion } from "react-bootstrap";
import { CartContext } from './CartContext';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import PhonePeIcon from '../../icons/phonepe.jpg';
import GPayIcon from '../../icons/googlepay.jpg';
import MyQRCodeImg from '../../icons/myqr.jpeg';
import "../../styles/CartStyle.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [activeStep, setActiveStep] = useState("1");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);

  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [editModeIndex, setEditModeIndex] = useState(null);

  const [codPhone, setCodPhone] = useState("");
  const [codOtp, setCodOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [, setCodVerified] = useState(false);
  const [codStep, setCodStep] = useState(1);

  const [showCodSuccessModal, setShowCodSuccessModal] = useState(false);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalAmount = selectedPayment === "cod" ? totalAmount + 50 : totalAmount;

  // 🟢 Load addresses from localStorage on mount
  useEffect(() => {
    const storedAddresses = localStorage.getItem('deliveryAddresses');
    if (storedAddresses) {
      setAddresses(JSON.parse(storedAddresses));
    }
  }, []);

  // 🔵 Save addresses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('deliveryAddresses', JSON.stringify(addresses));
  }, [addresses]);

  const handleVerifyOtp = () => {
    if (otp === "1234") setVerified(true);
    setActiveStep("2");
  };

  return (
    <>
      <Header />
      <div className='cart container my-5'>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
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
                    <td><img src={item.image} alt={item.title} style={{ height: "60px", borderRadius: "5px" }} /></td>
                    <td>{item.title}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 0}>-</Button>
                        <span>{item.quantity}</span>
                        <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                      </div>
                    </td>
                    <td>₹{item.price * item.quantity}</td>
                    <td><Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button></td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="text-end fw-bold">Grand Total:</td>
                  <td colSpan="2" className="fw-bold">₹{totalAmount}</td>
                </tr>
                <tr>
                  <td colSpan="7" className="text-end">
                    <Button variant="success" onClick={() => setShowPaymentModal(true)}>
                      ₹{totalAmount} Pay
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        )}
      </div>

      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion activeKey={activeStep} onSelect={(e) => setActiveStep(e)}>
            {/* Step 1: Personal Details */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>1. Personal Details</Accordion.Header>
              <Accordion.Body>
                {!verified ? (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                    <Button onClick={() => setOtp("1234")}>Send OTP</Button>
                    <Form.Group className="my-3">
                      <Form.Label>Enter OTP</Form.Label>
                      <Form.Control type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    </Form.Group>
                    <Button onClick={handleVerifyOtp}>Verify</Button>
                  </>
                ) : (
                  <p className="text-success">Verified ✅</p>
                )}
              </Accordion.Body>
            </Accordion.Item>

            {/* Step 2: Delivery Address */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>2. Delivery Address</Accordion.Header>
              <Accordion.Body>
                {addresses.length === 0 && <p>No address added yet.</p>}
                {addresses.map((addr, index) => (
                  <div key={index} className="border rounded p-2 mb-2">
                    <Form.Check
                      type="radio"
                      name="selectedAddress"
                      id={`addr-${index}`}
                      label={addr}
                      checked={selectedAddressIndex === index}
                      onChange={() => setSelectedAddressIndex(index)}
                    />
                    <div className="mt-2">
                      <Button size="sm" variant="outline-primary" className="me-2" onClick={() => {
                        setNewAddress(addr);
                        setEditModeIndex(index);
                      }}>
                        Edit
                      </Button>
                      <Button size="sm" variant="outline-danger" onClick={() => {
                        const updated = addresses.filter((_, i) => i !== index);
                        setAddresses(updated);
                        if (selectedAddressIndex === index) setSelectedAddressIndex(null);
                      }}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
                <Form.Group className="mt-3">
                  <Form.Label>{editModeIndex !== null ? "Edit Address" : "Add New Address"}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  />
                  <Button
                    className="mt-2"
                    onClick={() => {
                      if (newAddress.trim() === "") return;
                      if (editModeIndex !== null) {
                        const updated = [...addresses];
                        updated[editModeIndex] = newAddress;
                        setAddresses(updated);
                        setEditModeIndex(null);
                      } else {
                        setAddresses([...addresses, newAddress]);
                      }
                      setNewAddress("");
                    }}
                  >
                    {editModeIndex !== null ? "Save Changes" : "Add Address"}
                  </Button>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            {/* Step 3: Order Summary */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>3. Order Summary</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {cartItems.map(item => (
                    <li key={item.id}>{item.title} x {item.quantity} = ₹{item.price * item.quantity}</li>
                  ))}
                </ul>
                <h5>Total: ₹{totalAmount}</h5>
                {selectedAddressIndex !== null && (
                  <p className="mt-3"><strong>Delivering to:</strong> {addresses[selectedAddressIndex]}</p>
                )}
              </Accordion.Body>
            </Accordion.Item>

            {/* Step 4: Payment Options */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>4. Payment Options</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-3 text-center">
                  <Button variant="outline-primary" className="d-flex align-items-center justify-content-center gap-2" onClick={() => setSelectedPayment("phonepe")}>
                    <img src={PhonePeIcon} alt="PhonePe" width="24" /> PhonePe
                  </Button>
                  <Button variant="outline-success" className="d-flex align-items-center justify-content-center gap-2" onClick={() => setSelectedPayment("gpay")}>
                    <img src={GPayIcon} alt="GPay" width="24" /> Google Pay
                  </Button>
                  <Button variant="outline-dark" onClick={() => {
                    setSelectedPayment("cod");
                    setCodStep(1);
                    setCodPhone("");
                    setCodOtp("");
                    setGeneratedOtp("");
                    setCodVerified(false);
                  }}>
                    Cash on Delivery (+₹50)
                  </Button>
                </div>

                {selectedPayment && (
                  <div className="text-center mt-4">
                    {selectedPayment === "cod" ? (
                      <>
                        {codStep === 1 && (
                          <>
                            <Form.Group>
                              <Form.Label>Enter Mobile Number</Form.Label>
                              <Form.Control
                                type="text"
                                value={codPhone}
                                onChange={(e) => setCodPhone(e.target.value)}
                                placeholder="e.g. 9876543210"
                              />
                            </Form.Group>
                            <Button
                              className="mt-2"
                              onClick={() => {
                                if (codPhone.length === 10) {
                                  const otp = Math.floor(1000 + Math.random() * 9000).toString();
                                  setGeneratedOtp(otp);
                                  setCodStep(2);
                                  alert(`Your OTP is: ${otp}`);
                                } else {
                                  alert("Enter valid 10-digit number");
                                }
                              }}
                            >
                              Send OTP
                            </Button>
                          </>
                        )}

                        {codStep === 2 && (
                          <>
                            <Form.Group className="mt-3">
                              <Form.Label>Enter OTP sent to {codPhone}</Form.Label>
                              <Form.Control
                                type="text"
                                value={codOtp}
                                onChange={(e) => setCodOtp(e.target.value)}
                              />
                            </Form.Group>
                            <Button
                              className="mt-2"
                              onClick={() => {
                                if (codOtp === generatedOtp) {
                                  setCodVerified(true);
                                  setCodStep(3);
                                  setShowPaymentModal(false);
                                  setShowCodSuccessModal(true);
                                } else {
                                  alert("Invalid OTP. Please try again.");
                                }
                              }}
                            >
                              Verify OTP
                            </Button>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <h5>Scan to Pay</h5>
                        <img src={MyQRCodeImg} alt="QR" width="180" className="border p-2 rounded" />
                        <p className="mt-2">Amount: ₹{finalAmount}</p>
                        <a href={`upi://pay?pa=9998887777@upi&pn=FoodApp&am=${finalAmount}&cu=INR`} target="_blank" rel="noreferrer" className="btn btn-primary mt-2">
                          Pay Now
                        </a>
                      </>
                    )}
                  </div>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>

      {/* COD Success Modal */}
      <Modal show={showCodSuccessModal} onHide={() => setShowCodSuccessModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Tasty Burger 🍔</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5>Order Summary</h5>
          <ul className="list-unstyled">
            {cartItems.map(item => (
              <li key={item.id}>
                {item.title} x {item.quantity} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h6 className="mt-3">Total Payable on Delivery: <strong>₹{finalAmount}</strong></h6>
          <p className="mt-4 text-success">🎉 Thank you for your order! Your tasty meal delivered in 30 minutes.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowCodSuccessModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}

export default Cart;
