import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import propTypes from 'prop-types';
import slugify from 'slugify';
import StyledPostElement from './PostElement.styled';

const PostElement = ({ data, isPicturesDisplayed }) => {
  const {
    date,
    category,
    title,
    shortDescription,
    featuredImage: { fluid },
  } = data;

  return (
    <StyledPostElement>
      <div className="post__top">
        <time className="post__top__date">{date}</time>
        <span className="post__top__category">{category}</span>
      </div>
      <h2 className="post__title">{title}</h2>
      {isPicturesDisplayed && <Image fluid={fluid} className="post__picture" />}
      <span className="post__description">{shortDescription}</span>
      <Link to={slugify(title, { lower: true })} className="post__button">
        Czytaj
      </Link>
    </StyledPostElement>
  );
};

PostElement.propTypes = {
  isPicturesDisplayed: propTypes.bool.isRequired,
  data: propTypes.shape({
    date: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    shortDescription: propTypes.string.isRequired,
    featuredImage: propTypes.shape({
      fluid: propTypes.shape(propTypes.string),
    }),
  }),
};

PostElement.defaultProps = {
  data: {
    featuredImage: {
      fluid: {},
    },
  },
};

export default PostElement;
