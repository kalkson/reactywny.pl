import Headline from 'components/Headline/Headline';
import React from 'react';
import PostElement from 'components/PostElement/PostElement';
import StyledPostsWrapperContainer from './PostsWrapperContainer.styled';
import StyledPostsWrapper from './PostsWrapper.styled';

const PostWrapperContainer = () => {
  return (
    <StyledPostsWrapperContainer className="posts">
      <div className="posts__left-section">
        <Headline size={54}>Wpisy</Headline>
      </div>
      <StyledPostsWrapper className="posts__wrapper">
        <PostElement />
        <PostElement />
        <PostElement />
        <PostElement />
        <PostElement />
      </StyledPostsWrapper>
    </StyledPostsWrapperContainer>
  );
};

export default PostWrapperContainer;
