import React from 'react';
import './Contact.css'; // Import the CSS for this component

function Contact() {
  return (
    <section id="contact" className="contact-section"> {/* Voeg id="contact" toe */}
      <div className="container">
        {/* Left side - Text */}
        <div className="contact-text">
          <h2>Een Project op Maat?</h2>
          <p>
            Heeft u vragen of wilt u meer informatie over onze bouw- en renovatiediensten? Vul dan het onderstaande formulier in en ons team neemt zo snel mogelijk contact met u op. 
            Wij helpen u graag bij het realiseren van uw volgende project.
          </p>
        </div>

        {/* Right side - Contact Form */}
        <div className="contact-form">
          <form>
            <div className="row">
              <input type="text" name="first-name" placeholder="Voornaam" />
              <input type="text" name="last-name" placeholder="Achternaam" />
            </div>
            <input type="email" name="email" placeholder="Email" />
            <div className="row">
              <input type="text" name="phone" placeholder="Telefoon" />
              <input type="text" name="city" placeholder="Woonplaats" />
            </div>
            <textarea name="message" placeholder="Bericht"></textarea>

            <label>
              <input type="checkbox" name="privacy" /> 
              Ik ga akkoord met de privacyverklaring van Wonderbouw en snap dat er contact met mij wordt opgenomen.
            </label>

            <button type="submit" className="btn">
              Versturen <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
