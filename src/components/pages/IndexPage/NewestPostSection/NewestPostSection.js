import React from 'react';
import PageLink from '../../../atoms/PageLink/PageLink';
import StyledNewestPostSection from './NewestPostSection.styled';

const NewestPostSection = () => {
  return (
    <StyledNewestPostSection className="container">
      <PageLink to="/posts">Zobacz wszystkie wpisy</PageLink>
    </StyledNewestPostSection>
  );
};

export default NewestPostSection;
