import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScrollProgressComponent.css"; // Custom CSS bestand

const ScrollProgressComponent = () => {
  return (
    <div className="progress-section">
      <div className="dot dot-start"></div> {/* Dot aan het begin */}
      <div className="roadmap-line"></div> {/* Horizontale lijn */}
      <div className="step">
        <img
          src="images/traject/wc1.jpeg"
          alt="Before"
          className="progress-img shadow"
        />
        <div className="step-description">
          <h4>Before</h4>
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
          <h4>During</h4>
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
          <h4>After</h4>
          <p>The final result showcasing the fully renovated space in all its glory.</p>
        </div>
      </div>
      <div className="dot dot-end"></div> {/* Dot aan het einde */}
    </div>
  );
};

export default ScrollProgressComponent;
