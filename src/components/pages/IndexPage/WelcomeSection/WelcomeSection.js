import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import StyledWelcomeSection from './WelcomeSection.styled';
import Headline from '../../../Headline/Headline';

const query = graphql`
  {
    dk: file(name: { eq: "dk" }) {
      childImageSharp {
        fluid(maxWidth: 517, maxHeight: 600, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    background: file(name: { eq: "background-image" }) {
      childImageSharp {
        fluid(quality: 40) {
          src
        }
      }
    }
  }
`;

const WelcomeSection = () => {
  const data = useStaticQuery(query);
  console.log(data);

  return (
    <StyledWelcomeSection
      background={data.background.childImageSharp.fluid.src}
    >
      <Headline size={54} className="welcome-section__headline">
        <span style={{ color: '#61DAFB' }}>Ucz się</span>
        <br />
        razem
        <br />
        ze mną
      </Headline>
      <div className="welcome-section__content">
        <Headline size={36}>Hello!</Headline>
        <p className="welcome-sction__content__paragraph">
          Niezmiernie mi miło, że się tutaj znalazłeś. A jeżeli tak się stało,
          to znaczy, że jesteś zainteresowany programowaniem tak jak ja. <br />
          <br />
          Blog ten poświęcony jest szeroko pojętemu webdevelopmentu. Znajdziesz
          tutaj posty, dotyczące tworzeniu stron internetowych w najróżniejszych
          technologiach. Aczkolwiek w tej dziedzinie moim konikiem jest
          ekosystem React. Więcej o mnie możesz dowiedzieć się{' '}
          <Link to="/faq">tutaj</Link>, a tymczasem miłego czytania :)
        </p>
        <div className="welcome-sction__content__image-cont">
          {/* <img
            src="../../../../assets/images/dk.png"
            alt="damian-kalka"
            className="welcome-sction__content__image-cont__image"
          /> */}
          <Image fluid={data.dk.childImageSharp.fluid} />
        </div>
      </div>
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
