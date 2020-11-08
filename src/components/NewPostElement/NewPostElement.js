import React from 'react';
import propTypes from 'prop-types';
import slugify from 'slugify';
import ArrowIcon from 'assets/svg/arrow-1.svg';
import StyledNewPostElement from './NewPostElement.styled';

const NewPostElement = ({ data }) => {
  const { title, date, shortDescription } = data;

  return (
    <StyledNewPostElement to={`/posts/${slugify(title, { lower: true })}`}>
      <div className="newest-post__wrapper__left">
        <h3>{title}</h3>
        <span className="newest-post__wrapper__left__description">
          {shortDescription}
        </span>
        <span>
          <ArrowIcon className="newest-post__wrapper__left__icon" />
          <date className="newest-post__wrapper__left__date">{date}</date>
        </span>
      </div>
    </StyledNewPostElement>
  );
};

NewPostElement.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    shortDescription: propTypes.string.isRequired,
  }).isRequired,
};

export default NewPostElement;
