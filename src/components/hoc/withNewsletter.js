/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect, useRef } from 'react';
import NewsletterBar from '../NewsletterBar/NewsletterBar';
import NewsletterButton from '../NewsletterBar/NewsletterButton';

const withNewsletter = WrappedComponent => {
  const HOC = props => {
    const [isButtonVisible, setButtonVisible] = useState(false);
    const [isNewsletterVisible, setNewsletterVisible] = useState(false);
    const [allowScroll, setAllowScroll] = useState(true);

    const button = useRef(null);

    const listener = () => {
      const documentHeight = document.body.clientHeight;
      console.dir(window);
      if (
        window.scrollY >=
        0.7 * (documentHeight - window.screen.availHeight)
      ) {
        setButtonVisible(true);
        setAllowScroll(false);

        button.current.style.transform = 'translateX(0)';
        console.log(button.current.style.transform);
      }
    };

    useEffect(() => {
      console.log(button);
      if (allowScroll) document.addEventListener('scroll', listener);

      return () => {
        document.removeEventListener('scroll', listener);
      };
    });

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
        />
      </>
    );
  };
  HOC.displayName = 'withNewsletter';

  return HOC;

  //   return HOC;
};

// withNewsletter.displayName = 'withNewsletter';

export default withNewsletter;
