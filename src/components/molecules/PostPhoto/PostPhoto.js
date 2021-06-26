import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GatsbyImage } from 'gatsby-plugin-image';

import propTypes from 'prop-types';

const PostPhoto = ({ imageData, postImageSign }) => {
  const [isPhotoScaled, setPhotoScaled] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.overflow = isPhotoScaled
      ? 'hidden'
      : null;
  }, [isPhotoScaled]);

  return (
    <>
      <figure className="post__photo-wrapper">
        <GatsbyImage
          className="post__photo"
          image={imageData.gatsbyImageData}
          alt=""
          onClick={() => {
            setPhotoScaled(true);
          }}
        />
        <figcaption className="post__photo-caption">{postImageSign}</figcaption>
      </figure>
      {isPhotoScaled &&
        createPortal(
          <div className="absolute-photo-background">
            <GatsbyImage
              className="absolute-photo"
              image={imageData.gatsbyImageData}
              objectFit="contain"
              onClick={() => {
                setPhotoScaled(false);
              }}
            />
          </div>,
          document.querySelector('body')
        )}
    </>
  );
};

PostPhoto.propTypes = {
  imageData: propTypes.objectOf(
    propTypes.oneOfType([propTypes.string, propTypes.shape, propTypes.number])
  ).isRequired,
  postImageSign: propTypes.string.isRequired,
};

export default PostPhoto;
