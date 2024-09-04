import React from "react";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import ContactusPage from "./Pages/ContactusPage/ContactusPage";
import ProfilePage from "./Pages/Profilepage/Profilepage";
import SellBook from "./Pages/SellBookPage/SellBookPage";
import HotDeals from "./Pages/Hotdeals/HotDeal";
import BrowseBookPage from "./Pages/BrowseBookPage/BrowseBookPage";
import BestSeller from "./Pages/BestSeller/BestSeller";
import NewArrivals from "./Pages/NewArrival/NewArrival";
import Popular from "./Pages/Popular/Popular";
import BookDetails from "./Pages/BookDetails/BookDetails"; // Ensure this component is created
import Payment from "./Pages/Payment/Payment"; // Ensure this component is created
import CashOnDeliveryPage from './Pages/CashOnDeliveryPage/CashOnDeliveryPage';
const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sellbook" element={<SellBook />} />
        <Route path="/hotdeals" element={<HotDeals />} />
        <Route path="/search" element={<BrowseBookPage />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/books/:id" element={<BookDetails setSelectedBook={setSelectedBook} />} />  // New route for book details
        <Route path="/payment" element={<Payment bookDetails={selectedBook} />} />
        <Route path="/cash-on-delivery" element={<CashOnDeliveryPage bookDetails={selectedBook} />} />
      </Routes>
    </div>
  );
};

export default App;