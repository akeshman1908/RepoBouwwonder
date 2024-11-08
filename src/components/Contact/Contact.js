import React from 'react';
import './Contact.css'; // Importeer de CSS voor deze component

function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Container */}
      <div className="contact-container">
        {/* Linkerzijde - Tekst */}
        <div className="contact-text">
          <h2>Een Project op Maat?</h2>
          <p>
            Heeft u vragen of wilt u meer informatie over onze bouw- en renovatiediensten? Vul dan het onderstaande formulier in en ons team neemt zo snel mogelijk contact met u op.
            Wij helpen u graag bij het realiseren van uw volgende project.
          </p>
        </div>

        {/* Rechterzijde - Contactformulier */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" name="first-name" placeholder="Voornaam" required />
              <input type="text" name="last-name" placeholder="Achternaam" required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-row">
              <input type="text" name="phone" placeholder="Telefoon" required />
              <input type="text" name="city" placeholder="Woonplaats" required />
            </div>
            <div className="form-row">
              <textarea name="message" placeholder="Bericht" required></textarea>
            </div>
            <div className="form-row checkbox-row">
              <label>
                <input type="checkbox" name="privacy" required />
                Ik ga akkoord met de privacyverklaring van Wonderbouw en snap dat er contact met mij wordt opgenomen.
              </label>
            </div>
            <div className="form-row">
              <button type="submit" className="btn">
                Versturen <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
