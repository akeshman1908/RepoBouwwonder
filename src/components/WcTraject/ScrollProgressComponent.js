import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScrollProgressComponent.css"; // Custom CSS bestand

const ScrollProgressComponent = () => {
  return (
    <div className="container my-5">
      <div className="progress-section">
        <h2 className="text-center mb-4">Project Traject</h2>
        <div className="step">
          <img src="images/traject/wc1.jpeg" alt="Before" className="progress-img shadow" />
          <div className="step-description bg-light p-3 shadow">
            <h4>Voor</h4>
            <p>Beschrijving van de beginstaat van het project.</p>
          </div>
        </div>
        <div className="step">
          <img src="images/traject/wc2.jpeg" alt="During" className="progress-img shadow" />
          <div className="step-description bg-light p-3 shadow">
            <h4>Tussenfase</h4>
            <p>Beschrijving van de voortgang in het midden van het project.</p>
          </div>
        </div>
        <div className="step">
          <img src="images/traject/wc3.jpeg" alt="After" className="progress-img shadow" />
          <div className="step-description bg-light p-3 shadow">
            <h4>Na</h4>
            <p>Beschrijving van het eindresultaat van het project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressComponent;
