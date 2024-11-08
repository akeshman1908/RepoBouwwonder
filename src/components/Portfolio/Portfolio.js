import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // Array van afbeeldingen uit public/images/traject
  const images = [
    '/images/traject/image1.jpeg',
    '/images/traject/image2.jpeg',
    '/images/traject/image3.jpeg',
    '/images/traject/image4.jpeg',
    '/images/traject/image5.jpeg',
    '/images/traject/image6.jpeg',
    '/images/traject/image7.jpeg',
    '/images/traject/image8.jpeg',
    '/images/traject/image9.jpeg',
    '/images/traject/image10.jpeg',
    '/images/traject/image11.jpeg',
    '/images/traject/image12.jpeg',
    '/images/traject/image13.jpeg',
    '/images/traject/image14.jpeg',
    '/images/traject/image15.jpeg',
    '/images/traject/image16.jpeg',
    '/images/traject/image17.jpeg',
    '/images/traject/image18.jpeg',
    '/images/traject/image19.jpeg',
    '/images/traject/image20.jpeg',
    '/images/traject/image21.jpeg',
    '/images/traject/image22.jpeg',
    '/images/traject/image23.jpeg',
    '/images/traject/image24.jpeg',
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation(); // Voorkomt sluiten van modal bij klikken binnen modal
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Raster van afbeeldingen */}
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
            <img src={selectedImage} alt="Geselecteerd" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
