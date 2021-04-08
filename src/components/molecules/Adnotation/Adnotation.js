import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import StyledAdnotation from './Adnotation.styled';

const Adnotation = () => (
  <StyledAdnotation className="adnotation">
    <div className="adnotation__image-container">
      <StaticImage
        src="../../../assets/images/damian-kalka.jpg"
        alt="moje zdjęcie"
        layout="fullWidth"
        placeholder="blurred"
      />
    </div>
    <div className="adnotation__description">
      <h4 className="adnotation__description__name">Damian Kalka</h4>
      <p className="adnotation__description__paragraph">
        Początkujący programista, student, fascynat computer science oraz
        webdevelopmentu
      </p>
    </div>
  </StyledAdnotation>
);

export default Adnotation;
