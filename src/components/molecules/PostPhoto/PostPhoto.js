import { GatsbyImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import React, { useEffect,useState } from 'react';
import { createPortal } from 'react-dom';

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
          alt="zdjęcie tematyczne"
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
              alt=""
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
  imageData: propTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    gatsbyImageData: propTypes.object,
  }).isRequired,
  postImageSign: propTypes.string.isRequired,
};

export default PostPhoto;
