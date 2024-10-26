import React from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';





import './PortfolioPage.css';
import ScrollProgressComponent from '../../components/WcTraject/ScrollProgressComponent';

function HomePage() {
  return (
    <div className="App">
      <ScrollProgressComponent />
      <Portfolio />



    </div>
  );
}

export default HomePage;
