import React, { useEffect, useState } from 'react';
import './BestSeller.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom'

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/bestSellerbooks')  // Adjust the URL as necessary
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Navbar/>
        <div className="best-container">
            {books.map(book => (
                <div key={book._id.$oid} className="best-book-card">
                   <Link to={`/books/${book._id}`} key={book._id}><div className="best-book-title">{book.title}</div></Link> 
                    <div className="best-book-author">by {book.author}</div>
                    <div className="best-book-info">
                        <p>{book.description}</p>
                        <p>Condition: {book.condition}</p>
                        <p className="best-price">₹{book.rentalPrice}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default BestSeller;