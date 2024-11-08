import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScrollProgressComponent.css"; // Custom CSS file

// Ensure Font Awesome CSS is included in your project
// If using npm, install it with: npm install @fortawesome/fontawesome-free
// Then import it in your main file or this component:
import '@fortawesome/fontawesome-free/css/all.min.css';

const ScrollProgressComponent = () => {
  return (
    <div className="progress-container">
      <div className="dot dot-start"></div>
      <div className="roadmap-line"></div>
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
            <p>A look at the initial state of the project before any renovations.</p>
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
            <p>Progress in the middle phase, where transformations start to become visible.</p>
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
            <p>The final result showcasing the fully renovated space in all its glory.</p>
          </div>
        </div>
      </div>
      <div className="dot dot-end"></div>
    </div>
  );
};

export default ScrollProgressComponent;
