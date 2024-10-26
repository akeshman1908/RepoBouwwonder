import React from 'react';
import './Review.css'; // Import the CSS file

function Reviews() {
  return (
    <section id="reviews" className="review-section"> {/* Voeg het id "reviews" toe */}
      <div className="container">
        <h2>Tevreden Klanten & Succesvolle Projecten</h2>
        <p className="subtitle">Bij Wonderbouw streven we naar uitmuntendheid in elk project. Lees hier wat onze klanten te zeggen hebben over ons werk.</p>
        
        {/* Reviews Grid */}
        <div className="reviews">
          {/* Review 1 */}
          <div className="review-block">
            <img src="https://via.placeholder.com/50" alt="Reviewer" />
            <h3>Jan de Vries</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Wonderbouw heeft onze complete woning gerenoveerd en alles was perfect uitgevoerd. Vakmanschap en professionaliteit!</p>
          </div>

          {/* Review 2 */}
          <div className="review-block">
            <img src="https://via.placeholder.com/50" alt="Reviewer" />
            <h3>Marieke Jansen</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Ze kwamen hun afspraken na en leverden kwalitatief hoogwaardig werk. Onze nieuwe aanbouw is fantastisch geworden!</p>
          </div>

          {/* Review 3 */}
          <div className="review-block">
            <img src="https://via.placeholder.com/50" alt="Reviewer" />
            <h3>Peter Bakker</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Ik ben enorm tevreden met het werk van Wonderbouw. Hun team is betrouwbaar, snel en levert prachtige resultaten.</p>
          </div>

          {/* Review 4 */}
          <div className="review-block">
            <img src="https://via.placeholder.com/50" alt="Reviewer" />
            <h3>Sanne Koster</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Wonderbouw heeft ons volledig ontzorgd tijdens het renovatieproces. Het eindresultaat was beter dan we hadden verwacht.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
