import sharp from 'sharp';
import request from 'request';

import { imageConstants } from '../lib/otherConstants';

const streamImage = (url) => {
  const data = request(url);
  return data;
};

const transformImage = (data, { format, width, height }) => {
  let transform = sharp();
  if (format) {
    transform = transform.toFormat(format);
  }
  if (width || height) {
    transform = transform.resize(width, height);
  }
  return data.pipe(transform);
};


const getTransformationDetails = (format) => {
  const finalFormat = format || imageConstants.IMAGE_TYPE;
  const transformationDetails = {
    format: finalFormat,
    width: imageConstants.WIDTH,
    height: imageConstants.HEIGHT,
  };
  return transformationDetails;
};


export {
  streamImage,
  transformImage,
  getTransformationDetails,
};
