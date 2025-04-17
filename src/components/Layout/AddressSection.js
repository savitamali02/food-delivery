import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function AddressSection({
  addresses,
  setAddresses,
  selectedAddressIndex,
  setSelectedAddressIndex,
  setNewAddress,
  newAddress,
  setEditModeIndex,
  editModeIndex, // ← add this here
}) {


  // Load addresses from localStorage on component mount
  useEffect(() => {
    const storedAddresses = localStorage.getItem('deliveryAddresses');
    if (storedAddresses) {
      setAddresses(JSON.parse(storedAddresses));
    }
  }, []);

  // Save addresses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('deliveryAddresses', JSON.stringify(addresses));
  }, [addresses]);

  return (
    <div className="address-section">
      <h5>Manage Delivery Addresses</h5>
      
      {/* Displaying addresses */}
      {addresses.length === 0 ? (
        <p>No address added yet.</p>
      ) : (
        addresses.map((addr, index) => (
          <div key={index} className="address-card border rounded p-3 mb-3">
            <Form.Check
              type="radio"
              name="selectedAddress"
              id={`address-${index}`}
              label={addr}
              checked={selectedAddressIndex === index}
              onChange={() => setSelectedAddressIndex(index)}
            />
            <div className="d-flex mt-2">
              <Button
                size="sm"
                variant="outline-primary"
                className="me-2"
                onClick={() => {
                  setNewAddress(addr);
                  setEditModeIndex(index);
                }}
              >
                Edit
              </Button>
              <Button
                size="sm"
                variant="outline-danger"
                onClick={() => {
                  const updatedAddresses = addresses.filter((_, i) => i !== index);
                  setAddresses(updatedAddresses);
                  if (selectedAddressIndex === index) setSelectedAddressIndex(null);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      )}

      {/* Adding or editing address */}
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
              const updatedAddresses = [...addresses];
              updatedAddresses[editModeIndex] = newAddress;
              setAddresses(updatedAddresses);
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
    </div>
  );
}

export default AddressSection;
