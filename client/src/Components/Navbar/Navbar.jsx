import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const username = userData ? userData.username : "Profile"; // Use username if available, otherwise default to 'Profile'

  return (
    <div>
      <ul className="navbar">
        <img src="/logo2.png" alt="Logo" className="logo" to="/home" />
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/search">Browse Books</Link>
        </li>
        <li>
          <Link to="/sellbook">Sell a Book</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <Link to="/profile">{username}</Link> {/* Display username */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
