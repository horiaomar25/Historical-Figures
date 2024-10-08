// __mocks__/next/image.js
import React from 'react';

const NextImage = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} />
);

export default NextImage;