import React from 'react';
import './Services.css'; // Import the CSS file

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        {/* Title and Subtitle Above Service Blocks */}
        <div className="services-header">
          <h2>Onze Diensten</h2>
          <p>Wonderbouw is jouw betrouwbare partner voor hoogwaardig timmerwerk, renovatieprojecten, en complete bouwoplossingen. Ontdek wat wij voor jouw project kunnen betekenen.</p>
        </div>

        {/* Services Blocks */}
        <div className="service-grid">
          <div className="service-block">
            <h3>Nieuwbouw</h3>
            <p>Wij realiseren complete nieuwbouwprojecten, van de fundering tot het dak. Bij Wonderbouw staat kwaliteit en vakmanschap voorop in elke fase van het bouwproces.</p>
          </div>
          <div className="service-block">
            <h3>Renovaties</h3>
            <p>Of het nu gaat om een enkele kamer of een complete woningrenovatie, wij zorgen voor duurzame en stijlvolle oplossingen die voldoen aan jouw wensen.</p>
          </div>
          <div className="service-block">
            <h3>Timmerwerk op Maat</h3>
            <p>Van kozijnen en deuren tot op maat gemaakte meubels, ons ervaren team van timmerlieden levert hoogwaardig vakwerk dat past bij elke stijl en situatie.</p>
          </div>
          <div className="service-block">
            <h3>Uitbreidingen & Aanbouwen</h3>
            <p>Vergroot je woonruimte met een aanbouw of uitbreiding. Wij helpen je met ontwerp en realisatie, volledig afgestemd op jouw woning en wensen.</p>
          </div>
          <div className="service-block">
            <h3>Onderhoud & Reparaties</h3>
            <p>Regelmatig onderhoud is essentieel om je woning of pand in topconditie te houden. Van kleine reparaties tot grootschalig onderhoud, wij staan voor je klaar.</p>
          </div>
          <div className="service-block">
            <h3>Zakelijke Bouwprojecten</h3>
            <p>Wonderbouw ondersteunt ook zakelijke projecten, van bedrijfspanden tot kantoorgebouwen. We bieden efficiënte bouwoplossingen die voldoen aan de hoogste standaarden.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
