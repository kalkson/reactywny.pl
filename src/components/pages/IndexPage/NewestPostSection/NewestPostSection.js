import React, { useState, useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import slugify from 'slugify';
import Slider from 'react-slick';

import PageLink from 'components/atoms/PageLink/PageLink';
import Box from 'components/atoms/Box/Box';
import Button from 'components/atoms/Button/Button';
import Post from 'components/atoms/Post/Post';

import StyledNewestPostSection from './NewestPostSection.styled';

const query = graphql`
  {
    allDatoCmsPost(limit: 4) {
      edges {
        node {
          id
          category
          featuredImage {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
          description
          date
          title
        }
      }
    }
  }
`;

const slickSettings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const NewestPostSection = () => {
  const data = useStaticQuery(query);
  const nodes = data.allDatoCmsPost.edges;

  const [isTipVisible, setTipHidden] = useState(true);

  const swiper$ = useRef(null);

  let removeListeners;

  const hideTip = () => {
    setTipHidden(false);
    removeListeners();
  };

  removeListeners = () => {
    swiper$.current.removeEventListener('swiperight', hideTip);
    swiper$.current.removeEventListener('swipeleft', hideTip);
  };

  useEffect(() => {
    if (swiper$.current)
      swiper$.current.addEventListener('swiperight', hideTip);
    swiper$.current.addEventListener('swipeleft', hideTip);

    return () => {
      if (swiper$.current) removeListeners();
    };
  }, []);

  return (
    <StyledNewestPostSection className="container">
      <h2>Najnowsze wpisy</h2>
      {isTipVisible && (
        <div className="swipe-tip" role="dialog">
          Swipe
        </div>
      )}
      <div className="newest-static-container">
        <Box className="post-item-0 post-item">
          <div className="row">
            <div className="col-xs-7">
              <GatsbyImage
                image={nodes[0].node.featuredImage.gatsbyImageData}
              />
            </div>
            <div className="col-xs-5 post-item__content">
              <div className="post-item__meta-group">
                <date className="post-item__date">{nodes[0].node.date}</date>
                <span
                  className="post-item__category"
                  aria-label="kategoria wpisu"
                >
                  {nodes[0].node.category}
                </span>
              </div>
              <h3 className="post-item__headline">{nodes[0].node.title}</h3>
              <p className="post-item__description">
                {nodes[0].node.description}
              </p>
              <Button
                to={`/posts/${slugify(nodes[0].node.title, { lower: true })}`}
                className="post-item__button"
              >
                czytaj więcej
              </Button>
            </div>
          </div>
        </Box>

        <div className="row">
          <div className="col-xs-5">
            <Box className="post-item-1 post-item">
              <GatsbyImage
                image={nodes[1].node.featuredImage.gatsbyImageData}
              />
              <div className="post-item__content">
                <div className="post-item__meta-group">
                  <date className="post-item__date">{nodes[1].node.date}</date>
                  <span
                    className="post-item__category"
                    aria-label="kategoria wpisu"
                  >
                    {nodes[1].node.category}
                  </span>
                </div>
                <h3 className="post-item__headline">{nodes[1].node.title}</h3>
                <p className="post-item__description">
                  {nodes[1].node.description}
                </p>
                <Button
                  to={`/posts/${slugify(nodes[1].node.title, {
                    lower: true,
                  })}`}
                  className="post-item__button"
                >
                  czytaj więcej
                </Button>
              </div>
            </Box>
            <PageLink className="desktop-all-anchor" to="/posts">
              Zobacz wszystkie wpisy
            </PageLink>
          </div>

          <div className="col-xs-7">
            <Box className="asd post-item-2 post-item">
              <div className="row">
                <div className="col-sm-6">
                  <GatsbyImage
                    image={nodes[2].node.featuredImage.gatsbyImageData}
                  />
                  <Button
                    to={`/posts/${slugify(nodes[2].node.title, {
                      lower: true,
                    })}`}
                    className="post-item__button"
                  >
                    czytaj więcej
                  </Button>
                </div>
                <div className="col-sm-6">
                  <div className="post-item__meta-group">
                    <date className="post-item__date">
                      {nodes[2].node.date}
                    </date>
                    <span
                      className="post-item__category"
                      aria-label="kategoria wpisu"
                    >
                      {nodes[2].node.category}
                    </span>
                  </div>
                  <h3 className="post-item__headline">{nodes[2].node.title}</h3>
                  <p className="post-item__description">
                    {nodes[2].node.description}
                  </p>
                </div>
              </div>
            </Box>

            <Box className="asd post-item-3 post-item">
              <div className="row">
                <div className="col-sm-6">
                  <GatsbyImage
                    image={nodes[3].node.featuredImage.gatsbyImageData}
                  />
                  <Button
                    to={`/posts/${slugify(nodes[3].node.title, {
                      lower: true,
                    })}`}
                    className="post-item__button"
                  >
                    czytaj więcej
                  </Button>
                </div>
                <div className="col-sm-6">
                  <div className="post-item__meta-group">
                    <date className="post-item__date">
                      {nodes[3].node.date}
                    </date>
                    <span
                      className="post-item__category"
                      aria-label="kategoria wpisu"
                    >
                      {nodes[3].node.category}
                    </span>
                  </div>
                  <h3 className="post-item__headline">{nodes[3].node.title}</h3>
                  <p className="post-item__description">
                    {nodes[3].node.description}
                  </p>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>

      <div className="newest-slider-container" ref={swiper$}>
        <Slider {...slickSettings}>
          {nodes.map(
            ({
              node: { title, featuredImage, description, id, date, category },
            }) => (
              <Post
                key={id}
                title={title}
                description={description}
                featuredImage={featuredImage}
                date={date}
                category={category}
              />
            )
          )}
        </Slider>
        <PageLink to="/posts" className="newest-slider-container__anchor">
          Zobacz wszystkie wpisy
        </PageLink>
      </div>
    </StyledNewestPostSection>
  );
};

export default NewestPostSection;
