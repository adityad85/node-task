import sharp from 'sharp';
import request from 'request';

import { imageConstants } from '../lib/otherConstants';

/**
 * Gets the image data as stream.
 *
 * @param {*} url
 * @returns {Stream} Stream of the image.
 */
const streamImage = (url) => {
  const data = request(url);
  return data;
};

/**
 * This transforms the image to different shapes and file format
 *
 * @param {Stream} data
 * @param {Object} { format, width, height }
 * @returns {Stream} image transformed by the sharp function.
 */
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


/**
 * Gets the transformation details in an object
 *
 * @param {String} format
 * @returns {Object} details for transforming image
 */
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
