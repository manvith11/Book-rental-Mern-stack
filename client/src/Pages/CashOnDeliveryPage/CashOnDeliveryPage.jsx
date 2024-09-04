import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './CashOnDeliveryPage.css';

const CashOnDeliveryPage = () => {
  const location = useLocation();
  const { bookDetails } = location.state || {};
  
  if (!bookDetails) {
    return <div>No book selected.</div>;
  }

  return (
    <div className="delivery-container">
      <h1>Order Confirmation</h1>
      <p className="book-detail"><strong>Title:</strong> {bookDetails.title}</p>
      <p className="book-detail"><strong>Author:</strong> {bookDetails.author}</p>
      <p className="book-detail"><strong>Price:</strong> ₹{bookDetails.rentalPrice}</p>
      <div className="message">
        Your book "{bookDetails.title}" will be delivered by tomorrow. Get ready with cash.
      </div>
      <Link to="/home"><button className="home-button">Go to Home</button></Link>
    </div>
  );
};

export default CashOnDeliveryPage;