import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollToId, setScrollToId] = useState(null);

  const scrollToSectionSlowly = (id) => {
    // Check if we're already on the homepage
    if (location.pathname !== '/') {
      // If not, navigate to the homepage and store the target id for scrolling
      setScrollToId(id);
      navigate('/');
    } else {
      // If on the homepage, scroll immediately
      scrollToTarget(id);
    }
  };

  const scrollToTarget = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Trigger scroll if scrollToId is set after navigating to homepage
    if (scrollToId) {
      scrollToTarget(scrollToId);
      setScrollToId(null); // Reset scrollToId after scrolling
    }
  }, [location.pathname, scrollToId]);

  return (
    <div>
      {/* Top thin blue bar with contact info */}
      <div className="top-bar">
        <div className="container">
          <span>070-12345678 Patrijslaan 95, 2261 EA Den Haag</span>
        </div>
      </div>

      {/* White navbar with logo and menu */}
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSectionSlowly('#services')}>
                  Diensten
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSectionSlowly('#about-us')}>
                  Over ons
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSectionSlowly('#werkwijze')}>
                  Werkwijze
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSectionSlowly('#reviews')}>
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <a className="btn contact-btn" onClick={() => scrollToSectionSlowly('#contact')}>
                  Neem contact op!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
