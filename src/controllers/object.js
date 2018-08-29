// const rfc6902 = require('rfc6902');
import jsonpatch from 'jsonpatch';

const patchObject = (req, res) => {
  const { object, patch } = req.body;
  const receivedObj = JSON.parse(object);
  const updatedObj = jsonpatch.apply_patch(receivedObj, patch);
  res.send({ success: true, updatedObj });
};

export default {
  patchObject,
};
