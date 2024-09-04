import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Link to="/hotdeals">
          {" "}
          {/* Add Link here */}
          <div className="card card-hot-deals">
            <img src="hot deals.jpg" alt="Hot Deals" />
            <div className="card-title">Hot Deals</div>
            <div className="card-tagline">Catch them while you can!</div>
          </div>
        </Link>
        <Link to="/bestseller"> {/* Link to BestSeller */}
          <div className="card card-best-seller">
            <img src="best seller.jpg" alt="Best Seller" />
            <div className="card-title">Best Seller</div>
            <div className="card-tagline">Top picks for you!</div>
          </div>
        </Link>
        <Link to="/newarrivals"> {/* Link to New Arrivals */}
          <div className="card card-new-arrivals">
            <img src="arrival.jpg" alt="New Arrivals" />
            <div className="card-title">New Arrivals</div>
            <div className="card-tagline">Explore the latest!</div>
          </div>
        </Link>
        <Link to="/popular"> {/* Link to Popular */}
          <div className="card card-popular">
            <img src="most popular.jpg" alt="Popular" />
            <div className="card-title">Popular</div>
            <div className="card-tagline">Everyone's favorite!</div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
