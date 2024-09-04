import React, { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/", {
        email,
        password,
        username,
      });
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.error("Error Registering user: ", error);
      alert("Error registering user");
    }
  };

  return (
    <div className="register-content">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="Navbar">
        <img src="/logo2.png" alt="Logo" className="logo" />
        <h1 className="project-title">Book Rental Platform</h1>
      </div>
      <div className="card1">
        <h1>Register</h1>
        <form>
          <input
            type="text"
            name="username"
            className="t1"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="t2"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            name="pass"
            className="t3"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button onClick={RegisterUser} type="submit" className="RegisterBtn">
            REGISTER
          </button>

          <br />
          <br />
          <p>
            If you have already registered,
            <br /> please <a href="/login">Login</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

// Ensure this export is at the top level, not inside any function or block
export default RegisterPage;
