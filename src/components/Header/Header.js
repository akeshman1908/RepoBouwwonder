import React from 'react';
import './Header.css'; // Import the CSS file for styling
import headerImage from '../../assets/timmerman.jpg'; // Import the image from public folder 
function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Left Side - Image from public/images */} 
        <div className="image-container">
          <img
            src={headerImage} // Using the imported image
            alt="Wonderbouw Timmerbedrijf"
          />
        </div>

        {/* Right Side - Text, Button, Review */} 
        <div className="content">
          <h1>Wonderbouw: Jouw Partner in Kwaliteit en Vakmanschap</h1>
          <p>Bij Wonderbouw leveren we hoogwaardige timmerwerken en bouwoplossingen. Of het nu gaat om maatwerk kozijnen, duurzame renovaties of complete nieuwbouwprojecten, wij staan garant voor vakmanschap en klanttevredenheid.</p>

          {/* Button */}
          <button className="btn">Neem contact op</button>

          {/* Customer Review */} 
          <div className="review-container">
            <div className="stars">
              {/* Display 5 Font Awesome stars */}
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>“Uitstekend werk geleverd, van start tot oplevering.”</p>
            <p className="reviewer">Jessica uit Rotterdam</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
