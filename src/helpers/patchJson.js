import jsonpatch from 'jsonpatch';

export const patchJSON = (object, patch) => {
  const updatedObj = jsonpatch.apply_patch(object, patch);
  return updatedObj;
};
