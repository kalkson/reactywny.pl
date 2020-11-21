import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
// import NewPostElement from 'components/NewPostElement/NewPostElement';
import PageLink from 'components/PageLink/PageLink';
import Wires from 'assets/svg/wires.svg';
import StyledNewestPostSection from './NewestPostSection.styled';
import NewPostCarousel from '../../../NewPostCarousel/NewPostCarousel';

export const query = graphql`
  {
    allDatoCmsPost(limit: 3) {
      nodes {
        shortDescription
        title
        date
        id
      }
    }
  }
`;

const NewestPostSection = () => {
  // const data = useStaticQuery(query);

  return (
    <StyledNewestPostSection>
      <Wires className="newest-post__icon" />
      <div className="newest-post">
        <h2 className="newest-post__headline">
          <span style={{ color: '#61DAFB' }}>Najnowsze</span>
          <br /> posty
        </h2>
        {/* <div className="newest-post__wrapper"> */}
        {/* {data.allDatoCmsPost.nodes.map(post => (
            <NewPostElement data={post} key={post.id} />
          ))} */}
        <NewPostCarousel className="newest-post__wrapper" />
        {/* </div> */}
      </div>
      <PageLink to="/posts">Zobacz wszystkie wpisy</PageLink>
    </StyledNewestPostSection>
  );
};

export default NewestPostSection;
