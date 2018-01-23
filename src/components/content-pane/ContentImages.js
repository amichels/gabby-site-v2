import React from 'react';
import PropTypes from 'prop-types';
import baguetteBox from 'baguettebox.js';

// Components
import ContentImagesWrap from './ContentImagesWrap';
import ContentImage from './ContentImage';

baguetteBox.run('.js-portfolio');

const ContentImages = (props) => {
  
  const images = props.images

  return (
    <ContentImagesWrap className="js-portfolio">
      {images.map((image, i) => {
        return (
          <a key={i} href={image.full}>
            <ContentImage src={image.thumb} alt="Click to view image."/>
          </a>
        )
      })}
    </ContentImagesWrap>
  )
}

ContentImages.propTypes = {
  images: PropTypes.array.isRequired
}

export default ContentImages;