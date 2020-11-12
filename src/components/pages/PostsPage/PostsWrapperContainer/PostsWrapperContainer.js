import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import PostElement from 'components/PostElement/PostElement';
import StyledPostsWrapperContainer from './PostsWrapperContainer.styled';
import StyledPostsWrapper from './PostsWrapper.styled';

const query = graphql`
  {
    allDatoCmsPost {
      nodes {
        category
        date
        shortDescription
        title
        id
        featuredImage {
          fluid(
            maxWidth: 478
            maxHeight: 300
            imgixParams: { auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
            tracedSVG
          }
        }
      }
    }
  }
`;

const PostWrapperContainer = () => {
  const data = useStaticQuery(query);

  const {
    allDatoCmsPost: { nodes },
  } = data;

  return (
    <StyledPostsWrapperContainer className="posts">
      <div className="posts__left-section">
        <h1>Wpisy</h1>
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
        {nodes.map(post => {
          return <PostElement key={post.id} data={post} />;
        })}
      </StyledPostsWrapper>
    </StyledPostsWrapperContainer>
  );
};

export default PostWrapperContainer;
