import { graphql, useStaticQuery } from 'gatsby';
import React, { useRef, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import gsap from 'gsap';
import NewPost from './NewPost/NewPost';
import StyledNewPostCarousel from './NewPostCarousel.styled';
import Arrow from '../../assets/svg/arrow-1.svg';

const query = graphql`
  {
    allDatoCmsPost(limit: 5, sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        date
        description
        category
        featuredImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`;

const NewPostCarousel = ({ className }) => {
  const data = useStaticQuery(query);
  const wrapper = useRef(null);
  let elements;

  const [isSwipeable, setSwipeable] = useState(true);

  const toPrevious = () => {
    if (!isSwipeable) return;
    setSwipeable(false);

    gsap.to(elements[0], {
      opacity: 0,
      x: -100,
      duration: 0.5,
      onComplete: () => {
        elements[elements.length - 1].after(elements[0]);
        elements = Array.from(wrapper.current.children).filter(
          element => element.tagName === 'DIV'
        );
        gsap.set(elements[elements.length - 1], {
          x: 10 * (elements.length - 1),
          y: 10 * (elements.length - 1),
          duration: 0,
        });
        gsap.to(elements[elements.length - 1], {
          opacity: null,
        });

        setSwipeable(true);
      },
    });

    elements.forEach((element, i) => {
      if (i !== 0)
        gsap.to(element, {
          x: `-=10`,
          y: `-=10`,
          duration: 1,
        });
    });
  };

  useEffect(() => {
    // eslint-disable-next-line global-require
    require('swiped-events');

    elements = Array.from(wrapper.current.children).filter(
      element => element.tagName === 'DIV'
    );

    elements.forEach((element, i) => {
      gsap.set(element, {
        x: 10 * i,
        y: 10 * i,
      });
    });

    wrapper.current.addEventListener('swiped-left', toPrevious);

    // return () => {
    //   wrapper.current.removeEventListener('swiped-left', toPrevious);
    // };
  });

  return (
    <StyledNewPostCarousel className={className} ref={wrapper}>
      <button
        type="button"
        className="carousel__button__prev"
        onClick={() => toPrevious()}
      >
        <Arrow />
      </button>
      {data.allDatoCmsPost.nodes.map((node, i) => {
        return (
          <NewPost key={node.id} className={`carousel__post-${i}`} {...node} />
        );
      })}
    </StyledNewPostCarousel>
  );
};

NewPostCarousel.propTypes = {
  className: propTypes.string.isRequired,
};

export default NewPostCarousel;
