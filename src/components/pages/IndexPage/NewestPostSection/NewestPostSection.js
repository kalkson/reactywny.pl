import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import PageLink from '../../../atoms/PageLink/PageLink';
import StyledNewestPostSection from './NewestPostSection.styled';
import Box from '../../../atoms/Box/Box';
import Button from '../../../atoms/Button/Button';
import Post from '../../../atoms/Post/Post';

const query = graphql`
  {
    allDatoCmsPost(limit: 4) {
      edges {
        node {
          id
          category
          featuredImage {
            gatsbyImageData(forceBlurhash: true)
          }
          description
          date
          title
        }
      }
    }
  }
`;

const NewestPostSection = () => {
  const data = useStaticQuery(query);
  const nodes = data.allDatoCmsPost.edges;

  console.log(nodes);

  return (
    <StyledNewestPostSection className="container">
      <div className="newest-static-container">
        <Box className="newest-post-0 newest-post">
          <div className="row">
            <div className="col-xs-7">
              <GatsbyImage
                image={nodes[0].node.featuredImage.gatsbyImageData}
              />
            </div>
            <div className="col-xs-5 newest-post__content">
              <h3 className="newest-post__headline">{nodes[0].node.title}</h3>
              <p className="newest-post__description">
                {nodes[0].node.description}
              </p>
              <Button className="newest-post__button">czytaj więcej</Button>
            </div>
          </div>
        </Box>

        <div className="row">
          <div className="col-xs-5">
            <Box className="newest-post-1 newest-post">
              <GatsbyImage
                image={nodes[1].node.featuredImage.gatsbyImageData}
              />
              <div className="newest-post__content">
                <h3 className="newest-post__headline">{nodes[1].node.title}</h3>
                <p className="newest-post__description">
                  {nodes[1].node.description}
                </p>
                <Button className="newest-post__button">czytaj więcej</Button>
              </div>
            </Box>
            <PageLink to="/posts">Zobacz wszystkie wpisy</PageLink>
          </div>

          <div className="col-xs-7">
            <Box className="asd newest-post-2 newest-post">
              <div className="row">
                <div className="col-sm-6">
                  <GatsbyImage
                    image={nodes[2].node.featuredImage.gatsbyImageData}
                  />
                  <Button className="newest-post__button">czytaj więcej</Button>
                </div>
                <div className="col-sm-6">
                  <h3 className="newest-post__headline">
                    {nodes[2].node.title}
                  </h3>
                  <p className="newest-post__description">
                    {nodes[2].node.description}
                  </p>
                </div>
              </div>
            </Box>

            <Box className="asd newest-post-3 newest-post">
              <div className="row">
                <div className="col-sm-6">
                  <GatsbyImage
                    image={nodes[3].node.featuredImage.gatsbyImageData}
                  />
                  <Button className="newest-post__button">czytaj więcej</Button>
                </div>
                <div className="col-sm-6">
                  <h3 className="newest-post__headline">
                    {nodes[3].node.title}
                  </h3>
                  <p className="newest-post__description">
                    {nodes[3].node.description}
                  </p>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>

      <div className="newest-slider-container">
        <Slider
          settings={{
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }}
        >
          {nodes.map(({ node: { title, featuredImage, description, id } }) => (
            <Post
              key={id}
              title={title}
              description={description}
              featuredImage={featuredImage}
            />
          ))}
        </Slider>
      </div>
    </StyledNewestPostSection>
  );
};

export default NewestPostSection;
