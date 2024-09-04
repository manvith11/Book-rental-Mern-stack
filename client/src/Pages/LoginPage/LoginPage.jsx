import React, { useState } from "react";
import "./LoginPage.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/**
 *
 */
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data.data);
      localStorage.setItem("userLogged", JSON.stringify(response.data.data));
      // Show success message only if the login attempt is successful
      alert("Login Successful");
      navigate("/home"); //homepage
    } catch (error) {
      console.error(error);
      //if login fails, show an alert pop up message for invalid email
      alert("Invalid Email or Password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="Navbar">
        <img src="/logo2.png" alt="Logo" className="logo" />
        <h1 className="project-title">Book Rental Platform</h1>
      </div>
      <div className="loginback">
        <div className="login-card">
          <h1>Login</h1>
          <br />
          <br />
          <form action="">
            <input
              type="email"
              className="emai"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              className="pass"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input
              type="submit"
              value="Login"
              className="LoginBtn"
              onClick={LoginUser}
            />
            <br />
            <br />

            <p>
              If haven't already registered. <br /> Please{" "}
              <a href="/">Register</a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// #endregion

export default LoginPage;
