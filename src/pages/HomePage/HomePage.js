import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';  
import Footer from '../../components/Footer/Footer';  
import Header from '../../components/Header/Header';  
import Services from '../../components/Services/Services';  
import Methods from '../../components/Methods/Methods';  
import Review from '../../components/Review/Review';  
import Contact from '../../components/Contact/Contact';  
import AboutUs from '../../components/AboutUs/AboutUs';  
import PortfolioPage from '../PortfolioPage/PortfolioPage';  // Import the PortfolioPage

import './HomePage.css';

function HomePage() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Common Navbar */}
        
        {/* Routes to switch between different pages */}
        <Routes>
          <Route path="/" element={<div><Header /><Services /><AboutUs /><Methods /><Review /><Contact /></div>} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer /> {/* Common Footer */}

        {/* WhatsApp and Email floating buttons */}
        <div className="floating-buttons">
          <a href="https://wa.me/+31657117882" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:info@bouwwonders.nl" className="email-btn">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default HomePage;
