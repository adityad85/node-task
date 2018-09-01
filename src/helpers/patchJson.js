import jsonpatch from 'jsonpatch';

/**
 * This is a function to patch an object.
 *
 * @param {Object} object
 * @param {Object} patch
 * @returns
 */
export const patchJSON = (object, patch) => {
  const updatedObj = jsonpatch.apply_patch(object, patch);
  return updatedObj;
};
