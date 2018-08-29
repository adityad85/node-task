import jwt from 'jsonwebtoken';
import CONSTANTS from '../lib/constants';


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
