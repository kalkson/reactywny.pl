import React from 'react';
import ArrowIcon from 'assets/svg/arrow-1.svg';
import StyledNewPostElement from './NewPostElement.styled';

const NewPostElement = () => (
  <StyledNewPostElement>
    <div className="newest-post__wrapper__left">
      <h3>Czym jest git?</h3>
      <span className="newest-post__wrapper__left__description">
        Podstawy pracy z gitem
      </span>
      <span>
        <ArrowIcon className="newest-post__wrapper__left__icon" />
        <date className="newest-post__wrapper__left__date">12.12.20</date>
      </span>
    </div>
  </StyledNewPostElement>
);

export default NewPostElement;
