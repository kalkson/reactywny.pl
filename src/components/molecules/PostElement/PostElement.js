import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import slugify from 'slugify';
import StyledPostElement from './PostElement.styled';

const PostElement = ({
  date,
  category,
  title,
  shortDescription,
  featuredImage: { gatsbyImageData },
  isPicturesDisplayed,
  ...props
}) => {
  return (
    <StyledPostElement {...props}>
      <div className="post__top">
        <time className="post__top__date">{date}</time>
        <span className="post__top__category">{category}</span>
      </div>
      <h2 className="post__title">{title}</h2>
      {isPicturesDisplayed && (
        <GatsbyImage image={gatsbyImageData} className="post__picture" />
      )}
      <span className="post__description">{shortDescription}</span>
      <Link to={slugify(title, { lower: true })} className="post__button">
        Czytaj
      </Link>
    </StyledPostElement>
  );
};

PostElement.propTypes = {
  isPicturesDisplayed: propTypes.bool.isRequired,
  date: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  shortDescription: propTypes.string.isRequired,
  featuredImage: propTypes.shape({
    gatsbyImageData: propTypes.shape(),
  }),
};

PostElement.defaultProps = {
  featuredImage: null,
};

export default PostElement;
