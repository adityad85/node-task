import { transformImage, streamImage, getTransformationDetails } from '../helpers';

/**
 * This function handles the image sending from the API
 *
 * @param {Object} req
 * @param {Object} res
 */
const sendImage = (req, res) => {
  const { url, format } = req.query;

  const transformationDetails = getTransformationDetails(format);

  try {
    const streamedImageData = streamImage(url);
    const transformedImage = transformImage(streamedImageData, transformationDetails);
    res.type(`image/${transformationDetails.format}`);
    transformedImage.pipe(res);
  } catch (error) {
    res.json({ error: error.message });
  }
};


export default {
  sendImage,
};
