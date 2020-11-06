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
        <p className="posts__left-section__paragraph">
          Nowe wpisy pojawiają się raz w tygodniu - a przynajmniej taki jest
          zamiar. Jak na razie udaje mi się zachować regularność. W treści
          artykułów serwuję jak najrzetelniejszą wiedzę. <br />
          <br />
          Kwestie, które poruszam w mojej twórczości dotyczą twardej jak skała
          strony technicznej, jak również tej miękkiej, o której nie wolno
          zapominać, a która w branży jest nie mniej ważna. <br />
          <br />
          Zapraszam do czytania, jak i komentowania
        </p>
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
