import { Link } from 'gatsby';
import React from 'react';
import StyledPostElement from './PostElement.styled';

const PostElement = () => {
  return (
    <StyledPostElement>
      <div className="post__top">
        <date className="post__top__date">12 grudnia 20</date>
        <span className="post__top__category">GitHub</span>
      </div>
      <span className="post__title">Czym jest GitHub?</span>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="post"
        className="post__image"
      />
      <span className="post__description">Wszystko o gitHubie - podstawy</span>
      <Link to="/" className="post__button">
        Czytaj
      </Link>
    </StyledPostElement>
  );
};

export default PostElement;
