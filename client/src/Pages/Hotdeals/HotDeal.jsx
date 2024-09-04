import React, { useEffect, useState } from 'react';
import './HotDeal.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom'


const HotDeals = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('http://localhost:3000/api/v1/hotDeals');
            const data = await response.json();
            setBooks(data);
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <Navbar/>
        <div className="hot-deals-container">
        {books.map(book => (
                <div key={book._id.$oid} className="hot-book-card">
                   <Link to={`/books/${book._id}`} key={book._id}>
                   <div className="hot-book-title">{book.title}</div></Link> 
                    <div className="hot-book-author">by {book.author}</div>
                    <div className="hot-book-info">
                        <p>{book.description}</p>
                        <p>Condition: {book.condition}</p>
                        <p className="best-price">₹{book.rentalPrice}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default HotDeals;