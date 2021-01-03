import { useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import PostElement from 'components/PostElement/PostElement';
import StyledPostsWrapperContainer from './PostsWrapperContainer.styled';
import StyledPostsWrapper from './PostsWrapper.styled';
import PostWrapperOptions from './PostWrapperOptions/PostWrapperOptions';

const query = graphql`
  {
    allDatoCmsPost(sort: { order: DESC, fields: date }) {
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
  const [isPicturesDisplayed, changePictureDisplay] = useState(true);

  const data = useStaticQuery(query);

  const {
    allDatoCmsPost: { nodes },
  } = data;

  const handleSwitch = () => {
    changePictureDisplay(!isPicturesDisplayed);
  };

  return (
    <StyledPostsWrapperContainer className="posts">
      <div className="posts__left-section">
        <h1>Wpisy</h1>

        <p className="posts__left-section__paragraph">
          Nowe wpisy pojawiają się przynajmniej raz w tygodniu - a przynajmniej
          taki jest zamiar. W treści artykułów staram się serwować jak
          najrzetelniejszą wiedzę, tak aby odbiorcy, czyli Wy, mogli mieć
          zaufanie do tego co im prezentuje. <br />
          <br />
          Kwestie, które poruszam w mojej twórczości dotyczą twardej jak skała
          strony technicznej, jak również tej miękkiej, o której nie wolno
          zapominać, a która w branży jest nie mniej ważna. <br />
          <br />
          Zapraszam do czytania, jak i komentowania.
        </p>
      </div>
      <StyledPostsWrapper className="posts__wrapper">
        <PostWrapperOptions handleSwitch={handleSwitch} />
        {nodes.map(post => {
          return (
            <PostElement
              key={post.id}
              data={post}
              isPicturesDisplayed={isPicturesDisplayed}
            />
          );
        })}
      </StyledPostsWrapper>
    </StyledPostsWrapperContainer>
  );
};

export default PostWrapperContainer;
