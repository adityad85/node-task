import { transformImage, streamImage, getTransformationDetails } from '../helpers';

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
