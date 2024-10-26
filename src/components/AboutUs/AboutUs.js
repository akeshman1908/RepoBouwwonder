import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section id="about-us" className="about-us-section"> {/* Add id here */}
      <div className="container">
        <h2>Over Ons</h2>

        {/* Statistics Section */}
        <div className="about-us-stats">
          <div className="stat-card">
            <div className="icon-box yellow">
              <i className="fas fa-hammer"></i>
            </div>
            <h3>500+</h3>
            <h4>Projecten Afgerond</h4>
            <p>Professionele timmerwerken en bouwprojecten succesvol voltooid.</p>
          </div>

          <div className="stat-card">
            <div className="icon-box blue-dark">
              <i className="fas fa-hard-hat"></i>
            </div>
            <h3>25</h3>
            <h4>Jaren Ervaring</h4>
            <p>Ervaren in timmerwerken en bouwprojecten van alle soorten.</p>
          </div>

          <div className="stat-card">
            <div className="icon-box blue">
              <i className="fas fa-toolbox"></i>
            </div>
            <h3>1,200+</h3>
            <h4>Tevreden Klanten</h4>
            <p>Onze klanten waarderen onze kwaliteit en vakmanschap.</p>
          </div>

          <div className="stat-card">
            <div className="icon-box blue-light">
              <i className="fas fa-ruler-combined"></i>
            </div>
            <h3>150+</h3>
            <h4>Nieuwbouw Projecten</h4>
            <p>Vakkundige realisatie van complete nieuwbouwwoningen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
