import React, { useState, useEffect } from "react";
import "./BrowseBookPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import { FaFilter } from "react-icons/fa";
import { Link } from 'react-router-dom'

const BrowseBookPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [sortBy, setSortBy] = useState("Upload Date");
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchFilteredBooks();
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const genresList = [
    "Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Fantasy",
    "Biography", "History", "Children", "Romance", "Adventure",
  ];
  const conditionsList = ["New", "Used but good", "Slightly old", "Very old"];
  const sortOptions = ["Upload Date", "A-Z"];

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleGenreClick = (genre) => {
    setSelectedGenre((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((g) => g !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  };

  const handleConditionClick = (condition) => {
    setSelectedCondition((prevCondition) => 
      prevCondition === condition ? "" : condition
    );
  };

  const fetchFilteredBooks = async () => {
    const queryParams = new URLSearchParams({
      genre: selectedGenre.join(","),
      condition: selectedCondition,
      sortBy,
      search: searchTerm.trim()
    }).toString();

    const response = await fetch(`http://localhost:3000/api/v1/getbooks?${queryParams}`);
    if (response.ok) {
      const data = await response.json();
      setBooks(data);
    } else {
      const errorData = await response.json();
      setError(`Failed to fetch books: ${errorData.message}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="browse-book-page">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search books..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaFilter className="filter-icon" onClick={toggleFilters} />
        </div>
        {showFilters && (
          <div className="filter-card">
            <div className="filter-section">
              <label>Genre</label>
              {genresList.map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreClick(genre)}
                  className={selectedGenre.includes(genre) ? "selected" : ""}
                >
                  {genre}
                </button>
              ))}
            </div>
            <div className="filter-section">
              <label>Condition</label>
              {conditionsList.map((condition) => (
                <button
                  key={condition}
                  onClick={() => handleConditionClick(condition)}
                  className={selectedCondition === condition ? "selected" : ""}
                >
                  {condition}
                </button>
              ))}
            </div>
            <div className="filter-section">
              <label>Sort by</label>
              <select
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button className="apply-filter-btn" onClick={fetchFilteredBooks}>
              Apply Filter
            </button>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
        <div className="browse-books-container">
          {books.length > 0 ? (
            books.map((book) => (
                <Link to={`/books/${book._id}`} key={book._id}>
              <div key={book._id} className="browse-book-card">
                <div className="browse-book-title">{book.title}</div>
                <div className="browse-book-author">by {book.author}</div>
                <div className="browse-book-info">
                  <p>{book.description}</p>
                  <p>Condition: {book.condition}</p>
                  <p>Rental Price: ${book.rentalPrice}</p>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <div>No results found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseBookPage;