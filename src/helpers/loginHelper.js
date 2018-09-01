import jwt from 'jsonwebtoken';
import CONSTANTS from '../lib/constants';


/**
 * This is a function to send the JWT Token by using the username and password
 *
 * @param {String} username
 * @param {String} password
 * @returns
 */
export const loginHelper = (username, password) => {
  const payload = {
    username,
    password,
  };

  const token = jwt.sign(payload, CONSTANTS.JWT_ENCRYPTION, {
    expiresIn: CONSTANTS.JWT_EXPIRATION,
  });
  return token;
};
