import React from 'react';
import { Link } from 'gatsby';
// import Image from 'gatsby-image';
import StyledWelcomeSection from './WelcomeSection.styled';
import Headline from '../../../Headline/Headline';
import Illustration from '../../../../assets/images/illu.svg';

// const query = graphql`
//   {
//     dk: file(name: { eq: "dk" }) {
//       childImageSharp {
//         fluid(maxWidth: 517, maxHeight: 600, quality: 100) {
//           ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
//   }
// `;

const WelcomeSection = () => {
  // const data = useStaticQuery(query);

  return (
    <StyledWelcomeSection>
      <h1 size={54} className="welcome-section__headline">
        <span style={{ color: '#61DAFB' }}>Ucz się</span>
        <br />
        razem
        <br />
        ze mną
      </h1>
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
          {/* <Image fluid={data.dk.childImageSharp.fluid} /> */}
          {/* <Image src={Illustration} /> */}
          {/* <img src={Illustration} alt="mainImage" /> */}
          <Illustration />
        </div>
      </div>
      <div className="background-stripe" />
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
