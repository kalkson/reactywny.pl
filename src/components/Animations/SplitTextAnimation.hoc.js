// import React, { useEffect } from 'react';
// import propTypes from 'prop-types';
// import gsap from 'gsap/gsap-core';
// import { SplitText } from 'gsap/SplitText';

// gsap.registerPlugin(SplitText);

// const withSplit = ({ children }) => {
//   useEffect(() => {
//     const tl = gsap.timeline();
//     const textToSplit = new SplitText(children, { type: 'words, chars' });
//     const { chars } = textToSplit;

//     gsap.set('#quote', { perspective: 400 });

//     tl.from(
//       chars,
//       {
//         duration: 0.8,
//         opacity: 0,
//         scale: 0,
//         y: 80,
//         rotationX: 180,
//         transformOrigin: '0% 50% -50',
//         ease: 'back',
//         stagger: 0.01,
//       },
//       '+=0'
//     );
//   }, []);

//   return <span>{children}</span>;
// };

// withSplit.propTypes = {
//   children: propTypes.element.isRequired,
// };

// export default withSplit;
