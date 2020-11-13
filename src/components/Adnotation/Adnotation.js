import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import StyledAdnotation from './Adnotation.styled';

const query = graphql`
  {
    file(name: { eq: "damian-kalka" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Adnotation = () => {
  const data = useStaticQuery(query);

  console.log(data);

  return (
    <StyledAdnotation className="adnotation">
      <Image
        fluid={data.file.childImageSharp.fluid}
        className="adnotation__image"
      />
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
