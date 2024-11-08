import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScrollProgressComponent.css"; // Aangepaste CSS-bestand
import "@fortawesome/fontawesome-free/css/all.min.css";

const ScrollProgressComponent = () => {
  return (
    <div className="progress-container">
      <div className="progress-section">
        <div className="step">
          <img
            src="images/traject/wc1.jpeg"
            alt="Before"
            className="progress-img shadow"
          />
          <div className="step-description">
            <h4>
              <i className="fas fa-step-backward icon-white"></i> Before
            </h4>
            <p>
              Een blik op de beginsituatie van het project vóór de renovaties.
            </p>
          </div>
        </div>
        <div className="step">
          <img
            src="images/traject/wc2.jpeg"
            alt="During"
            className="progress-img shadow"
          />
          <div className="step-description">
            <h4>
              <i className="fas fa-spinner icon-white"></i> During
            </h4>
            <p>
              Voortgang in de middenfase, waar transformaties zichtbaar worden.
            </p>
          </div>
        </div>
        <div className="step">
          <img
            src="images/traject/wc3.jpeg"
            alt="After"
            className="progress-img shadow"
          />
          <div className="step-description">
            <h4>
              <i className="fas fa-check-circle icon-white"></i> After
            </h4>
            <p>
              Het eindresultaat dat de volledig gerenoveerde ruimte in volle glorie toont.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressComponent;
