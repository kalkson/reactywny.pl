import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import StyledAdnotation from './Adnotation.styled';

const query = graphql`
  {
    file(name: { eq: "damian-kalka" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const Adnotation = () => {
  const data = useStaticQuery(query);

  return (
    <StyledAdnotation className="adnotation">
      <div className="adnotation__image-container">
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          className="adnotation__image"
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
};

export default Adnotation;
