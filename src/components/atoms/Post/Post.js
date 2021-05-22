import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import Box from '../Box/Box';
import Button from '../Button/Button';

const StyledPost = styled(Box)`
  width: 98%;
  margin: 0 auto 20px;
  padding: 20px;
  height: 450px;
  display: flex;
  flex-flow: column;

  color: ${({ theme }) => theme.colors.text};

  .newest-post {
    &__description {
      max-height: 100px;
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
  console.log(title);
  return (
    <StyledPost className="newest-post">
      <GatsbyImage image={featuredImage.gatsbyImageData} />
      <h3 className="newest-post__headline">{title}</h3>
      <p className="newest-post__description">{description}</p>
      <Button className="newest-post__button">czytaj więcej</Button>
    </StyledPost>
  );
};

Post.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  featuredImage: propTypes.shape.isRequired,
};

export default Post;
