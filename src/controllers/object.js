import { patchJSON } from '../helpers';

/**
 * This function takes the request and updates the object
 *
 * @param {Object} req
 * @param {Object} res
 */
const patchObject = (req, res) => {
  const { object, patch } = req.body;
  try {
    const updatedObj = patchJSON(object, patch);
    res.send({ success: true, updatedObj });
  } catch (error) {
    res.send({ error: error.message });
  }
};

export default {
  patchObject,
};
