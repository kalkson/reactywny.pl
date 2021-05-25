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
  height: 550px;
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

  .newest-post {
    &__description {
      overflow: hidden;
    }

    &__button {
      margin-top: auto;
    }

    &__headline {
      font-size: 2.4rem;
      margin-top: 15px;
    }
  }
`;

const Post = ({ title, description, featuredImage }) => {
  return (
    <StyledPost className="newest-post">
      <GatsbyImage image={featuredImage.gatsbyImageData} />
      <h3 className="newest-post__headline">{title}</h3>
      <p className="newest-post__description">{description}</p>
      <Button
        to={`/posts/${slugify(title, { lower: true })}`}
        className="newest-post__button"
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
