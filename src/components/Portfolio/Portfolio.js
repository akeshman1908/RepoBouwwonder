import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/239/200/300',
    'https://picsum.photos/id/240/200/300',
    'https://picsum.photos/id/241/200/300',
    'https://picsum.photos/id/242/200/300',
    'https://picsum.photos/id/243/200/300',
    'https://picsum.photos/id/244/200/300',
    'https://picsum.photos/id/245/200/300',
    'https://picsum.photos/id/246/200/300',
    'https://picsum.photos/id/247/200/300',
    'https://picsum.photos/id/248/200/300',
    'https://picsum.photos/id/249/200/300',
    'https://picsum.photos/id/250/200/300',
    'https://picsum.photos/id/251/200/300',
    'https://picsum.photos/id/252/200/300',
    'https://picsum.photos/id/253/200/300',
    'https://picsum.photos/id/254/200/300',
    'https://picsum.photos/id/255/200/300',
    'https://picsum.photos/id/256/200/300',
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation(); // Voorkomt dat het klikken op de modal de sluitactie triggert
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="portfolio-container container">
      {/* Grid van afbeeldingen */}
      <div className="portfolio-grid">
        {images.map((image, index) => (
          <div key={index} className="portfolio-item" onClick={() => openModal(image)}>
            <img src={image} alt={`Portfolio item ${index}`} />
          </div>
        ))}
      </div>

      {/* Modal voor geselecteerde afbeelding */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <button className="close-modal" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;