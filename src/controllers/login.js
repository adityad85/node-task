import jwt from 'jsonwebtoken';
import CONSTANTS from '../lib/constants';


const login = async (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.send({ error: 'error' });
  }
  const payload = {
    username,
  };

  const token = jwt.sign(payload, CONSTANTS.JWT_ENCRYPTION, {
    expiresIn: CONSTANTS.JWT_EXPIRATION,
  });

  res.json({
    success: true,
    message: 'User Authenticated',
    token,
  });
};

export default {
  login,
};
