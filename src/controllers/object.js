import { patchJSON } from '../helpers';

/**
 * This function takes the request and updates the object
 *
 * @param {Object} req
 * @param {Object} res
 */
const patchObject = (req, res) => {
  const { object, patch } = req.body;
  const updatedObj = patchJSON(object, patch);
  res.send({ success: true, updatedObj });
};

export default {
  patchObject,
};
