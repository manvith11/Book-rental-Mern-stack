import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookDetails.css'; // Ensure CSS is properly set up

const BookDetails = ({ setSelectedBook }) => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/books/${id}`)
            .then(response => response.json())
            .then(data => {
                setBook(data);
                setSelectedBook(data);  // Update the selected book in the app state
            })
            .catch(error => console.error('Error fetching book details:', error));
    }, [id, setSelectedBook]);

    if (!book) return <div>Loading...</div>;

    return (
        <div className="book-details-container">
            <h1 className="book-title">{book.title}</h1>
            <p className="book-author"><strong>Author:</strong> {book.author}</p>
            <p className="book-info"><strong>Description:</strong> {book.description}</p>
            <p className="book-info"><strong>Condition:</strong> {book.condition}</p>
            <p className="book-info"><strong>Rental Price:</strong> ₹{book.rentalPrice}</p>
            <p className="book-info"><strong>Genre:</strong> {book.genre.join(', ')}</p>
            <p className="book-info"><strong>Published Date:</strong> {new Date(book.createdAt).toLocaleDateString()}</p>
            <p className="book-info"><strong>Owner ID:</strong> {book.owner}</p>
            <button className="add-to-cart-btn" onClick={() => navigate('/payment')}>Add to Cart</button>
        </div>
    );
};

export default BookDetails;