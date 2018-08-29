import jsonpatch from 'jsonpatch';

export const patchJSON = (object, patch) => {
  const receivedObj = JSON.parse(object);
  const updatedObj = jsonpatch.apply_patch(receivedObj, patch);
  return updatedObj;
};
