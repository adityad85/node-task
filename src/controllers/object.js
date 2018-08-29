import patchJSON from '../helpers';

const patchObject = (req, res) => {
  const { object, patch } = req.body;
  const updatedObj = patchJSON(object, patch);
  res.send({ success: true, updatedObj });
};

export default {
  patchObject,
};
