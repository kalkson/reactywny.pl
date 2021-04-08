import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import slugify from 'slugify';
import propTypes from 'prop-types';
import StyledNewPost from './NewPostCorouselItem.styled';

const NewPost = ({
  className,
  title,
  description,
  featuredImage,
  date,
  category,
}) => {
  return (
    <StyledNewPost className={className}>
      <div className="top">
        <span className="date">{date}</span>
        &nbsp;
        <span className="category">{category}</span>
      </div>
      <h4 className="heading">{title}</h4>
      <GatsbyImage className="image" image={featuredImage.gatsbyImageData} />
      <p className="description">{description}</p>
      <Link className="linkk" to={`posts/${slugify(title, { lower: true })}`}>
        Czytaj
      </Link>
    </StyledNewPost>
  );
};

NewPost.propTypes = {
  className: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  featuredImage: propTypes.shape({
    gatsbyImageData: propTypes.shape(),
  }).isRequired,
};

export default NewPost;
