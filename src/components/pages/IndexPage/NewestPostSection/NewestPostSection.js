import React from 'react';
import NewPostElement from 'components/NewPostElement/NewPostElement';
import PageLink from 'components/PageLink/PageLink';
import StyledNewestPostSection from './NewestPostSection.styled';
import Headline from '../../../Headline/Headline';

const NewestPostSection = () => {
  return (
    <StyledNewestPostSection>
      <Headline size={54} className="newest-post__headline">
        <span style={{ color: '#61DAFB' }}>Najnowsze</span>
        <br /> posty
      </Headline>
      <div className="newest-post__wrapper">
        <NewPostElement />
        <NewPostElement />
        <NewPostElement />
      </div>
      <PageLink to="/posts">Zobacz wszystkie wpisy</PageLink>
    </StyledNewestPostSection>
  );
};

export default NewestPostSection;
