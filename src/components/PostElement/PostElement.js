import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import slugify from 'slugify';
import StyledPostElement from './PostElement.styled';

const PostElement = ({ data }) => {
  const {
    date,
    category,
    title,
    shortDescription,
    featuredImage: { url },
  } = data;

  return (
    <StyledPostElement>
      <div className="post__top">
        <date className="post__top__date">{date}</date>
        <span className="post__top__category">{category}</span>
      </div>
      <span className="post__title">{title}</span>
      <img src={url} alt="post" className="post__image" />
      <span className="post__description">{shortDescription}</span>
      <Link to={slugify(title, { lower: true })} className="post__button">
        Czytaj
      </Link>
    </StyledPostElement>
  );
};

PostElement.propTypes = {
  data: propTypes.shape({
    date: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    shortDescription: propTypes.string.isRequired,
    featuredImage: propTypes.shape({
      url: propTypes.string.isRequired,
    }),
  }).isRequired,
};

export default PostElement;
