import React, { useState, useEffect } from "react";
import "./SellBookPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const SellBook = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [book, setBook] = useState({
    title: "",
    author: "",
    condition: "",
    rentalPrice: "",
    description: "",
    owner: "",
    genre: [],
  });
  const [error, setError] = useState(""); // State to handle error messages

  // Retrieve user data from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userLogged"));
    if (userData && userData.username) {
      setBook((prevBook) => ({ ...prevBook, owner: userData.username }));
    } else {
      navigate("/login"); // Redirect to login if userData is not found
    }
  }, [navigate]);

  const genresList = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Sci-Fi",
    "Fantasy",
    "Biography",
    "History",
    "Children",
    "Romance",
    "Adventure",
  ];
  const conditionsList = ["New", "Used but good", "Slightly old", "Very old"]; // List of conditions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGenreChange = (genre) => {
    if (!book.genre.includes(genre)) {
      setBook((prevState) => ({
        ...prevState,
        genre: [...prevState.genre, genre],
      }));
      setError(""); // Clear error message when a genre is added
    }
  };

  const handleConditionChange = (condition) => {
    setBook((prevState) => ({
      ...prevState,
      condition: condition,
    }));
  };

  const removeGenre = (genre) => {
    const newGenres = book.genre.filter((g) => g !== genre);
    setBook((prevState) => ({
      ...prevState,
      genre: newGenres,
    }));
    if (newGenres.length === 0) {
      setError("At least one genre is required."); // Set error if no genres are selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book.genre.length === 0) {
      setError("At least one genre is required.");
      return; // Prevent form submission
    }
    if (!book.condition) {
        setError("Condition of the book is required.");
        return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/v1/postBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      if (response.ok) {
        alert("Book posted successfully!");
        setBook({
          title: "",
          author: "",
          condition: "",
          rentalPrice: "",
          description: "",
          owner: "", // Reset owner as well
          genre: [],
        });
      } else {
        alert("Failed to post the book.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="post-title">Post Your Book for Sale</h1>
      <div className="sellBookContainer">
        <form onSubmit={handleSubmit} className="sellBookForm">
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Author"
            required
          />
          <div className="condition-selector">
            {conditionsList.map((condition) => (
              <button
                type="button"
                key={condition}
                onClick={() => handleConditionChange(condition)}
                className={
                  book.condition === condition
                    ? "condition-button selected"
                    : "condition-button"
                }
              >
                {condition}
              </button>
            ))}
          </div>
          <input
            type="number"
            name="rentalPrice"
            value={book.rentalPrice}
            onChange={handleChange}
            placeholder="Rental Price"
            required
          />
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <div className="genre-selector">
            {genresList
              .filter((g) => !book.genre.includes(g))
              .map((genre) => (
                <button
                  type="button"
                  key={genre}
                  onClick={() => handleGenreChange(genre)}
                  className="genre-button"
                >
                  {genre}
                </button>
              ))}
          </div>
          <div className="selected-genres">
            {book.genre.map((genre) => (
              <div key={genre} className="selected-genre">
                {genre} <span onClick={() => removeGenre(genre)}>&times;</span>
              </div>
            ))}
          </div>
          {error && <div className="error-message">{error}</div>}
          <button className="postbookbtn" type="submit">
            Post Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellBook;
