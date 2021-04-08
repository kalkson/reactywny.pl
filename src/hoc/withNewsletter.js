/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect, useRef } from 'react';
import NewsletterBar from '../components/molecules/NewsletterBar/NewsletterBar';
import NewsletterButton from '../components/molecules/NewsletterBar/NewsletterButton';
import { useScroll } from '../hooks/useScroll';

const withNewsletter = WrappedComponent => {
  const HOC = props => {
    const [scrollLevel] = useScroll();
    const [isButtonVisible, setButtonVisible] = useState(false);
    const [isNewsletterVisible, setNewsletterVisible] = useState(false);
    const [isClosedOneTime, setCloseOneTime] = useState(false);

    const button = useRef(null);

    useEffect(() => {
      if (scrollLevel > 65 && !isButtonVisible && !isClosedOneTime)
        setButtonVisible(true);
      else if (scrollLevel <= 65 && isButtonVisible) {
        setButtonVisible(false);
        setNewsletterVisible(false);
      }
    }, [scrollLevel]);

    return (
      <>
        <WrappedComponent {...props} />
        <NewsletterButton
          isButtonVisible={isButtonVisible}
          setNewsletterVisible={setNewsletterVisible}
          isNewsletterVisible={isNewsletterVisible}
          ref={button}
        />
        <NewsletterBar
          isNewsletterVisible={isNewsletterVisible}
          setNewsletterVisible={setNewsletterVisible}
          setCloseOneTime={setCloseOneTime}
          setButtonVisible={setButtonVisible}
          isCloseButtonVisible
        />
      </>
    );
  };
  HOC.displayName = 'withNewsletter';

  return HOC;
};

export default withNewsletter;
