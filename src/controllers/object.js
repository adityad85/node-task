import jsonpatch from 'jsonpatch';

const patchObject = (req, res) => {
  const { object: receivedObj, patch } = req.body;
  const updatedObj = jsonpatch.apply_patch(receivedObj, patch);
  res.send({ success: true, updatedObj });
};

export default {
  patchObject,
};
