import React, { useState } from 'react';
import './Methods.css'; // Import the CSS

const AccordionItem = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>
          <span className="number">{number}. </span>{title}
        </h3>
        <span className="accordion-icon">
          {isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Methods = () => {
  return (
    <section id="werkwijze" className="methods-section"> {/* Voeg id hier toe */}
      <div className="container">
        <h2>Hoe werken wij?</h2>
        <p className="subtitle">
          Van planning tot oplevering, wij begeleiden u bij elke stap van uw project. 
          Dit is hoe wij te werk gaan voor de beste resultaten.
        </p>

        <div className="accordion">
          <AccordionItem 
            number="1"
            title="Initiële Beoordeling"
            content="We beginnen met een inspectie van de bouwlocatie en bespreken uw wensen en de technische vereisten."
          />
          <AccordionItem 
            number="2"
            title="Projectplanning"
            content="We stellen een gedetailleerd plan op met deadlines, materialen en een kostenraming."
          />
          <AccordionItem 
            number="3"
            title="Uitvoering van het Werk"
            content="Onze vakmensen starten met de bouwwerkzaamheden, waarbij we zorgen voor een nauwkeurige uitvoering en regelmatige updates."
          />
          <AccordionItem 
            number="4"
            title="Kwaliteitscontrole en Oplevering"
            content="We voeren een uitgebreide kwaliteitscontrole uit en leveren het project volgens afspraak op."
          />
          <AccordionItem 
            number="5"
            title="Nazorg en Onderhoud"
            content="Ook na de oplevering staan wij voor u klaar voor eventuele vragen en onderhoud van uw project."
          />
        </div>
      </div>
    </section>
  );
};

export default Methods;
