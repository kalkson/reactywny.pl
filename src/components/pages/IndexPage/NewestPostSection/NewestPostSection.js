import React from 'react';
import PageLink from '../../../atoms/PageLink/PageLink';
import Wires from '../../../../assets/svg/wires.svg';
import StyledNewestPostSection from './NewestPostSection.styled';
import NewPostCarousel from '../../../organisms/NewPostCarousel/NewPostCarousel';

const NewestPostSection = () => {
  return (
    <StyledNewestPostSection>
      <Wires className="newest-post__icon" />
      <div className="newest-post">
        <h2 className="newest-post__headline">
          <span style={{ color: '#61DAFB' }}>Najnowsze</span>
          <br />
          posty
        </h2>
        <NewPostCarousel className="newest-post__wrapper" />
      </div>
      <PageLink to="/posts">Zobacz wszystkie wpisy</PageLink>
    </StyledNewestPostSection>
  );
};

export default NewestPostSection;
