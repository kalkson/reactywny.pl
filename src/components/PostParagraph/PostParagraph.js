import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';

const PostParagraph = ({ className, content }) => {
  const paragraph = useRef(null);

  useEffect(() => {
    paragraph.current.innerHTML = content;
  }, []);

  return <p ref={paragraph} className={className} />;
};

PostParagraph.propTypes = {
  className: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default PostParagraph;
