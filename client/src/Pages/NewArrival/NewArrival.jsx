import React, { useEffect, useState } from "react";
import "./NewArrival.css"; // Ensure this CSS file exists and is correctly named
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Adjust the URL to match your backend server's actual URL and port
    const url = "http://localhost:3000/api/v1/newArrivals";

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data from server");
        }
      })
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="new-arrivals-container">
        {books.map((book) => (
          <div key={book._id.$oid} className="new-book-card">
            <Link to={`/books/${book._id}`} key={book._id}>
              <div className="new-book-title">{book.title}</div>
            </Link>
            <div className="new-book-author">by {book.author}</div>
            <div className="new-book-info">
              <p>{book.description}</p>
              <p>Condition: {book.condition}</p>
              <p className="popular-price">₹{book.rentalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
