import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useScroll = () => {
  const [scrollPosition, changeScrollPosition] = useState(0);
  const [documentHeight, setScreenHeight] = useState(
    document.body.scrollHeight
  );
  const [screenWidth, changeScreenWidth] = useState(window.screenX);

  const updateScrollLevel = () => {
    const percentage = Math.round((window.scrollY / documentHeight) * 100);
    changeScrollPosition(percentage);
  };

  const updateScreenWidth = () => {
    changeScreenWidth(document.body.scrollHeight);
  };

  useEffect(() => {
    if (documentHeight) document.addEventListener('scroll', updateScrollLevel);

    return () => {
      document.removeEventListener('scroll', updateScrollLevel);
    };
  }, [documentHeight]);

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    setScreenHeight(document.body.clientHeight);
  }, [documentHeight, screenWidth]);

  return [scrollPosition];
};
