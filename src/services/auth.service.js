import jwt from 'jsonwebtoken';
import CONSTANTS from '../lib/constants';

/**
 * This ensures request to contain token also makes sure that it's valid
 *
 * @param {Object} req
 * @param {Object} res
 * @param {*} next
 */
const ensureAuthenticated = (req, res, next) => {
  let token;
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')[1];
    token = bearer;
  }
  if (token) {
    jwt.verify(token, CONSTANTS.JWT_ENCRYPTION, (err, decoded) => {
      if (err) {
        res.json({
          success: false,
          message: 'Failed to authenticate token',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.json({
      success: false,
      message: 'No token provided',
    });
  }
};

export default {
  ensureAuthenticated,
};

