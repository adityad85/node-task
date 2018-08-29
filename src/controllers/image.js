import request from 'request';
import { transformImage } from '../helpers';
import { imageConstants } from '../lib/otherConstants';

const streamImage = (url) => {
  const data = request(url);
  return data;
};


const sendImage = (req, res) => {
  const { url, format } = req.query;
  const finalFormat = format || imageConstants.IMAGE_TYPE;

  const transformationDetails = {
    format: finalFormat,
    width: imageConstants.WIDTH,
    height: imageConstants.HEIGHT,
  };
  try {
    const streamedImageData = streamImage(url);
    const transformedImage = transformImage(streamedImageData, transformationDetails);
    res.type(`image/${finalFormat}`);
    transformedImage.pipe(res);
  } catch (error) {
    res.json({ error: error.message });
  }
};


export default {
  sendImage,
  streamImage,
};
