import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
const Payment = ({ bookDetails }) => {
  const navigate = useNavigate();

  if (!bookDetails) {
    return <div>Please select a book first.</div>;
  }

  const handleCashOnDelivery = () => {
    navigate('/cash-on-delivery', { state: { bookDetails } });
  };

  return (
    <div>
        <div className='payment-container'>
      <h1>Payment for {bookDetails.title}</h1>
      <p>Author: {bookDetails.author}</p>
      <p>Price: ₹{bookDetails.rentalPrice}</p>
      <div>
        <button className="payment-button">Credit Card</button>
        <button className="payment-button">Debit Card</button>
        <button className="payment-button">UPI (GPay, PhonePe, Paytm)</button>
        <button className="payment-button" onClick={handleCashOnDelivery}>Cash on Delivery</button>
        <button className="payment-button">Other</button>
      </div>
      </div>
    </div>
  );
};

export default Payment;