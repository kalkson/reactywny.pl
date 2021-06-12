import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import slugify from 'slugify';
import Box from '../Box/Box';
import Button from '../Button/Button';

const StyledPost = styled(Box)`
  width: 98%;
  padding: 20px;
  display: flex;
  flex-flow: column;
  margin: 60px auto 5px !important;
  box-shadow: none;
  cursor: move;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 auto 20px;
    box-shadow: initial;
    height: 450px;
    cursor: initial;
  }

  color: ${({ theme }) => theme.colors.text};

  .post-item {
    &__description {
      overflow: hidden;
      margin-bottom: 25px;
    }

    &__button {
      margin-top: auto;
    }

    &__headline {
      font-size: 2.4rem;
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
`;

const Post = ({ title, description, featuredImage, ...props }) => {
  return (
    <StyledPost className="post-item" {...props}>
      <GatsbyImage image={featuredImage.gatsbyImageData} />
      <h3 className="post-item__headline">{title}</h3>
      <p className="post-item__description">{description}</p>
      <Button
        to={`/posts/${slugify(title, { lower: true })}`}
        className="post-item__button"
      >
        czytaj więcej
      </Button>
    </StyledPost>
  );
};

Post.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  featuredImage: propTypes.shape.isRequired,
};

export default Post;
