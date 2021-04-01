import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import slugify from 'slugify';
import propTypes from 'prop-types';
import StyledNewPost from './NewPost.styled';

const NewPost = ({
  className,
  data: { title, description, featuredImage, date, category },
}) => {
  return (
    <StyledNewPost className={className}>
      <div className="top">
        <span className="date">{date}</span>
        &nbsp;
        <span className="category">{category}</span>
      </div>
      <h4 className="heading">{title}</h4>
      <Image className="image" fluid={featuredImage.fluid} />
      <p className="description">{description}</p>
      <Link className="linkk" to={`posts/${slugify(title, { lower: true })}`}>
        Czytaj
      </Link>
    </StyledNewPost>
  );
};

NewPost.propTypes = {
  className: propTypes.string.isRequired,
  data: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    date: propTypes.string,
    category: propTypes.string,
    featuredImage: propTypes.shape({
      fluid: propTypes.shape(),
    }),
  }).isRequired,
};

export default NewPost;
