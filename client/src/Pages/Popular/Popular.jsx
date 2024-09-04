import React, { useEffect, useState } from 'react';
import './Popular.css'; // Ensure you create this CSS file for styling
import Navbar from '../../Components/Navbar/Navbar';
import {Link} from "react-router-dom";

const Popular = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/mostpopbooks') // Adjust the URL as necessary
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch popular books');
                }
            })
            .then(data => setBooks(data))
            .catch(error => {
                console.error('Error fetching popular books:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="popular-books-container">
                {books.map(book => (
                    <div className="popular-book-card">                      
                    <Link to={`/books/${book._id}`} key={book._id}><div className="popular-book-title">{book.title}</div></Link>
                        <div className="popular-book-author">by {book.author}</div>
                        <div className="popular-book-info">
                            <p>{book.description}</p>
                            <p>Condition: {book.condition}</p>
                            <p className="popular-price">₹{book.rentalPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Popular;