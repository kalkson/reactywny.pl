/* eslint-disable react/display-name */
import { useEffect, useRef, useState } from 'react';

const useProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const totalPageHeight = useRef();

  useEffect(() => {
    totalPageHeight.current = document.body.clientHeight;
  });

  const scrollListenerCallback = () => {
    const currentScrollBottomPosition = window.scrollY;
    const percentage =
      currentScrollBottomPosition /
      (totalPageHeight.current - window.innerHeight);

    setProgress(percentage);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollListenerCallback);

    return () => {
      document.removeEventListener('scroll', scrollListenerCallback);
    };
  });

  return (progress * 100).toFixed(4);
};

export default useProgressBar;
