import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import gsap from 'gsap';

const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
  overflow: hidden;

  & span {
    display: inline-block;
    animation: appear 0.4s linear forwards;
    transform: translateY(100%);
    z-index: 1;
    position: relative;
  }

  .stripe {
    position: relative;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    height: 6px;
    transform: translateY(-14px);

    @media ${({ theme }) => theme.media.laptop} {
      height: 9px;
      transform: translateY(-20px);
    }
  }
`;

const TextGroup = ({ strings }) => {
  const span$ = useRef(null);
  const stripe$ = useRef(null);
  //   const [activeNode, setActiveNode] = useState(strings[0]);
  const [activeNodeNumber, setActiveNodeNumber] = useState(0);
  const [activeWidth, setActiveWidth] = useState(null);

  console.log(activeWidth);

  const changeString = () => {
    if (activeNodeNumber === strings.length - 1) {
      setActiveNodeNumber(0);
    } else {
      setActiveNodeNumber(activeNodeNumber + 1);
    }
  };

  const triggerChangeString = () => {
    gsap.fromTo(
      span$.current,
      { y: 0 },
      { y: '-100%', duration: 0.4, onComplete: changeString }
    );
  };

  useEffect(() => {
    gsap.fromTo(span$.current, { y: '100%' }, { y: 0, delay: 0.2 });
    // setInterval(triggerChangeString, 3000);

    const { width } = span$.current.getBoundingClientRect();
    setActiveWidth(width);

    gsap.to(stripe$.current, { width, duration: 0.2 });

    setTimeout(triggerChangeString, 2600);
  }, [activeNodeNumber]);

  return (
    <StyledSpan>
      <span ref={span$}>{strings[activeNodeNumber]}</span>
      <div className="stripe" ref={stripe$} />
    </StyledSpan>
  );
};

TextGroup.propTypes = {
  strings: propTypes.arrayOf(propTypes.string).isRequired,
};

export default TextGroup;
